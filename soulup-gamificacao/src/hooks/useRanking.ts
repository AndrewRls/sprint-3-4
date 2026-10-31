import { useCallback } from 'react'
import { usuarioService } from '../services/usuarioService'
import { useRequisicao } from './useRequisicao'

// GET /usuarios/ranking
export function useRanking() {
  const buscar = useCallback(
    (sinal: AbortSignal) => usuarioService.ranking(sinal),
    [],
  )
  return useRequisicao(buscar, 'ranking')
}