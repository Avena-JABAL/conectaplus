import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { trilhas } from '../data/trilhas'
import { oportunidades } from '../data/oportunidade'
import { useAuth } from '../context/AuthContext'
import '../css/trilhas.css'

export default function MeuEspaco() {
  const {
    usuarioLogado,
    interesses,
    modulosConcluidos,
  } = useAuth()

  const totalModulos = trilhas.reduce(
    (total, trilha) => total + trilha.modulos.length,
    0
  )

  const concluidos = Object.values(modulosConcluidos).reduce(
    (total, lista) => total + lista.length,
    0
  )

  const percentual = totalModulos
    ? Math.round((concluidos / totalModulos) * 100)
    : 0

  const minhasOportunidades = oportunidades.filter((item) =>
    interesses.includes(item.id)
  )

  return (
    <div className="app-container">
      <Sidebar active="Meu Espaço" />

      <main className="main-content">
        <section className="content-header">
          <h1>Meu Espaço</h1>
          <p>
            Olá, {usuarioLogado?.nome || 'estudante'}! Acompanhe sua jornada
            no Conecta+.
          </p>
        </section>

        <section className="dashboard-stats">
          <article className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <span>Trilhas disponíveis</span>
            <strong>{trilhas.length}</strong>
          </article>

          <article className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <span>Módulos concluídos</span>
            <strong>{concluidos}</strong>
          </article>

          <article className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <span>Meus interesses</span>
            <strong>{minhasOportunidades.length}</strong>
          </article>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <h2>Meu progresso de aprendizagem</h2>
              <p>Acompanhe os módulos concluídos nas trilhas.</p>
            </div>
            <strong>{percentual}%</strong>
          </div>

          <div className="progress-track dashboard-progress">
            <div
              className="progress-fill"
              style={{ width: `${percentual}%` }}
            />
          </div>

          <div className="dashboard-trails">
            {trilhas.map((trilha) => {
              const quantidade =
                (modulosConcluidos[trilha.id] || []).length

              const progresso = Math.round(
                (quantidade / trilha.modulos.length) * 100
              )

              return (
                <Link
                  key={trilha.id}
                  to={`/trilhas/${trilha.id}`}
                  className="dashboard-trail"
                >
                  <div>
                    <strong>{trilha.titulo}</strong>
                    <span>
                      {quantidade} de {trilha.modulos.length} módulos
                    </span>
                  </div>

                  <div className="dashboard-trail-progress">
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${progresso}%` }}
                      />
                    </div>
                    <span>{progresso}%</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <h2>Oportunidades de interesse</h2>
              <p>Itens que você marcou para acompanhar.</p>
            </div>
            <Link to="/oportunidades">Ver todas</Link>
          </div>

          {minhasOportunidades.length > 0 ? (
            <div className="saved-opportunities">
              {minhasOportunidades.map((item) => (
                <article key={item.id} className="saved-opportunity">
                  <div>
                    <strong>{item.titulo}</strong>
                    <span>{item.tipo} · {item.modalidade}</span>
                  </div>
                  <i className="fa-solid fa-heart"></i>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-state">
              Você ainda não marcou nenhuma oportunidade.
              <Link to="/oportunidades"> Explorar oportunidades</Link>
            </p>
          )}
        </section>
      </main>
    </div>
  )
}
