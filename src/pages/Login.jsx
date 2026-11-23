import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Field from '../components/Field'
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setErro("");
    
    const resultado = login(email, senha);
      if (resultado) {
        navigate("/trilhas");
      } else {
        setErro("E-mail ou senha incorretos.");
      }
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
      <form onSubmit={handleLogin}>
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
          placeholder="Digite sua senha"
          autoComplete="current-password"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        {erro && <p className="error-message">{erro}</p>}

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