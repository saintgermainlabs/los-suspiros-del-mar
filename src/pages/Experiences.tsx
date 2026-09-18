import Footer from "../components/Footer";
import type { Page } from "../App";
import { useLang } from "../LanguageContext";

const imgs = [
  "https://images.unsplash.com/photo-1707621753369-5a7dddd5c888?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1740158252425-42fff8f31ec7?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1559619752-c9be3d26d457?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1613977645186-d3e10f27a09d?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1569872809440-a424ae8eced0?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1740158252330-adbbc7d2eeb9?w=600&h=400&fit=crop&auto=format",
];

export default function Experiences({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { tr } = useLang();
  const e = tr.experiences;

  return (
    <main className="pt-16">
      <section className="relative h-72 md:h-96 bg-[#1b4d6e] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1613977645186-d3e10f27a09d?w=1600&h=600&fit=crop&auto=format"
          alt="Ocean waves crashing at the shore" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4d6e]/30 to-[#1b4d6e]/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-3 font-medium">{e.tag}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-3">{e.heroTitle}</h1>
          <p className="text-[#a8bdc9] max-w-md mx-auto">{e.heroSub}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f4ef" />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-2 font-medium">{e.sectionTag}</p>
          <h2 className="font-display text-4xl text-[#1b4d6e] max-w-lg mx-auto">{e.sectionTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {e.list.map((exp, i) => (
            <div key={exp.title} className="group bg-white border border-[#d6cdb8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden h-48 bg-[#d6cdb8]">
                <img src={imgs[i]} alt={exp.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 text-xs bg-white/90 text-[#6b6355] px-3 py-1 rounded-full font-medium">{exp.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" aria-hidden="true">{exp.icon}</span>
                  <h3 className="font-display text-xl text-[#1b4d6e]">{exp.title}</h3>
                </div>
                <p className="text-sm text-[#6b6355] leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1b4d6e] rounded-lg p-8 md:p-12 text-white text-center">
          <p className="font-display text-3xl mb-3">{e.ctaTitle}</p>
          <p className="text-[#a8bdc9] max-w-lg mx-auto mb-6 text-sm">{e.ctaDesc}</p>
          <button onClick={() => onNavigate("contact")}
            className="bg-[#4a8fa3] hover:bg-white hover:text-[#1b4d6e] text-white font-medium px-8 py-3 rounded transition-all text-sm">
            {e.ctaBtn}
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}
