import { createContext, useContext, useState } from 'react'
import { dadosDaConta, atualizarDadosDaConta } from './dadosDaConta.js'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuarios, setUsuarios] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [dados, setDados] = useState({})
  const email = usuarioLogado?.email
  const { interesses, modulosConcluidos } = dadosDaConta(dados, email)

  function atualizarCampo(campo, valor) {
    if (email) setDados(atuais => atualizarDadosDaConta(atuais, email, campo, valor))
  }

  return (
    <AuthContext.Provider value={{
      usuarios,
      setUsuarios,
      usuarioLogado,
      setUsuarioLogado,
      interesses,
      setInteresses: valor => atualizarCampo('interesses', valor),
      modulosConcluidos,
      setModulosConcluidos: valor => atualizarCampo('modulosConcluidos', valor),
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
