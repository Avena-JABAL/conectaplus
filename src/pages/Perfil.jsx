import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'
import '../css/trilhas.css'

export default function Perfil() {
  const { usuarioLogado, setUsuarioLogado } = useAuth()

  const [nome, setNome] = useState(usuarioLogado?.nome || '')
  const [formacao, setFormacao] = useState(usuarioLogado?.formacao || '')
  const [interesses, setInteresses] = useState(
    usuarioLogado?.interesses || ''
  )
  const [habilidades, setHabilidades] = useState(
    usuarioLogado?.habilidades || ''
  )
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    setNome(usuarioLogado?.nome || '')
    setFormacao(usuarioLogado?.formacao || '')
    setInteresses(usuarioLogado?.interesses || '')
    setHabilidades(usuarioLogado?.habilidades || '')
  }, [usuarioLogado])

  function salvarPerfil(evento) {
    evento.preventDefault()

    if (!nome.trim()) {
      setMensagem('Informe seu nome.')
      return
    }

    setUsuarioLogado((atual) => ({
      ...atual,
      nome: nome.trim(),
      formacao: formacao.trim(),
      interesses: interesses.trim(),
      habilidades: habilidades.trim(),
    }))

    setMensagem('Perfil atualizado com sucesso!')
  }

  return (
    <div className="app-container">
      <Sidebar active="Perfil" />

      <main className="main-content">
        <section className="content-header">
          <h1>Meu Perfil</h1>
          <p>Atualize suas informações e conte um pouco sobre você.</p>
        </section>

        <section className="profile-card">
          <div className="profile-heading">
            <div className="profile-avatar">
              {nome.charAt(0).toUpperCase() || 'U'}
            </div>

            <div>
              <h2>{nome || 'Seu nome'}</h2>
              <p>{usuarioLogado?.email}</p>
            </div>
          </div>

          <form className="profile-form" onSubmit={salvarPerfil}>
            <div className="profile-field">
              <label htmlFor="perfil-nome">Nome completo</label>
              <input
                id="perfil-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="profile-field">
              <label htmlFor="perfil-email">E-mail</label>
              <input
                id="perfil-email"
                type="email"
                value={usuarioLogado?.email || ''}
                disabled
              />
              <small>O e-mail não pode ser alterado nesta versão.</small>
            </div>

            <div className="profile-field">
              <label htmlFor="perfil-formacao">Formação</label>
              <input
                id="perfil-formacao"
                type="text"
                placeholder="Ex.: Ensino médio em andamento"
                value={formacao}
                onChange={(e) => setFormacao(e.target.value)}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="perfil-interesses">Interesses</label>
              <textarea
                id="perfil-interesses"
                rows="3"
                placeholder="Ex.: tecnologia, leitura, empreendedorismo"
                value={interesses}
                onChange={(e) => setInteresses(e.target.value)}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="perfil-habilidades">Habilidades</label>
              <textarea
                id="perfil-habilidades"
                rows="3"
                placeholder="Ex.: comunicação, organização, programação"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
              />
            </div>

            {mensagem && (
              <p className="profile-message" role="status">
                {mensagem}
              </p>
            )}

            <button type="submit" className="primary-action">
              Salvar alterações
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}