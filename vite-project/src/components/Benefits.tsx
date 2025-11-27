import '../styles/Benefits.css'

const benefits = [
  {
    title: 'Conforto e qualidade de vida',
    description: 'Ambientes aconchegantes, climatizados e adaptados para proporcionar tranquilidade e bem-estar.',
    icon: '✨',
  },
  {
    title: 'Alimentação saudável',
    description: 'Cardápios elaborados com orientação nutricional para manter energia e saúde em dia.',
    icon: '🥗',
  },
  {
    title: 'Atividades recreativas',
    description: 'Programação diária de música, artes, jogos e momentos de socialização para estimular vínculos.',
    icon: '🎶',
  },
  {
    title: 'Atenção emocional',
    description: 'Acolhimento individualizado, escuta ativa e suporte psicológico para uma rotina leve.',
    icon: '💛',
  },
  {
    title: 'Independência assistida',
    description: 'Estímulo à autonomia com segurança, respeitando limites e necessidades de cada residente.',
    icon: '🧭',
  },
  {
    title: 'Segurança 24h',
    description: 'Equipe presente em todos os turnos e tecnologia para monitoramento e resposta rápida.',
    icon: '🛡️',
  },
]

const Benefits = () => {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <h2>Benefícios para o seu querido idoso</h2>
        <p className="section__subtitle">
          Um ambiente planejado para proporcionar cuidado integral, respeitando história, preferências e
          personalidade.
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card">
              <div className="benefit-card__icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
