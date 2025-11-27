import '../styles/Header.css'

import { useState, useEffect } from 'react'

const whatsappNumber = 'SEUNUMERO'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre a ILPI Aconchego dos Avós.',
  )}`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__content">
        <div className="brand">ILPI Aconchego dos Avós</div>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Fale no WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
