import { Link } from 'react-router-dom'
import '../css/trilhas.css'
import logo from '../images/conecta-logo.png'

const menuItems = [
  { label: 'Início', icon: 'fa-house', to: '#' },
  { label: 'Trilhas', icon: 'fa-book-open', to: '#' },
  { label: 'Meu Espaço', icon: 'fa-chart-line', to: '#' },
  { label: 'Perfil', icon: 'fa-user', to: '#' },
]

export default function Sidebar({ active }) {
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
        <Link to="/logoff" className="nav-item no-underline!">
          <i className="fa-solid fa-right-from-bracket"></i> Sair
        </Link>
      </div>
    </aside>
  )
}