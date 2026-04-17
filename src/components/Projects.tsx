const projectList = [
  {
    title: 'Coconutbliss',
    stack: 'HTML · CSS',
    description:
      'Landing page desarrollada con HTML y CSS, enfocada en maquetación prolija, estética visual y estructura responsive.',
    image: 'logo.coconup.png',
    demo: 'https://coconutblis.vercel.app/',
    code: 'https://github.com/RubenEduardoG/coconup',
  },
  {
    title: 'DyD Plegados',
    stack: 'JavaScript · LocalStorage · SweetAlert2',
    description:
      'Proyecto ecommerce desarrollado con JavaScript, con lógica de productos, carrito, almacenamiento local y flujo de compra.',
    image: 'dydplegadoslogo.png',
    demo: 'https://dydplegados.netlify.app/',
    code: 'https://github.com/RubenEduardoG/80790',
  },
]
function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '100px 20px 40px',
      }}
    >
      <p
        style={{
          color: 'var(--blue-accent)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '12px',
        }}
      >
        Proyectos
      </p>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '16px',
        }}
      >
        Trabajo reciente
      </h2>

      <p
        style={{
          maxWidth: '720px',
          color: 'var(--text-soft)',
          lineHeight: 1.8,
          marginBottom: '30px',
        }}
      >
        Estos son algunos de los proyectos que fui desarrollando para practicar
        maquetación, lógica de interacción y construcción de interfaces web.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {projectList.map((project) => (
          <article
            key={project.title}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <div
              style={{
                padding: '24px',
                display: 'grid',
                gap: '12px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: 'var(--blue-accent)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {project.stack}
              </p>

              <p
                style={{
                  color: 'var(--text-soft)',
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginTop: '10px',
                }}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '12px 18px',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)',
                    color: '#fff',
                    fontWeight: 700,
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '12px 18px',
                    borderRadius: '999px',
                    border: '1px solid var(--card-border)',
                    background: 'var(--card-bg)',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects