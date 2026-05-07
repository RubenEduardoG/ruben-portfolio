import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <nav className="navbar">

        <div className="logo">
          <Link to="/" onClick={closeMenu}>rubén.dev</Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((state) => !state)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Inicio</Link>
          <Link to="/sobre-mi" onClick={closeMenu}>Sobre mí</Link>
          <Link to="/proyectos" onClick={closeMenu}>Proyectos</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
        </div>

        <div className="cv-button">
          <a href="/cv-ruben-gutierrez.pdf" download>
            Descargar CV
          </a>
        </div>

      </nav>
    </>
  )
}

export default Navbar