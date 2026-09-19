// ─────────────────────────────────────────────────────────────
// Site configuration — edit everything contact-related here.
// Replace the placeholder values below before going live.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Los Suspiros del Mar",
  phoneDisplay: "+51 999 000 000",
  phoneHref: "tel:+51999000000",
  whatsappNumber: "51999000000", // country code + number, digits only
  email: "hola@lossuspirosdelmar.pe",
  address: "Los Lirios, Lurin, Lima",
  checkin: "3:00 PM",
  checkout: "11:00 AM",
  social: {
    instagram: "https://instagram.com/lossuspirosdelmar",
    facebook: "https://facebook.com/lossuspirosdelmar",
    tiktok: "https://tiktok.com/@lossuspirosdelmar",
  },
} as const;

/** WhatsApp deep link with an optional pre-filled message. */
export function waLink(text?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Google Maps search link for the property address. */
export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${site.address}`
  )}`;
}

export const defaultWaMessage = "Hola, me gustaría reservar en Los Suspiros del Mar.";
