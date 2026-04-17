type NavbarProps = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(14px)',
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="#hero"
          style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            letterSpacing: '1px',
          }}
        >
          Rubén.dev
        </a>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '18px',
            color: 'var(--text-soft)',
            fontSize: '0.95rem',
          }}
        >
          <a href="#stack">Stack</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>

          <button
            onClick={toggleTheme}
            style={{
              border: '1px solid var(--card-border)',
              background: 'var(--card-bg)',
              color: 'var(--text-main)',
              padding: '10px 14px',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar