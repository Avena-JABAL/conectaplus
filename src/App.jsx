import { Routes, Route } from 'react-router-dom'
import Trilhas from './pages/Trilhas'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/trilhas' element={<Trilhas />} />
    </Routes>
  ) 
}

export default App
