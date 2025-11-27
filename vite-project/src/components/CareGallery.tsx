import '../styles/CareGallery.css'

const careCards = [
  {
    title: 'Cuidados diários com carinho',
    description:
      'Rotina acolhedora com apoio em higiene, medicação e atividades suaves para manter autonomia.',
    image:
      'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Momentos de socialização',
    description: 'Ambientes pensados para música, rodas de conversa e vínculos entre residentes e equipe.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Espaços tranquilos e seguros',
    description: 'Salas climatizadas, áreas verdes e acompanhamento constante para passeios com segurança.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
]

const CareGallery = () => {
  return (
    <section className="section section--gallery" id="estrutura">
      <div className="container">
        <div className="section__header">
          <div>
            <p className="eyebrow">Estrutura e cuidados</p>
            <h2>Ambientes com fotos reais e cuidados presentes</h2>
            <p className="section__subtitle">
              Uma galeria de momentos que mostram o clima acolhedor, moderno e seguro preparado para quem você ama.
            </p>
          </div>
          <span className="section__pill">Visão do dia a dia</span>
        </div>
        <div className="care-grid">
          {careCards.map((card) => (
            <div key={card.title} className="care-card">
              <div className="care-card__image" style={{ backgroundImage: `url(${card.image})` }} />
              <div className="care-card__body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareGallery
