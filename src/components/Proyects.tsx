function Projects() {
  return (
    <section
      id="proyectos"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '100px 20px 40px',
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
        Proyectos
      </p>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '20px',
        }}
      >
        Trabajo reciente
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <article
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(148, 163, 184, 0.16)',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          <h3 style={{ marginBottom: '12px' }}>DyD Plegados</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
            Proyecto ecommerce con JavaScript, manejo de carrito, productos,
            almacenamiento local y lógica de compra.
          </p>
        </article>

        <article
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(148, 163, 184, 0.16)',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          <h3 style={{ marginBottom: '12px' }}>Proyecto React</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
            Aplicación construida con React, enfocada en componentes,
            navegación y estructura moderna para ecommerce.
          </p>
        </article>

<article
  style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(148, 163, 184, 0.16)',
    borderRadius: '24px',
    padding: '24px',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-6px)'
    e.currentTarget.style.border = '1px solid rgba(56,189,248,0.6)'
    e.currentTarget.style.boxShadow =
      '0 0 25px rgba(56,189,248,0.15)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.border =
      '1px solid rgba(148, 163, 184, 0.16)'
    e.currentTarget.style.boxShadow = 'none'
  }}
>
          <h3 style={{ marginBottom: '12px', color: '#38bdf8' }}>
            Próximo proyecto
          </h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
            Este espacio queda preparado para sumar nuevos trabajos a medida que
            sigas construyendo portfolio.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Projects