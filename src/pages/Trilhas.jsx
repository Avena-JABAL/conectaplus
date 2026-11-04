import { Link } from 'react-router-dom'
import logo from '../images/conecta-logo.png'

const menuItems = [
  { label: 'Início', icon: 'fa-house', to: '/' },
  { label: 'Trilhas', icon: 'fa-book-open', to: '/trilhas', active: true },
  { label: 'Meu Espaço', icon: 'fa-chart-line', to: '/meu-espaco' },
  { label: 'Perfil', icon: 'fa-user', to: '/perfil' },
]

const trilhas = [
  {
    to: '/trilha-curriculo',
    bg: 'bg-[#e0f2fe]',
    iconBg: 'bg-[#0ea5e9]',
    icon: 'fa-file-lines',
    title: 'Currículo e Entrevista',
    text: 'Aprenda a criar um bom currículo e se preparar para entrevistas.',
    modulos: 5,
  },
  {
    to: '/trilha-programacao',
    bg: 'bg-[#f3e8ff]',
    iconBg: 'bg-[#a855f7]',
    icon: 'fa-code',
    title: 'Programação',
    text: 'Entenda os conceitos básicos e dê os primeiros passos.',
    modulos: 5,
  },
  {
    to: '/trilha-comunicacao',
    bg: 'bg-[#dcfce7]',
    iconBg: 'bg-[#22c55e]',
    icon: 'fa-comments',
    title: 'Comunicação',
    text: 'Melhore sua fala, escrita e trabalhe em equipe.',
    modulos: 4,
  },
  {
    to: '/trilha-inteligencia-emocional',
    bg: 'bg-[#ffedd5]',
    iconBg: 'bg-[#f97316]',
    icon: 'fa-brain',
    title: 'Inteligência Emocional',
    text: 'Aprenda a lidar com emoções e desafios do dia a dia.',
    modulos: 4,
  },
  {
    to: '/trilha-produtividade',
    bg: 'bg-[#ffe4e6]',
    iconBg: 'bg-[#f43f5e]',
    icon: 'fa-clock',
    title: 'Produtividade',
    text: 'Organize seu tempo e conquiste seus objetivos.',
    modulos: 4,
  },
  {
    to: '/trilha-educacao-financeira',
    bg: 'bg-[#cffafe]',
    iconBg: 'bg-[#06b6d4]',
    icon: 'fa-wallet',
    title: 'Educação Financeira',
    text: 'Cuide melhor do seu dinheiro e planeje o seu futuro.',
    modulos: 4,
  },
]

const navItemBase =
  'flex items-center gap-[15px] rounded-lg px-[15px] py-3 font-medium no-underline transition duration-200 hover:bg-[#e0e7ff] hover:text-[#5035f5]'
const navItemInactive = 'text-[#6b7280]'
const navItemActive = 'bg-[#e0e7ff] text-[#5035f5]'

export default function Trilhas() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fc] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-[#333]">
      <aside className="hidden w-[250px] shrink-0 flex-col border-r border-[#eee] bg-white p-5 md:flex">
        <div className="mb-10 flex items-center gap-2.5 text-2xl font-bold text-[#111827]">
          <img src={logo} alt="Logo Conecta+" className="h-[50px] w-[50px]" />
          <span>
            Conecta<span className="text-[#5035f5]">+</span>
          </span>
        </div>

        <nav className="flex grow flex-col gap-2.5">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`${navItemBase} ${
                item.active ? navItemActive : navItemInactive
              }`}
            >
              <i className={`fa-solid ${item.icon}`}></i> {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-[#eee] pt-5">
          <Link to="/logoff" className={`${navItemBase} ${navItemInactive}`}>
            <i className="fa-solid fa-right-from-bracket"></i> Sair
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-10 py-5">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex w-[400px] max-w-full items-center gap-2.5 rounded-[20px] border border-[#e5e7eb] bg-white px-5 py-2.5">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Buscar trilhas, cursos e comunidades..."
              className="w-full border-none text-[#6b7280] outline-none"
            />
          </div>

          <div className="flex items-center gap-[15px]">
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent text-lg text-[#6b7280]"
            >
              <i className="fa-regular fa-bell"></i>
            </button>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5035f5] font-bold text-white">
              J
            </div>
          </div>
        </header>

        <section className="mb-[30px]">
          <h1 className="mb-[5px] text-2xl font-bold text-[#111827]">
            Trilhas de Aprendizagem
          </h1>
          <p className="text-[#6b7280]">
            Escolha uma trilha e comece a desenvolver suas habilidades.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-[25px] pb-10 md:grid-cols-2 lg:grid-cols-3">
          {trilhas.map((trilha) => (
            <Link
              key={trilha.to}
              to={trilha.to}
              className={`relative flex min-h-[220px] flex-col rounded-xl p-[25px] text-[#333] no-underline transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] ${trilha.bg}`}
            >
              <div
                className={`mb-[15px] flex h-[45px] w-[45px] items-center justify-center rounded-[10px] text-xl text-white ${trilha.iconBg}`}
              >
                <i className={`fa-solid ${trilha.icon}`}></i>
              </div>
              <h3 className="mb-2.5 text-lg font-bold text-[#111827]">
                {trilha.title}
              </h3>
              <p className="mb-5 text-sm leading-[1.4] text-[#53617e]">
                {trilha.text}
              </p>
              <div className="mt-auto flex items-center justify-between text-[13px] font-semibold text-[#3f4c6c]">
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