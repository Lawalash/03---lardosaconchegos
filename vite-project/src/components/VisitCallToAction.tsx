const whatsappNumber = 'SEUNUMERO'

const VisitCallToAction = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Quero agendar uma visita à ILPI Aconchego dos Avós.',
  )}`

  return (
    <section className="visit">
      <div className="container visit__content">
        <div>
          <p className="eyebrow">Visite e sinta o aconchego</p>
          <h2>Agende uma visita e conheça cada detalhe do nosso lar</h2>
          <p>
            Veja de perto a estrutura segura, a equipe preparada e os ambientes planejados para receber seu
            familiar com conforto.
          </p>
        </div>
        <a className="btn btn--primary btn--large" href={whatsappLink} target="_blank" rel="noreferrer">
          Agendar visita pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export default VisitCallToAction
