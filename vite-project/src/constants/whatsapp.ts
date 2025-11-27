export const WHATSAPP_NUMBER = 'SEUNUMERO'

export const buildWhatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
