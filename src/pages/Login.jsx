import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'

export default function Login() {
  return (
    <AuthLayout
      title="Olá de novo!"
      intro="Entre na sua conta e continue sua jornada com a gente."
      topNote={
        <>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
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
          placeholder="Digite sua senha"
          autoComplete="current-password"
          required
        />

        <div className="form-options">
          <label className="remember">
            <input type="checkbox" name="lembrar" /> Lembrar de mim
          </label>
          <Link to="/recuperar-senha">Esqueci minha senha</Link>
        </div>

        <Link className="button" to="/trilhas">
          Entrar
        </Link>
      </form>
    </AuthLayout>
  )
}