import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'
import { useAuth } from '../context/AuthContext'

export default function Cadastro() {

  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const { usuarios, setUsuarios } = useAuth()

  function cadastrar(e) {
    e.preventDefault()
    
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      intro="É rápido e fácil! Preencha os dados abaixo para começar."
      topNote={<Link to="/login">← Voltar para o login</Link>}
      quote="Juntos por mais oportunidades!"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Field
          id="nome"
          label="Nome completo"
          type="text"
          placeholder="Digite seu nome completo"
          autoComplete="name"
          required
          value={nome}
          onChage={(e) => setName(e.target.vcalue)}
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          id="senha"
          label="Senha"
          type="password"
          placeholder="Crie uma senha"
          autoComplete="new-password"
          required
          value={senha}
          onChage={(e) => setSenha(e.target.value)}
        />
        <Field
          id="confirmarSenha"
          label="Confirmar senha"
          type="password"
          placeholder="Digite sua senha novamente"
          autoComplete="new-password"
          required
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <Link className="button" to="/login">
          Cadastrar
        </Link>
      </form>
    </AuthLayout>
  )
}