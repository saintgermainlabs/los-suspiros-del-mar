import { useState } from "react";
import Footer from "../components/Footer";
import type { Page, BookingQuery } from "../App";
import { useLang } from "../LanguageContext";
import { site, waLink, mapsLink, defaultWaMessage } from "../site";

export default function Contact({
  onNavigate,
  initialBooking,
}: {
  onNavigate: (p: Page) => void;
  initialBooking: BookingQuery | null;
}) {
  const { tr } = useLang();
  const c = tr.contact;
  const f = c.fields;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: initialBooking?.checkin ?? "",
    checkout: initialBooking?.checkout ?? "",
    guests: initialBooking?.guests ?? "2",
    roomIndex: initialBooking?.roomIndex ?? "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const selectedRoom = form.roomIndex !== "" ? c.roomOptions[Number(form.roomIndex)] : "No preference";

    try {
      const response = await fetch("https://formspree.io/f/mnpndqvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          guests: form.guests,
          checkin: form.checkin,
          checkout: form.checkout,
          room: selectedRoom,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const data = await response.json();
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const waBookingMessage = [
    "Hola, me gustaría reservar en Los Suspiros del Mar.",
    `${f.checkin}: ${form.checkin}`,
    `${f.checkout}: ${form.checkout}`,
    `${f.guests}: ${form.guests}`,
    form.roomIndex !== "" ? `${f.room}: ${c.roomOptions[Number(form.roomIndex)]}` : null,
    form.name ? `${f.name}: ${form.name}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const inputClass =
    "w-full border border-[#d6cdb8] rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#4a8fa3]";

  return (
    <main className="pt-16">
      <section className="relative h-64 bg-[#1b4d6e] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1577978080965-0c295bd5953f?w=1600&h=400&fit=crop&auto=format"
          alt="Calm ocean water" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-3 font-medium">{c.tag}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-3">{c.heroTitle}</h1>
          <p className="text-[#a8bdc9]">{c.heroSub}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f4ef" />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-2 font-medium">{c.formTag}</p>
          <h2 className="font-display text-3xl text-[#1b4d6e] mb-6">{c.formTitle}</h2>

          {sent ? (
            <div className="bg-[#ede8df] border border-[#d6cdb8] rounded-lg p-8 text-center">
              <span className="text-4xl" aria-hidden="true">🌊</span>
              <p className="font-display text-2xl text-[#1b4d6e] mt-4 mb-2">{c.successTitle}</p>
              <p className="text-[#6b6355] text-sm">{c.successMsg(form.name, form.email)}</p>
              <a
                href={waLink(waBookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5a] text-white text-sm font-medium px-6 py-2.5 rounded transition-colors"
              >
                💬 {c.whatsappLink}
              </a>
              <div>
                <button onClick={() => setSent(false)} className="mt-4 text-sm text-[#4a8fa3] underline underline-offset-2">
                  {c.successBack}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs text-[#6b6355] mb-1">{f.name} *</label>
                  <input id="c-name" name="name" required autoComplete="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder={f.namePlaceholder}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs text-[#6b6355] mb-1">{f.email} *</label>
                  <input id="c-email" name="email" required type="email" autoComplete="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    placeholder={f.emailPlaceholder}
                    className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-phone" className="block text-xs text-[#6b6355] mb-1">{f.phone}</label>
                  <input id="c-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder={f.phonePlaceholder}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="c-guests" className="block text-xs text-[#6b6355] mb-1">{f.guests}</label>
                  <select id="c-guests" name="guests" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                    className={inputClass}>
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n===1 ? tr.home.guest : tr.home.guestsPlural}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-checkin" className="block text-xs text-[#6b6355] mb-1">{f.checkin} *</label>
                  <input id="c-checkin" name="checkin" required type="date" value={form.checkin} onChange={e => setForm({...form, checkin: e.target.value})}
                    className={inputClass} />
                </div>
                <div>
                  <label htmlFor="c-checkout" className="block text-xs text-[#6b6355] mb-1">{f.checkout} *</label>
                  <input id="c-checkout" name="checkout" required type="date" value={form.checkout} min={form.checkin || undefined} onChange={e => setForm({...form, checkout: e.target.value})}
                    className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="c-room" className="block text-xs text-[#6b6355] mb-1">{f.room}</label>
                <select id="c-room" name="room" value={form.roomIndex} onChange={e => setForm({...form, roomIndex: e.target.value})}
                  className={inputClass}>
                  <option value="">{f.noPreference}</option>
                  {c.roomOptions.map((o, i) => <option key={o} value={i}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="c-message" className="block text-xs text-[#6b6355] mb-1">{f.message}</label>
                <textarea id="c-message" name="message" value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  rows={3} placeholder={f.messagePlaceholder}
                  className={`${inputClass} resize-none`} />
              </div>

              {error && (
                <div className="text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3 text-sm text-center">
                  {error}
                </div>
              )}

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-[#1b4d6e] hover:bg-[#4a8fa3] text-white font-medium py-3.5 rounded transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a8fa3] disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "..." : f.submit}
              </button>
              <p className="text-xs text-[#6b6355] text-center">{f.note}</p>
            </form>
          )}

          <div className="mt-6 bg-[#e8f5e8] border border-[#a8d5a8] rounded-lg p-4 flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">💬</span>
            <div>
              <p className="text-sm font-medium text-[#2d6a2d]">{c.whatsappTitle}</p>
              <a href={waLink(defaultWaMessage)}
                target="_blank" rel="noopener noreferrer" className="text-xs text-[#2d6a2d] underline underline-offset-2">
                {c.whatsappLink} ({site.phoneDisplay})
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-4 font-medium">{c.findUs}</p>
            <div className="rounded-lg overflow-hidden h-80 w-full border border-[#d6cdb8] shadow-sm bg-[#ede8df]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.179876253657!2d-76.8473174!3d-12.3036704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105a31d68c3dfe5%3A0xd03b063ef7c77cc1!2sLos%20Suspiros%20del%20Mar!5e0!3m2!1sen!2spe!4v1789997546502!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Los Suspiros del Mar Location Map"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: c.infoLabels.phone, value: site.phoneDisplay, href: site.phoneHref },
              { label: c.infoLabels.email, value: site.email, href: `mailto:${site.email}` },
              { label: c.infoLabels.checkin, value: c.infoValues.checkin, href: null },
              { label: c.infoLabels.checkout, value: c.infoValues.checkout, href: null },
            ].map(item => (
              <div key={item.label} className="bg-[#ede8df] rounded-lg p-4">
                <p className="text-xs text-[#6b6355] uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-[#1b4d6e] font-medium hover:text-[#4a8fa3] break-all">{item.value}</a>
                ) : (
                  <p className="text-sm text-[#1b4d6e] font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-4 font-medium">{c.faqTitle}</p>
            <div className="space-y-2">
              {c.faqs.map((faq, i) => (
                <div key={i} className="border border-[#d6cdb8] rounded-lg overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex justify-between items-center px-4 py-3.5 text-left text-sm font-medium text-[#1b4d6e] hover:bg-[#ede8df] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a8fa3]">
                    {faq.q}
                    <span className="ml-2 shrink-0 text-[#4a8fa3]" aria-hidden="true">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && (
                    <div id={`faq-panel-${i}`} className="px-4 pb-4 text-sm text-[#6b6355] leading-relaxed border-t border-[#d6cdb8] pt-3">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}
