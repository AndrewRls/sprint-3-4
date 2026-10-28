import { useCallback } from 'react'
import { missaoService } from '../services/missaoService'
import { useRequisicao } from './userequisicao'

export function useMissoes() {
  const buscar = useCallback(
    (sinal: AbortSignal) => missaoService.listar(sinal),
    [],
  )
  return useRequisicao(buscar, 'missoes')
}

export function useMissao(id: string) {
  const buscar = useCallback(
    (sinal: AbortSignal) => missaoService.buscarPorId(id, sinal),
    [id],
  )
  return useRequisicao(buscar, `missao-${id}`)
}