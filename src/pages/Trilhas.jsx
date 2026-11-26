
import { Link } from 'react-router-dom'
import '../css/trilhas.css'
import Sidebar from '../components/Sidebar'
import { trilhas } from '../data/trilhas'

export default function Trilhas() {
  return (
    <div className="app-container">
      <Sidebar active="Trilhas" />

      <main className="main-content">
        <header className="top-header">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Buscar trilhas, cursos e comunidades..."
            />
          </div>

          <div className="user-actions">
            <button className="icon-btn" type="button">
              <i className="fa-regular fa-bell"></i>
            </button>
            <div className="user-avatar">J</div>
          </div>
        </header>

        <section className="content-header">
          <h1>Trilhas de Aprendizagem</h1>
          <p>
            Escolha uma trilha e comece a desenvolver suas habilidades.
          </p>
        </section>

        <div className="cards-grid">
          {trilhas.map((trilha) => (
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
