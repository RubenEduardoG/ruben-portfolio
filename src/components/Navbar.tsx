function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(14px)',
        background: 'rgba(5, 8, 22, 0.7)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
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
            gap: '18px',
            color: '#94a3b8',
            fontSize: '0.95rem',
          }}
        >
<a
  href="#sobre-mi"
  style={{ transition: '0.2s' }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = '#38bdf8'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = '#94a3b8'
  }}
>
  Sobre mí
</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar