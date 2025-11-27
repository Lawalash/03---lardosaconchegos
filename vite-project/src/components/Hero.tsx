const whatsappNumber = 'SEUNUMERO'

const Hero = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma visita à ILPI Aconchego dos Avós.',
  )}`

  return (
    <section className="hero" id="sobre">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__text">
          <div className="eyebrow">ILPI Aconchego dos Avós</div>
          <h1>Um lugar seguro, acolhedor e sofisticado para quem você ama</h1>
          <p>
            Cuidado humanizado com equipe multidisciplinar, segurança 24h e programação diária para manter corpo
            e mente ativos. Aqui, seu familiar é recebido com carinho e respeito.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Fale conosco no WhatsApp
            </a>
            <a className="btn btn--secondary" href="#beneficios">
              Ver benefícios
            </a>
          </div>
          <div className="hero__note">Agende uma visita e sinta o aconchego de perto.</div>
        </div>
        <div className="hero__visual">
          <div className="hero__badge">Cuidado 24h</div>
          <div className="hero__card">
            <p>Espaços amplos, climatizados e preparados para oferecer conforto e independência.</p>
            <span className="hero__placeholder">(Espaço reservado para foto do lar)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
