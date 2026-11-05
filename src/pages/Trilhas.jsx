import { Link } from 'react-router-dom'
import '../css/trilhas.css'
import Sidebar from '../components/Sidebar'

const trilhas = [
  {
    to: '/trilha-curriculo',
    color: 'card-blue',
    icon: 'fa-file-lines',
    title: 'Currículo e Entrevista',
    text: 'Aprenda a criar um bom currículo e se preparar para entrevistas.',
    modulos: 5,
  },
  {
    to: '/trilha-programacao',
    color: 'card-purple',
    icon: 'fa-code',
    title: 'Programação',
    text: 'Entenda os conceitos básicos e dê os primeiros passos.',
    modulos: 5,
  },
  {
    to: '/trilha-comunicacao',
    color: 'card-green',
    icon: 'fa-comments',
    title: 'Comunicação',
    text: 'Melhore sua fala, escrita e trabalhe em equipe.',
    modulos: 4,
  },
  {
    to: '/trilha-inteligencia-emocional',
    color: 'card-orange',
    icon: 'fa-brain',
    title: 'Inteligência Emocional',
    text: 'Aprenda a lidar com emoções e desafios do dia a dia.',
    modulos: 4,
  },
  {
    to: '/trilha-produtividade',
    color: 'card-pink',
    icon: 'fa-clock',
    title: 'Produtividade',
    text: 'Organize seu tempo e conquiste seus objetivos.',
    modulos: 4,
  },
  {
    to: '/trilha-educacao-financeira',
    color: 'card-cyan',
    icon: 'fa-wallet',
    title: 'Educação Financeira',
    text: 'Cuide melhor do seu dinheiro e planeje o seu futuro.',
    modulos: 4,
  },
]

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
          <p>Escolha uma trilha e comece a desenvolver suas habilidades.</p>
        </section>

        <div className="cards-grid">
          {trilhas.map((trilha) => (
            <Link
              key={trilha.to}
              to={trilha.to}
              className={`card ${trilha.color} no-underline!`}
            >
              <div className="card-icon">
                <i className={`fa-solid ${trilha.icon}`}></i>
              </div>
              <h3>{trilha.title}</h3>
              <p>{trilha.text}</p>
              <div className="card-footer">
                <span>{trilha.modulos} módulos</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}