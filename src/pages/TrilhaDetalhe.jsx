import { Link, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { trilhas } from '../data/trilhas'
import { useAuth } from '../context/AuthContext'
import '../css/trilhas.css'

export default function TrilhaDetalhe() {
  const { id } = useParams()

  const {
    modulosConcluidos,
    setModulosConcluidos,
  } = useAuth()

  const trilha = trilhas.find((item) => item.id === id)

  if (!trilha) {
    return (
      <div className="app-container">
        <Sidebar active="Trilhas" />
        <main className="main-content">
          <h1>Trilha não encontrada</h1>
          <Link to="/trilhas">Voltar para trilhas</Link>
        </main>
      </div>
    )
  }

  const concluidos = modulosConcluidos[trilha.id] || []

  const progresso = Math.round(
    (concluidos.length / trilha.modulos.length) * 100
  )

  function alternarModulo(indice) {
    setModulosConcluidos((atuais) => {
      const listaAtual = atuais[trilha.id] || []

      const novaLista = listaAtual.includes(indice)
        ? listaAtual.filter((item) => item !== indice)
        : [...listaAtual, indice]

      return {
        ...atuais,
        [trilha.id]: novaLista,
      }
    })
  }

  return (
    <div className="app-container">
      <Sidebar active="Trilhas" />

      <main className="main-content">
        <Link to="/trilhas" className="back-link">
          <i className="fa-solid fa-arrow-left"></i>
          Voltar para trilhas
        </Link>

        <section className="detail-header">
          <span className="feature-category">{trilha.categoria}</span>
          <h1>{trilha.titulo}</h1>
          <p>{trilha.descricao}</p>

          <div className="detail-progress">
            <div className="progress-info">
              <strong>Seu progresso</strong>
              <strong>{progresso}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progresso}%` }}
              />
            </div>

            <span>
              {concluidos.length} de {trilha.modulos.length} módulos concluídos
            </span>
          </div>
        </section>

        <section className="modules-section">
          <h2>Conteúdo da trilha</h2>
          <p>Marque os módulos conforme concluir cada etapa.</p>

          <div className="module-list">
            {trilha.modulos.map((modulo, indice) => (
              <label
                key={modulo}
                className={`module-item ${
                  concluidos.includes(indice) ? 'module-done' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={concluidos.includes(indice)}
                  onChange={() => alternarModulo(indice)}
                />

                <span className="module-number">
                  {String(indice + 1).padStart(2, '0')}
                </span>

                <span className="module-title">{modulo}</span>

                {concluidos.includes(indice) && (
                  <i className="fa-solid fa-circle-check module-check"></i>
                )}
              </label>
            ))}
          </div>

          {progresso === 100 && (
            <p className="completion-message">
              Parabéns! Você concluiu todos os módulos desta trilha!
            </p>
          )}
        </section>
      </main>
    </div>
  )
}