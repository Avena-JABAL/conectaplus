import { Routes, Route } from 'react-router-dom'
import Trilhas from './pages/Trilhas'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Trilhas />} />
      <Route path='/trilhas' element={<Trilhas />} />
    </Routes>
  ) 
}

export default App
