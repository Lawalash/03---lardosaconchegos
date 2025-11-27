import '../styles/EmotionalSection.css'

const EmotionalSection = () => {
  return (
    <section className="emotional" id="cuidado">
      <div className="container emotional__content">
        <div>
          <p className="eyebrow">Cuidado humano</p>
          <h2>Mais do que uma ILPI, um lar de afeto e respeito</h2>
          <p>
            Na ILPI Aconchego dos Avós, cada história é acolhida com proximidade e atenção. Cultivamos uma
            rotina leve, com escuta ativa e presença constante da equipe para garantir conforto, saúde e
            autonomia.
          </p>
        </div>
        <div className="quote-card">
          <p className="quote">
            “Não podemos mudar o vento, mas podemos ajustar as velas.”
          </p>
          <span className="quote__author">— Navegação segura para cada fase da vida</span>
        </div>
      </div>
    </section>
  )
}

export default EmotionalSection
