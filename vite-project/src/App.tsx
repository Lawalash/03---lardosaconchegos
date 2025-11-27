import './styles/theme.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import EmotionalSection from './components/EmotionalSection'
import VisitCallToAction from './components/VisitCallToAction'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CareGallery from './components/CareGallery'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <CareGallery />
        <EmotionalSection />
        <VisitCallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
