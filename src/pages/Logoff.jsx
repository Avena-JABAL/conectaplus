import { Link } from "react-router-dom";
import "../css/logoff.css";
import logo from "../images/conecta-logo.png";

export default function Logoff() {
  return (
    <div className="logoff-container">
      <main className="page">
        <div className="blob blob-left"></div>
        <div className="blob blob-right"></div>
        <div className="blob blob-bottom"></div>

        <section className="logout-card">
          <Link to="/" className="brand">
            <img src={logo} alt="Símbolo do Conecta+" className="logo-icon" />
            <span className="brand-name">
              Conecta<span>+</span>
            </span>
          </Link>

          <div className="logout-illustration">
            <div className="illustration-glow"></div>

            <div className="door-icon">
              <svg viewBox="0 0 100 100" fill="none">
                <path
                  d="M47 18H29C24 18 21 22 21 27V73C21 78 24 82 29 82H47"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M51 50H82M70 38L82 50L70 62"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="check-badge">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M7 16.5L13 22L25 10"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="spark spark-one"></span>
            <span className="spark spark-two"></span>
            <span className="spark spark-three"></span>
          </div>

          <h1>Você saiu da sua conta!</h1>

          <p className="message">
            Obrigado por fazer parte da nossa comunidade.
            <br className="desktop-break" />
            Continue aprendendo, evoluindo e conquistando!
          </p>

          <Link to="/" className="home-button">
            Voltar para o início
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
