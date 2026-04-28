function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <p className="terminal-line">&gt; sobre_mi.txt</p>

        <h1>
          Sobre <span>mí</span>
        </h1>

        <p className="about-highlight">
          Desarrollo interfaces modernas, funcionales y orientadas a resolver
          problemas reales.
        </p>

        <div className="about-content">
          <div className="about-text-card">
            <h2>Perfil profesional</h2>

            <p>
              Soy desarrollador web con enfoque en frontend. Trabajo con
              JavaScript, React, HTML y CSS, mientras continúo mi formación en
              backend, APIs y bases de datos.
            </p>

            <p>
              También cuento con experiencia en tareas administrativas, control
              de datos, organización y procesos operativos, lo que me permite
              entender mejor las necesidades reales de empresas y negocios.
            </p>

            <p>
              Me interesa crear soluciones claras, útiles y bien presentadas,
              combinando diseño, lógica y mejora continua.
            </p>
          </div>

          <div className="about-terminal-card">
            <p><span>Ubicación:</span> Buenos Aires, Argentina</p>
            <p><span>Disponibilidad:</span> Remoto | Híbrido | Full-time</p>
            <p><span>Inglés:</span> B2 - Intermedio Alto</p>
            <p><span>Enfoque:</span> Frontend + Backend en formación</p>
            <p><span>Perfil:</span> Web Developer Jr</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About