const services = [
  {
    title: 'Assistência 24h',
    description: 'Cuidadores presentes em todos os turnos, garantindo atenção imediata e rotina segura.',
  },
  {
    title: 'Fisioterapia e mobilidade',
    description: 'Planos personalizados para fortalecimento, prevenção de quedas e autonomia de movimentos.',
  },
  {
    title: 'Cuidadores e enfermagem',
    description: 'Equipe treinada para apoio em medicação, higiene, alimentação e acompanhamento diário.',
  },
  {
    title: 'Acompanhamento de saúde',
    description: 'Parcerias com profissionais de saúde para avaliações regulares e orientações à família.',
  },
]

const Services = () => {
  return (
    <section className="section section--alt" id="servicos">
      <div className="container">
        <div className="section__header">
          <div>
            <h2>Serviços que a ILPI oferece</h2>
            <p className="section__subtitle">
              Atenção completa para saúde física, emocional e social de cada residente.
            </p>
          </div>
          <span className="section__pill">Equipe multidisciplinar</span>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="link" href="#contato">
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
