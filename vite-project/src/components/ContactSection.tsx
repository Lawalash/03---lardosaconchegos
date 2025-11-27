import { useState } from 'react'
import type { FormEvent } from 'react'
import '../styles/ContactSection.css'
import { buildWhatsappLink } from '../constants/whatsapp'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message =
      `Olá! Gostaria de saber mais sobre a ILPI Aconchego dos Avós.
Nome: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.phone}
Mensagem: Gostaria de mais informações e agendar uma visita.`

    window.open(buildWhatsappLink(message), '_blank')
  }

  const handleChange = (field: 'name' | 'email' | 'phone', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const directWhatsapp = buildWhatsappLink('Olá! Quero falar com a ILPI Aconchego dos Avós.')

  return (
    <section className="section contact" id="contato">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Contato</p>
          <h2>Fale com nossa equipe</h2>
          <p>
            Preencha seus dados e retornaremos rapidamente para tirar dúvidas e agendar uma visita. Seus dados
            serão usados apenas para contato sobre a ILPI.
          </p>
          <a className="btn btn--secondary" href={directWhatsapp} target="_blank" rel="noreferrer">
            WhatsApp direto
          </a>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              placeholder="Seu e-mail para contato"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </label>
          <label>
            WhatsApp
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
            />
          </label>
          <button className="btn btn--primary" type="submit">
            Enviar e abrir WhatsApp
          </button>
          <p className="contact__note">Usaremos suas informações apenas para retornar o contato.</p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
