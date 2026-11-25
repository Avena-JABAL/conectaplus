import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'

export default function RecuperarSenha() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function recuperar(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <AuthLayout
      title="Recuperar senha"
      intro="Digite um e-mail fictício para simular uma solicitação de recuperação."
      topNote={<Link to="/login">← Voltar para o login</Link>}
    >
      <form onSubmit={recuperar}>
        <Field
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(evento) => {
            setEmail(evento.target.value)
            setEnviado(false)
          }}
          required
        />
        <button className="button" type="submit">Simular envio</button>
        {enviado && (
          <p className="form-success" role="status">
            Solicitação simulada. Nenhum e-mail foi enviado.
          </p>
        )}
      </form>
    </AuthLayout>
  )
}
