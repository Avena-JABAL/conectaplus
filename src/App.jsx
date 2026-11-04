import { Routes, Route } from 'react-router-dom'
import Trilhas from './pages/Trilhas'
import LandingPage from './pages/LandingPage'

// Placeholder components for individual trilha pages

const Inicio = () => <div className='p-10 text-center'>Início - Em desenvolvimento</div>
const MeuEspaco = () => <div className="p-10 text-center">Meu Espaço - Em desenvolvimento</div>
const Perfil = () => <div className="p-10 text-center">Perfil - Em desenvolvimento</div>

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/trilhas' element={<Trilhas />} />
      <Route path='/meu-espaco' element={<MeuEspaco />} />
      <Route path='/perfil' element={<Perfil />} />
    </Routes>
  )
}

export default App
