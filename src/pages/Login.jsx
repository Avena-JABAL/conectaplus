import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const { usuarios, setUsuarioLogado } = useAuth()
  const navigate = useNavigate()

  function entrar(e) {
    e.preventDefault()

    setErro('')

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email.toLowerCase() === email.trim().toLowerCase() &&
        usuario.senha === senha
    )

    if (!usuarioEncontrado) {
      setErro('E-mail ou senha inválidos.')
      return
    }

    setUsuarioLogado(usuarioEncontrado)
    navigate('/trilhas')
  }



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
      <form onSubmit={entrar}>
        <Field
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Field
          id="senha"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          autoComplete="current-password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        {erro && <p className="form-error">{erro}</p>}
        <div className="form-options">
          <label className="remember">
            <input type="checkbox" name="lembrar" /> Lembrar de mim
          </label>
          <Link to="/recuperar-senha">Esqueci minha senha</Link>
        </div>

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </AuthLayout>
  )
}