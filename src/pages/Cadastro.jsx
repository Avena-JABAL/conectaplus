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

    if (senha !== confirmarSenha) {
      alert('As senhas não são iguais!')
      return
    }

    const emailExiste = usuarios.some(
      (usuario) => usuario.email === email
    )

    if (emailExiste) {
      alert('Este e-mail já está cadastrado!')
      return
    }

    const novoUsuario = {
      nome,
      email,
      senha
    }

    setUsuarios([...usuarios, novoUsuario])

    alert('Cadastro realizado com sucesso!')

    setName('')
    setEmail('')
    setSenha('')
    setConfirmarSenha('')
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      intro="É rápido e fácil! Preencha os dados abaixo para começar."
      topNote={<Link to="/login">← Voltar para o login</Link>}
      quote="Juntos por mais oportunidades!"
    >
      <form onSubmit={cadastrar}>
        <Field
          id="nome"
          label="Nome completo"
          type="text"
          placeholder="Digite seu nome completo"
          autoComplete="name"
          required
          value={nome}
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setSenha(e.target.value)}
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

        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>
    </AuthLayout>
  )
}