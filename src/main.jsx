import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './css/funcionalidades.css'
import './css/finalizacao.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProvider>
    <App />
   </AuthProvider>
  </BrowserRouter>
)
