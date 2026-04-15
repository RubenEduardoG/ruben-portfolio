import './TechStack.css'

const technologies = [
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'Git', iconClass: 'devicon-git-plain colored' },
  { name: 'GitHub', iconClass: 'devicon-github-original' },
  { name: 'Vite', iconClass: 'devicon-vitejs-plain colored' },
  { name: 'Vercel', iconClass: 'devicon-vercel-original' },
]

function TechStack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-container">
        <p className="stack-kicker">Stack</p>

        <h2 className="stack-title">Tecnologías con las que trabajo</h2>

        <p className="stack-description">
          Estas son algunas de las herramientas y tecnologías que fui usando en
          mis proyectos y en mi formación.
        </p>

        <div className="stack-grid">
          {technologies.map((tech) => (
            <article key={tech.name} className="stack-card">
              <i className={tech.iconClass} aria-hidden="true"></i>
              <span>{tech.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack