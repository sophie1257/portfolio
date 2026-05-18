import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectDetail />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}