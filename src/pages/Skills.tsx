function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">
        <p className="terminal-line">
          &gt; skills_stack.json
        </p>

        <h1>
          Skills & <span>Tecnologías</span>
        </h1>

        <p className="skills-description">
          No solo escribo código.
          <br />
          Construyo soluciones funcionales, escalables y orientadas
          a resultados reales.
        </p>

        <div className="skills-grid">

          <div className="skill-box">
            <h2>💻 Frontend</h2>
            <p>
              HTML, CSS, JavaScript, TypeScript, React, Vite,
              Responsive Design, UI/UX, componentes reutilizables.
            </p>
          </div>

          <div className="skill-box">
            <h2>⚙ Backend</h2>
            <p>
              Node.js, Express, APIs REST, lógica de negocio,
              bases de datos, backend en formación.
            </p>
          </div>

          <div className="skill-box">
            <h2>🧪 Testing</h2>
            <p>
              QA mindset, testing funcional, validación de flujos,
              detección de errores y mejora de experiencia de usuario.
            </p>
          </div>

          <div className="skill-box">
            <h2>🛠 Herramientas</h2>
            <p>
              Git, GitHub, Vercel, Netlify, VS Code,
              npm, React Router, localStorage, Postman.
            </p>
          </div>

          <div className="skill-box">
            <h2>📈 Business Skills</h2>
            <p>
              Excel básico, control de datos, organización,
              procesos operativos y enfoque en soluciones reales.
            </p>
          </div>

          <div className="skill-box">
            <h2>🌍 English</h2>
            <p>
              Nivel B2 — comprensión de documentación técnica,
              lectura profesional y trabajo en entornos globales.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills