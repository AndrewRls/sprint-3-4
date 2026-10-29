import { useState, type ReactNode } from 'react'
import { authService } from '../services/authService'
import type { Usuario } from '../types'
import { AuthContext } from './authContext'

function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() =>
    authService.obterSessao(),
  )

  function entrar(email: string, senha: string): boolean {
    const logado = authService.entrar(email, senha)
    setUsuario(logado)
    return logado !== null
  }

  function sair() {
    authService.sair()
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider