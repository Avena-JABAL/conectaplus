import { Link } from "react-router-dom";
import "../css/Register-System.css";

export default function AuthLayout({
  topNote,
  title,
  intro,
  quote = "Grandes conquistas começam com pequenos passos!",
  children,
  dooble,
}) {
  return (
    <div className="auth-page">
      <main className="auth-card">
        <section className="auth-main">
          <header className="topline">
            <Link
              className="brand"
              to="/"
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
            </Link>
            {topNote && <span className="top-note">{topNote}</span>}
          </header>

          <div className="form-wrap">
            <h1>{title}</h1>
            <p className="intro">{intro}</p>
            {children}
          </div>
        </section>

        <aside className="illustration">
          <div className="quote">
            <span className="doodle">✧</span>
            {quote}
          </div>
        </aside>
      </main>
    </div>
  );
}
