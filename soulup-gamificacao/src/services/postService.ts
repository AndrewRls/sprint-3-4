import type { NovoPost, Post } from '../types'
import { ApiError, requisicao } from './api'

const RECURSO = '/posts'

export const postService = {
  // GET /posts
  listar: (sinal?: AbortSignal) => requisicao<Post[]>(RECURSO, { sinal }),

  // A API ainda não tem GET /posts/{id}: buscamos a lista e filtramos pelo id.
  // Se o back-end criar esse endpoint, troque só o corpo desta função.
  buscarPorId: async (id: number | string, sinal?: AbortSignal): Promise<Post> => {
    const posts = await requisicao<Post[]>(RECURSO, { sinal })
    const encontrado = posts.find((post) => post.idPost === Number(id))

    if (!encontrado) {
      throw new ApiError('Post não encontrado.', 404)
    }

    return encontrado
  },

  // POST /posts (a API responde 201 sem corpo)
  criar: (dados: NovoPost) =>
    requisicao<void>(RECURSO, { metodo: 'POST', corpo: dados }),
}