function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <p className="terminal-line">&gt; proyectos_listado.txt</p>

        <h1>
          Mis <span>Proyectos</span>
        </h1>

        <p className="projects-description">
          Proyectos desarrollados con enfoque en diseño, funcionalidad y
          resolución de problemas reales.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image">
              <img src="/dydplegados.jpeg" alt="Proyecto DyD Plegados" />
            </div>

            <div className="project-content">
              <span className="project-tag">JavaScript</span>
              <h2>DyD Plegados</h2>
              <p>
                Sitio institucional y simulador interactivo para empresa
                metalúrgica. Incluye catálogo, carrito, lógica de compra y
                experiencia de usuario enfocada en negocio real.
              </p>

              <div className="project-buttons">
                <a href="https://dydplegados.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Ver sitio
                </a>
                <a href="https://github.com/RubenEduardoG/80790" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img src="/logo.coconup.png" alt="Proyecto Coconutbliss" />
            </div>

            <div className="project-content">
              <span className="project-tag">HTML + CSS</span>
              <h2>Coconutbliss</h2>
              <p>
                Sitio visual para tienda de productos naturales, con diseño
                minimalista, estética limpia y navegación orientada a marca.
              </p>

              <div className="project-buttons">
                <a href="https://coconutblis.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver sitio
                </a>
                <a href="https://github.com/RubenEduardoG/coconup" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects