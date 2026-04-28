import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">rubén.dev</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contacto">Contacto</Link>
      </div>

      <div className="cv-button">
        <a href="/cv-ruben-gutierrez.pdf" download>
          Descargar CV
        </a>
      </div>

    </nav>
  )
}

export default Navbar