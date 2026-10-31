import type {
  Credenciais,
  NovoUsuario,
  UsuarioApi,
  UsuarioLogado,
} from '../types'
import { ApiError, requisicao } from './api'

const RECURSO = '/usuarios'

// A API devolve a senha no JSON. Ela é descartada aqui, antes de sair do service.
function removerSenha(usuario: UsuarioApi): UsuarioLogado {
  const copia = { ...usuario }
  delete copia.senha
  return copia
}

export const usuarioService = {
  // POST /usuarios/login
  async entrar(credenciais: Credenciais): Promise<UsuarioLogado> {
    try {
      const usuario = await requisicao<UsuarioApi>(`${RECURSO}/login`, {
        metodo: 'POST',
        corpo: credenciais,
      })

      if (!usuario) {
        throw new ApiError('E-mail ou senha incorretos.', 401)
      }

      return removerSenha(usuario)
    } catch (erro) {
      if (erro instanceof ApiError && erro.status === 401) {
        throw new ApiError('E-mail ou senha incorretos.', 401)
      }
      // O back-end atual pode responder 500 quando a senha está errada
      if (erro instanceof ApiError && erro.status === 500) {
        throw new ApiError(
          'E-mail ou senha incorretos, ou servidor indisponível.',
          500,
        )
      }
      throw erro
    }
  },

  // POST /usuarios (a API responde 201 sem corpo)
  cadastrar: (dados: NovoUsuario) =>
    requisicao<void>(RECURSO, { metodo: 'POST', corpo: dados }),

  // GET /usuarios/ranking
  ranking: async (sinal?: AbortSignal): Promise<UsuarioLogado[]> => {
    const lista = await requisicao<UsuarioApi[]>(`${RECURSO}/ranking`, { sinal })
    return lista.map(removerSenha)
  },

  // DELETE /usuarios/{cpf}
  excluir: (cpf: string) =>
    requisicao<void>(`${RECURSO}/${encodeURIComponent(cpf)}`, {
      metodo: 'DELETE',
    }),
}