
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import '../css/trilhas.css'
import Sidebar from '../components/Sidebar'
import { trilhas } from '../data/trilhas'

export default function Trilhas() {
  const [busca, setBusca] = useState('')
  const { usuarioLogado } = useAuth()
  const normalizar = texto => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const filtradas = trilhas.filter(trilha => normalizar(trilha.titulo + ' ' + trilha.descricao + ' ' + trilha.categoria).includes(normalizar(busca.trim())))
  return (
    <div className="app-container">
      <Sidebar active="Trilhas" />

      <main className="main-content">
        <header className="top-header">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Buscar trilhas..."
              aria-label="Buscar trilhas"
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
          </div>

          <div className="user-actions">
            <Link to="/perfil" className="user-avatar" aria-label="Meu perfil">{usuarioLogado?.nome?.charAt(0).toUpperCase() || 'U'}</Link>
          </div>
        </header>

        <section className="content-header">
          <h1>Trilhas de Aprendizagem</h1>
          <p>
            Escolha uma trilha e comece a desenvolver suas habilidades.
          </p>
        </section>

        {filtradas.length === 0 && <p className="empty-state" role="status">Nenhuma trilha encontrada.</p>}
        <div className="cards-grid">
          {filtradas.map((trilha) => (
            <Link
              key={trilha.id}
              to={`/trilhas/${trilha.id}`}
              className={`card ${trilha.cor} no-underline!`}
            >
              <div className="card-icon">
                <i className={`fa-solid ${trilha.icone}`}></i>
              </div>

              <h3>{trilha.titulo}</h3>
              <p>{trilha.descricao}</p>

              <div className="card-footer">
                <span>
                  {trilha.modulos.length} módulos
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
