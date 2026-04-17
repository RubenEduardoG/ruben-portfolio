function Contact() {
  return (
    <section
      id="contacto"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '100px 20px 80px',
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
        Contacto
      </p>


      <p
        style={{
          maxWidth: '700px',
          color: 'var(--text-soft)',
          lineHeight: 1.8,
          marginBottom: '28px',
        }}
      >
        Si querés contactarme por una oportunidad, proyecto o propuesta, podés
        encontrarme en estos canales.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        <a
          href="https://github.com/RubenEduardoG"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid var(--card-border)',
            background: 'var(--card-bg)',
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rub%C3%A9n-eduardo-gutierrez/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid var(--card-border)',
            background: 'var(--card-bg)',
          }}
        >
          LinkedIn
        </a>

        <a
          href="rubengutierrezdv@gmail.com"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid var(--card-border)',
            color: 'var(--blue-accent)',
          }}
        >
          Email
        </a>
      </div>
    </section>
  )
}

export default Contact