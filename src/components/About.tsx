function About() {
  return (
    <section
      id="sobre-mi"
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
        Sobre mí
      </p>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '20px',
        }}
      >
        Perfil profesional
      </h2>

      <p
        style={{
          maxWidth: '750px',
          color: 'var(--text-soft)',
          lineHeight: 1.8,
          fontSize: '1.05rem',
        }}
      >
        Soy Rubén, me estoy formando en desarrollo web y construyendo proyectos
        para seguir creciendo como desarrollador. Me interesa crear interfaces
        modernas, claras y funcionales, mientras sigo ampliando mis conocimientos
        en frontend y backend.
      </p>
    </section>
  )
}

export default About