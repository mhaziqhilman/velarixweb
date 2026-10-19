import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Facts } from './components/Facts'
import { Statement } from './components/Statement'
import { Services } from './components/Services'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <div className="frame">
        <main id="main">
          <Hero />
          <Facts />
          <Statement />
          <Services />
          <About />
          <Capabilities />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
