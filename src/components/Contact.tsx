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
          color: '#38bdf8',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '12px',
        }}
      >
        Contacto
      </p>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '20px',
        }}
      >
        Hablemos
      </h2>

      <p
        style={{
          maxWidth: '700px',
          color: '#94a3b8',
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
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          LinkedIn
        </a>

        <a
          href="mailto:tuemail@gmail.com"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
          }}
        >
          Email
        </a>
      </div>
    </section>
  )
}

export default Contact