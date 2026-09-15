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

        <section className="projects-category">
          <h2 className="projects-category-title">Proyectos Freelance / Reales</h2>

          <article className="project-card featured-project">
            <div className="project-image">
              <img src="/martita.png" alt="Proyecto Lo de Martita" />
            </div>

            <div className="project-content">
              <span className="project-tag freelance-tag">
                Proyecto Freelance / Cliente real
              </span>

              <h2>Lo de Martita</h2>

              <p>
                Aplicación web desarrollada para una rotisería con modalidad
                delivery y take away. Permite visualizar productos por
                categorías, armar pedidos y facilitar el contacto del cliente
                con el comercio.
              </p>

              <div className="project-buttons">
                <a
                  href="https://rotiseria-lo-de-martita.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver sitio
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/victeacher-ingles.png"
                alt="VE English Teacher - Landing page para profesora de inglés"
              />
            </div>

            <div className="project-content">
              <span className="project-tag">React + Tailwind CSS + Formspree</span>
              <h2>VE English Teacher</h2>
              <p>
                Landing page para profesora de inglés enfocada en captación de
                alumnos, agendamiento de entrevistas sin cargo y consulta de
                modalidades y niveles.
              </p>

              <div className="project-buttons">
                <a
                  href="https://victeacherve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo En Vivo
                </a>
                <a
                  href="https://github.com/RubenEduardoG/proyecto-idiomas-clases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img
                src="/lisi-carpintera.png"
                alt="Lisi Carpintería - Landing Page y Galería Interactiva"
              />
            </div>

            <div className="project-content">
              <span className="project-tag">React + Vite</span>
              <h2>Lisi Carpintería - Landing Page &amp; Galería Interactiva</h2>
              <p>
                Sitio web profesional para negocio de carpintería artesanal y
                restauración. Incluye showcase interactivo de transformación
                de muebles, visualización de imágenes en alta resolución con
                Lightbox y formulario directo para cotizaciones.
              </p>

              <div className="project-buttons">
                <a
                  href="https://lisi-carpinteria.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo En Vivo
                </a>
                <a
                  href="https://github.com/RubenEduardoG/lisi-carpinteria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          </article>

        </section>

        <div className="projects-divider" aria-hidden="true" />

        <section className="projects-category">
          <h2 className="projects-category-title">Prácticas / Proyectos Personales</h2>

          <div className="projects-grid">
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
                  <a
                    href="https://coconutblis.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver sitio
                  </a>
                  <a
                    href="https://github.com/RubenEduardoG/coconup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

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
                  <a
                    href="https://dydplegados.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver sitio
                  </a>
                  <a
                    href="https://github.com/RubenEduardoG/80790"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects