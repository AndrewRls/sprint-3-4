import type { NivelRanking } from '../types'

// Regra do front: o nível depende dos pontos do usuário
export function calcularNivel(pontos: number): NivelRanking {
  if (pontos >= 10) return 'Ouro'
  if (pontos >= 5) return 'Prata'
  return 'Bronze'
}

// Uma cor para cada valor do Union Type: se alguém criar um nível novo,
// o TypeScript obriga a incluí-lo aqui também
export const estiloNivel: Record<NivelRanking, string> = {
  Bronze: 'bg-orange-200 text-orange-900',
  Prata: 'bg-gray-200 text-gray-800',
  Ouro: 'bg-yellow-300 text-yellow-900',
}