const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <div className="brand">ILPI Aconchego dos Avós</div>
          <p className="footer__text">Cuidado seguro, humano e sofisticado para quem você ama.</p>
        </div>
        <div className="footer__meta">© {new Date().getFullYear()} • Todos os direitos reservados</div>
      </div>
    </footer>
  )
}

export default Footer
