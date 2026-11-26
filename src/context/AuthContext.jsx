
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  // Estados relacionados à autenticação
  const [usuarios, setUsuarios] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  // IDs das oportunidades que o usuário marcou como interesse
  const [interesses, setInteresses] = useState([])

  // Módulos concluídos, organizados pelo ID de cada trilha
  const [modulosConcluidos, setModulosConcluidos] = useState({})

  return (
    <AuthContext.Provider
      value={{
        usuarios,
        setUsuarios,
        usuarioLogado,
        setUsuarioLogado,
        interesses,
        setInteresses,
        modulosConcluidos,
        setModulosConcluidos,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
