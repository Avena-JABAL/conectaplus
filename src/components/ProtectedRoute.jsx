import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { usuarioLogado } = useAuth()
  const { pathname, search, hash } = useLocation()

  if (!usuarioLogado) {
    return <Navigate to="/login" replace state={{ destino: pathname + search + hash }} />
  }

  return <Outlet />
}
