import type { Page } from "../App";
import Footer from "../components/Footer";
import { useLang } from "../LanguageContext";

const imgs = [
  "https://images.unsplash.com/photo-1771466883546-a988d001f5ba?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1770232274485-b35ee5092cbe?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1780672823907-07fb6661c31a?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1770414173168-f6c666501225?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1726732238608-6e341cbb9cc9?w=800&h=500&fit=crop&auto=format",
];

export default function Rooms({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { tr } = useLang();
  const r = tr.rooms;

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-[#1b4d6e] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1783255620846-6b98d1fe2eb0?w=1600&h=600&fit=crop&auto=format"
          alt="Waves crashing against a cliffside house at sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4d6e]/30 to-[#1b4d6e]/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-3 font-medium">{r.tag}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-3">{r.heroTitle}</h1>
          <p className="text-[#a8bdc9] max-w-md mx-auto">{r.heroSub}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f4ef" />
          </svg>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-xs text-[#6b6355] italic bg-[#ede8df] rounded-lg px-5 py-3 inline-block">{r.priceNote}</p>
      </div>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-16">
        {r.list.map((room, i) => (
          <article key={room.name}
            className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative overflow-hidden rounded-lg bg-[#d6cdb8] h-72 md:h-80">
              <img src={imgs[i]} alt={room.name} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              {(room as { featured?: boolean }).featured && (
                <span className="absolute top-4 left-4 bg-[#4a8fa3] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                  {r.featured}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-1 font-medium">{room.tagline}</p>
              <h2 className="font-display text-3xl text-[#1b4d6e] mb-1">{room.name}</h2>
              <div className="flex items-center gap-4 text-sm text-[#6b6355] mb-4">
                <span aria-hidden="true">👥 {room.capacity}</span>
                <span aria-hidden="true">🛏 {room.bed}</span>
              </div>
              <p className="text-[#6b6355] leading-relaxed mb-5">{room.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.amenities.map((a) => (
                  <span key={a} className="text-xs bg-[#ede8df] text-[#6b6355] px-3 py-1 rounded-full">{a}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-display text-[#1b4d6e] font-semibold">{r.from} {room.price}</span>
                  <span className="text-sm text-[#6b6355] ml-1">{r.fromNight}</span>
                </div>
                <button onClick={() => onNavigate("contact")}
                  className="bg-[#1b4d6e] hover:bg-[#4a8fa3] text-white text-sm font-medium px-6 py-2.5 rounded transition-colors">
                  {r.bookNow}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}
