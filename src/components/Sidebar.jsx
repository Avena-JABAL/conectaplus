import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../css/trilhas.css'
import logo from '../images/conecta-logo.png'

const menuItems = [
  { label: 'Início', icon: 'fa-house', to: '#' },
  { label: 'Trilhas', icon: 'fa-book-open', to: '/trilhas' },
  { label: 'Meu Espaço', icon: 'fa-chart-line', to: '/meu-espaco' },
  { label: 'Perfil', icon: 'fa-user', to: '/perfil' },
]

export default function Sidebar({ active }) {
  const navigate = useNavigate()
  const { setUsuarioLogado } = useAuth()

  function sair() {
    setUsuarioLogado(null)
    navigate('/logoff', { replace: true })
  }

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo Conecta+" />
        <span>
          Conecta<span className="plus">+</span>
        </span>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`nav-item${
              item.label === active ? ' active' : ''
            } no-underline!`}
          >
            <i className={`fa-solid ${item.icon}`}></i> {item.label}
          </Link>
        ))}
      </nav>

      <div className="nav-footer">
        <button
            type="button"
            className="nav-item no-underline!"
            onClick={sair}
        >
            <i className="fa-solid fa-right-from-bracket"></i> Sair
        </button>
      </div>
    </aside>
  )
}
