import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'
import { useAuth } from '../context/AuthContext'

export default function Cadastro() {
  const navigate = useNavigate()

  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [erro, setErro] = useState('')
  const { usuarios, setUsuarios } = useAuth()

  function cadastrar(e) {
    e.preventDefault()

    setErro('')

    const nomeNormalizado = nome.trim()
    if (!nomeNormalizado) {
      setErro('Informe seu nome completo.')
      return
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais!')
      return
    }

    if (senha.trim().length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres!')
      return
    }

    const emailNormalizado = email.trim().toLowerCase()

    const emailExiste = usuarios.some(
      (usuario) => usuario.email === emailNormalizado
    )

    if (emailExiste) {
      setErro('Este e-mail já está cadastrado!')
      return
    }

    const novoUsuario = {
      nome: nomeNormalizado,
      email: emailNormalizado,
      senha,
    }

    setUsuarios((atuais) => [...atuais, novoUsuario])

    navigate('/login', { replace: true, state: { cadastroConcluido: true } })
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      intro="É rápido e fácil! Preencha os dados abaixo para começar."
      topNote={<Link to="/login">← Voltar para o login</Link>}
      quote="Juntos por mais oportunidades!"
    >
      <form onSubmit={cadastrar}>
        <p>Use um e-mail e uma senha fictícios para testar o cadastro.</p>
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

        {erro && <p className="form-error" role="alert">{erro}</p>}
        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>
    </AuthLayout>
  )
}