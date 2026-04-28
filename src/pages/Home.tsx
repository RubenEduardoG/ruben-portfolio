import { Folder, User, Download } from 'lucide-react'

function Home() {
  return (
    <section className="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            <span className="code-symbol">&lt;/&gt;</span>
            <br />
            Rubén Eduardo <br />
            <span>Gutierrez</span>
          </h1>

          <h2>
            Desarrollador Web <br />
            Frontend | Backend en formación | QA Mindset | Inglés B2
          </h2>

          <p className="hero-description">
            Creo soluciones digitales funcionales, modernas y orientadas
            a resultados reales para negocios y personas.
          </p>

          <div className="hero-buttons">
            <a href="/proyectos"><Folder size={20} /> Ver proyectos</a>
            <a href="/sobre-mi"><User size={20} /> Sobre mí</a>
            <a href="/cv-ruben-full-stack.pdf" download><Download size={20} /> Descargar CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img src="/perfil-ruben.png" alt="Rubén Eduardo Gutierrez" />
          </div>
        </div>
      </div>

      <div className="home-extra">
        <h3>Tecnologías principales</h3>

     <div className="tech-icons">
  <div><img src="/icons/html.svg" alt="HTML" /><span>HTML</span></div>
  <div><img src="/icons/css.svg" alt="CSS" /><span>CSS</span></div>
  <div><img src="/icons/javascript.svg" alt="JavaScript" /><span>JavaScript</span></div>
  <div><img src="/icons/react.svg" alt="React" /><span>React</span></div>
  <div><img src="/icons/nodejs.svg" alt="Node.js" /><span>Node.js</span></div>
  <div><img src="/icons/express.svg" alt="Express" /><span>Express</span></div>
  <div><img src="/icons/mongodb.svg" alt="MongoDB" /><span>MongoDB</span></div>
  <div><img src="/icons/git.svg" alt="Git" /><span>Git</span></div>
  <div><img src="/icons/github-light.svg" alt="GitHub" /><span>GitHub</span></div>
  <div><img src="/icons/vitejs.svg" alt="Vite" /><span>Vite</span></div>
  <div><img src="/icons/postman.svg" alt="Postman" /><span>Postman</span></div>
  <div><img src="/icons/typescript.svg" alt="TypeScript" /><span>TypeScript</span></div>
  <div><img src="/icons/npm.svg" alt="NPM" /><span>NPM</span></div>
   <div><img src="/icons/vercel.svg" alt="Vercel" /><span>NPM</span></div>
</div>
      </div>

      <p className="footer-phrase">
        &gt; Hay dos maneras de escribir programas sin errores. Solo la tercera funciona.
      </p>
    </section>
  )
}

export default Home