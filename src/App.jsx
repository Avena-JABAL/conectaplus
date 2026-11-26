import { Routes, Route, Navigate } from 'react-router-dom'

import Trilhas from './pages/Trilhas'
import TrilhaDetalhe from './pages/TrilhaDetalhe'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Logoff from './pages/Logoff'
import RecuperarSenha from './pages/recuperar-senha'
import MeuEspaco from './pages/MeuEspaco'
import Perfil from './pages/Perfil'
import Oportunidades from './pages/Oportunidades'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/logoff" element={<Logoff />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/trilhas/:id" element={<TrilhaDetalhe />} />
        <Route path="/meu-espaco" element={<MeuEspaco />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App