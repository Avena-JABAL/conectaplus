import '../css/landingpage.css';
import conectaLogo from '../images/conecta-logo.png';
import jovensConecta from '../images/jovens-conecta.png';

export default function LandingPage() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img
            src={conectaLogo}
            alt="Logo Conecta+"
            className="logo-image"
          />
          <span>
            Conecta<span className="plus">+</span>
          </span>
        </a>

        <nav className="navigation">
          <a href="/" className="active">
            Início
          </a>
          <a href="#trilhas">Trilhas</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <div className="header-actions">
          <a href="/login" className="login-link">
            Entrar
          </a>
          <a href="/cadastro" className="button button-primary">
            Cadastrar
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">Seu futuro começa aqui!</span>

            <h1>
              Conecte-se
              <br />
              com o seu amanhã
            </h1>

            <p>
              Descubra trilhas de aprendizado, desenvolva
              suas habilidades e encontre o caminho certo
              para o seu futuro acadêmico e profissional.
            </p>

            <div className="hero-buttons">
              <a href="#trilhas" className="button button-primary">
                Explorar trilhas
              </a>

              <a href="#sobre" className="button button-secondary">
                Saiba mais
              </a>
            </div>
          </div>

          <div className="hero-art">
            <img
              src={jovensConecta}
              alt="Jovens estudando juntos e descobrindo novas oportunidades"
              className="hero-image"
            />
          </div>
        </section>

        <section className="opportunities" id="trilhas">
          <div className="section-heading">
            <h2>Oportunidades em destaque</h2>
            <a href="#trilhas" className="view-all">
              Ver todas <span>→</span>
            </a>
          </div>

          <div className="cards-grid">
            <article className="opportunity-card card-blue">
              <div className="card-icon">💻</div>
              <h3>Curso de Programação Básica</h3>
              <p>
                Aprenda os primeiros passos na programação
                e desenvolva seu raciocínio lógico.
              </p>
              <div className="card-footer">
                <span className="tag">Curso gratuito</span>
                <a href="#sobre" aria-label="Saiba mais sobre programação">
                  →
                </a>
              </div>
            </article>

            <article className="opportunity-card card-purple">
              <div className="card-icon">👤</div>
              <h3>Jovem Aprendiz</h3>
              <p>
                Uma oportunidade para começar sua jornada
                profissional.
              </p>
              <div className="card-footer">
                <span className="tag">Oportunidade</span>
                <a href="#sobre" aria-label="Saiba mais sobre jovem aprendiz">
                  →
                </a>
              </div>
            </article>

            <article className="opportunity-card card-green">
              <div className="card-icon">🗓️</div>
              <h3>Workshop de Carreira</h3>
              <p>
                Dicas práticas para elaborar seu currículo
                e se preparar para entrevistas.
              </p>
              <div className="card-footer">
                <span className="tag">Evento</span>
                <a href="#sobre" aria-label="Saiba mais sobre workshop">
                  →
                </a>
              </div>
            </article>

            <article className="opportunity-card card-orange">
              <div className="card-icon">📖</div>
              <h3>Trilha de Comunicação</h3>
              <p>
                Melhore sua comunicação e desenvolva
                suas habilidades interpessoais.
              </p>
              <div className="card-footer">
                <span className="tag">Trilha de aprendizado</span>
                <a href="#sobre" aria-label="Saiba mais sobre comunicação">
                  →
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="about" id="sobre">
          <span className="eyebrow">Sobre o Conecta+</span>
          <h2>Seu próximo passo começa com uma conexão.</h2>
          <p>
            Queremos ajudar jovens a descobrir seus interesses,
            desenvolver habilidades e explorar possibilidades
            para construir o próprio futuro.
          </p>
          <a href="/cadastro" className="button button-primary">
            Faça parte da comunidade
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="/" className="logo">
          <img
            src={conectaLogo}
            alt="Logo Conecta+"
            className="logo-image"
          />
        </a>
        <p>Conectando jovens a novas possibilidades.</p>
        <span>© 2026 Conecta+ · Projeto acadêmico</span>
      </footer>
    </>
  );
}
