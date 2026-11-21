import { useState } from 'react'
import "../css/Register-System.css";

export default function RecuperarSenha() {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function recuperar(e) {
    e.preventDefault()

    setMensagem(
      `Se o e-mail ${email} estiver cadastrado, enviaremos um link de recuperação.`
    )
  } 

  return (
    <main className="auth-card recovery">
      <section className="auth-main">
        <header className="topline">
          <a
            className="brand"
            href="/"
            aria-label="Conecta+, página inicial"
          >
            <span className="brand-mark" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            Conecta+
          </a>

          <a className="back-link" href="/login">
            ← Voltar para o login
          </a>
        </header>

        <div className="form-wrap">
          <h1>Recuperar senha</h1>

          <p className="intro">
            Digite seu e-mail e enviaremos um link para você redefinir sua senha.
          </p>

          <form onSubmit={recuperar}>
            <div className="field">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="button" type="submit">
              Enviar link
            </button>
            {mensagem && <p className="form-success">{mensagem}</p>}
          </form>
        </div>
      </section>

      <aside className="illustration">
        <div className="quote">
          <div className="envelope" aria-hidden="true">
            ✉
          </div>
          Não se preocupe! Vamos te ajudar a recuperar o acesso à sua conta.
        </div>
      </aside>
    </main>
  );
}