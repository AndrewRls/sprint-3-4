import { createContext } from 'react'
import type { Usuario } from '../types'

export interface AuthContextValor {
  usuario: Usuario | null
  entrar: (email: string, senha: string) => boolean
  sair: () => void
}

export const AuthContext = createContext<AuthContextValor | null>(null)