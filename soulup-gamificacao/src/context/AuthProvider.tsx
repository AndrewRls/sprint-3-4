import { useState, type ReactNode } from 'react'
import { authService } from '../services/authService'
import { usuarioService } from '../services/usuarioService'
import type { Credenciais, UsuarioLogado } from '../types'
import { AuthContext } from './authContext'

function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(() =>
    authService.obterSessao(),
  )

  async function entrar(credenciais: Credenciais): Promise<void> {
    const logado = await usuarioService.entrar(credenciais)
    authService.salvarSessao(logado)
    setUsuario(logado)
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