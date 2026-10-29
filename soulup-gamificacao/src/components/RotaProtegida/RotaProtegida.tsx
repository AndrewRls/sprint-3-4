import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROTAS } from '../../routes/rotas'
import type { EstadoLogin } from '../../types'

function RotaProtegida({ children }: { children: ReactNode }) {
  const { usuario } = useAuth()
  const location = useLocation()

  if (!usuario) {
    const estado: EstadoLogin = {
      mensagem: 'Faça login para acessar esta página.',
      origem: location.pathname,
    }
    return <Navigate to={ROTAS.login} replace state={estado} />
  }

  return <>{children}</>
}

export default RotaProtegida