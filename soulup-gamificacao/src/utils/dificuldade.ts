import type { Dificuldade } from '../types'

const rotulos: Record<Dificuldade, string> = {
  FACIL: 'Fácil',
  MEDIA: 'Média',
  DIFICIL: 'Difícil',
}

export function rotularDificuldade(dificuldade: Dificuldade): string {
  return rotulos[dificuldade] ?? dificuldade
}