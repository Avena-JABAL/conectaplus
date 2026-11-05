import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'

export default function Cadastro() {
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
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          autoComplete="email"
          required
        />
        <Field
          id="senha"
          label="Senha"
          type="password"
          placeholder="Crie uma senha"
          autoComplete="new-password"
          required
        />
        <Field
          id="confirmarSenha"
          label="Confirmar senha"
          type="password"
          placeholder="Digite sua senha novamente"
          autoComplete="new-password"
          required
        />

        <Link className="button" to="/login">
          Cadastrar
        </Link>
      </form>
    </AuthLayout>
  )
}