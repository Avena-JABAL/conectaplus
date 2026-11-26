import { useMemo, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { oportunidades } from '../data/oportunidade'
import { useAuth } from '../context/AuthContext'
import '../css/trilhas.css'

export default function Oportunidades() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const { interesses, setInteresses } = useAuth()

  const oportunidadesFiltradas = useMemo(() => {
    return oportunidades.filter((item) => {
      const correspondeBusca =
        `${item.titulo} ${item.descricao} ${item.organizacao}`
          .toLowerCase()
          .includes(busca.toLowerCase())

      const correspondeFiltro =
        filtro === 'Todos' || item.tipo === filtro

      return correspondeBusca && correspondeFiltro
    })
  }, [busca, filtro])

  function alternarInteresse(id) {
    setInteresses((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    )
  }

  return (
    <div className="app-container">
      <Sidebar active="Oportunidades" />

      <main className="main-content">
        <section className="content-header">
          <h1>Oportunidades</h1>
          <p>
            Encontre cursos, eventos e oportunidades para desenvolver seu futuro.
          </p>
        </section>

        <div className="opportunity-filters">
          <div className="search-bar opportunity-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Buscar oportunidades..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {['Todos', 'Curso', 'Evento', 'Oportunidade'].map((tipo) => (
              <button
                key={tipo}
                type="button"
                className={`filter-button ${
                  filtro === tipo ? 'selected' : ''
                }`}
                onClick={() => setFiltro(tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        <div className="feature-grid">
          {oportunidadesFiltradas.map((item) => {
            const demonstrouInteresse = interesses.includes(item.id)

            return (
              <article
                key={item.id}
                className={`card ${item.cor} feature-card opportunity-item`}
              >
                <div className="card-icon">
                  <i className={`fa-solid ${item.icone}`}></i>
                </div>

                <span className="feature-category">{item.tipo}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>

                <div className="opportunity-meta">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                    {item.modalidade}
                  </span>
                  <span>
                    <i className="fa-solid fa-building"></i>
                    {item.organizacao}
                  </span>
                </div>

                <button
                  type="button"
                  className={`interest-button ${
                    demonstrouInteresse ? 'interested' : ''
                  }`}
                  onClick={() => alternarInteresse(item.id)}
                >
                  {demonstrouInteresse
                    ? 'Tenho interesse ✓'
                    : 'Tenho interesse'}
                </button>
              </article>
            )
          })}
        </div>

        {oportunidadesFiltradas.length === 0 && (
          <p className="empty-state">
            Nenhuma oportunidade encontrada com esses filtros.
          </p>
        )}
      </main>
    </div>
  )
}