import { createContext } from 'react'
import type { Credenciais, UsuarioLogado } from '../types'

export interface AuthContextValor {
  usuario: UsuarioLogado | null
  // Faz o login na API. Lança um erro com a mensagem se não conseguir.
  entrar: (credenciais: Credenciais) => Promise<void>
  sair: () => void
}

export const AuthContext = createContext<AuthContextValor | null>(null)