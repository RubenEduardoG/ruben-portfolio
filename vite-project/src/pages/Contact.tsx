function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <p className="terminal-line">&gt; contacto.sh</p>

        <h1>
          Contacto<span>.</span>
        </h1>

        <p className="contact-description">
          Estoy abierto a oportunidades como desarrollador web, frontend,
          backend junior, QA manual o roles donde pueda aportar soluciones
          digitales con compromiso, aprendizaje y mejora continua.
        </p>

        <div className="contact-links">
          <a href="/cv-ruben-full-stack.pdf" download>
            <span>↓</span>
            Descargar CV
          </a>

          <a
            href="https://github.com/RubenEduardoG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{"</>"}</span>
            GitHub
          </a>

          <a
            href="http://linkedin.com/in/rubén-eduardo-gutierrez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>in</span>
            LinkedIn
          </a>

          <a href="rubengutierrezdv@gmail.com">
            <span>@</span>
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact