import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-kicker">Portfolio 2026</p>

      <h1 className="hero-title">Rubén Gutiérrez</h1>

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

        <a href="/cv-ruben.pdf" className="btn-outline">
          Descargar CV
        </a>
      </div>
    </section>
  )
}

export default Hero