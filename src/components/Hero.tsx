import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-kicker">Disponible para oportunidades junior</p>

      <h1 className="hero-title">
  <span className="hero-title-inline">
    Rubén Gutierrez
    <span className="cursor">|</span>
  </span>
</h1>

      <h2 className="hero-role">Frontend Developer Jr</h2>

      <p className="hero-role-note">aprendiendo Backend</p>

      <p className="hero-description">
        Construyo interfaces web modernas, prolijas y funcionales con foco en
        experiencia de usuario. Vengo formándome en desarrollo web y también
        trabajé con JavaScript, React, Node.js y MongoDB.
      </p>

      <div className="hero-actions">
        <a href="#proyectos" className="btn-primary">
          Ver proyectos
        </a>

        <a href="#contacto" className="btn-secondary">
          Contacto
        </a>

  <a
  href="/cv-ruben-gutierrez.pdf"
  className="btn-outline"
  download
  target="_blank"
  rel="noreferrer"
>
  Descargar CV
</a>
      </div>
    </section>
  )
}

export default Hero