import { useCallback } from 'react'
import { postService } from '../services/postService'
import { useRequisicao } from './useRequisicao'

// GET /posts
export function usePosts() {
  const buscar = useCallback(
    (sinal: AbortSignal) => postService.listar(sinal),
    [],
  )
  return useRequisicao(buscar, 'posts')
}

// Um post pelo id que vem da URL (/solucao/:id)
export function usePost(id: string) {
  const buscar = useCallback(
    (sinal: AbortSignal) => postService.buscarPorId(id, sinal),
    [id],
  )
  return useRequisicao(buscar, `post-${id}`)
}