import type { Missao, NovaMissao } from '../types'
import { requisicao } from './api'

// ⚠️ Ajuste RECURSO e os tipos em src/types para bater com o controller Java do grupo
const RECURSO = '/missoes'

export const missaoService = {
  listar: (sinal?: AbortSignal) => requisicao<Missao[]>(RECURSO, { sinal }),

  buscarPorId: (id: number | string, sinal?: AbortSignal) =>
    requisicao<Missao>(`${RECURSO}/${id}`, { sinal }),

  criar: (dados: NovaMissao) =>
    requisicao<Missao>(RECURSO, { metodo: 'POST', corpo: dados }),

  atualizar: (id: number | string, dados: NovaMissao) =>
    requisicao<Missao>(`${RECURSO}/${id}`, { metodo: 'PUT', corpo: dados }),

  excluir: (id: number | string) =>
    requisicao<void>(`${RECURSO}/${id}`, { metodo: 'DELETE' }),
}