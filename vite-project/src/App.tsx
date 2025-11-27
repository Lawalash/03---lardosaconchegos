import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import EmotionalSection from './components/EmotionalSection'
import VisitCallToAction from './components/VisitCallToAction'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <EmotionalSection />
        <VisitCallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
