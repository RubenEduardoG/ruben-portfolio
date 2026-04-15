import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Projects from './components/Proyects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
          }}
        >
          <Hero />
        </section>
        <TechStack />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App