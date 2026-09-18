import type { Page } from "../App";
import Footer from "../components/Footer";
import { useLang } from "../LanguageContext";

const teamImgs = [
  "https://images.unsplash.com/photo-1496945589647-8784b8d04934?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1705672354908-a068661bc81d?w=300&h=300&fit=crop&auto=format",
];

export default function About({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { tr } = useLang();
  const a = tr.about;

  return (
    <main className="pt-16">
      <section className="relative h-72 md:h-96 bg-[#1b4d6e] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1496945589647-8784b8d04934?w=1600&h=600&fit=crop&auto=format"
          alt="Person sitting on balcony overlooking the ocean" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4d6e]/30 to-[#1b4d6e]/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-3 font-medium">{a.tag}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-3">{a.heroTitle}</h1>
          <p className="text-[#a8bdc9] max-w-md mx-auto">{a.heroSub}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f4ef" />
          </svg>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-4 font-medium">{a.storyTag}</p>
            <h2 className="font-display text-4xl text-[#1b4d6e] mb-6 leading-tight">{a.storyTitle}</h2>
            <p className="text-[#6b6355] leading-relaxed mb-4">{a.storyP1}</p>
            <p className="text-[#6b6355] leading-relaxed mb-4">{a.storyP2}</p>
            <p className="text-[#6b6355] leading-relaxed">{a.storyP3}</p>
          </div>
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1774579892039-6e3260fc0ce7?w=600&h=400&fit=crop&auto=format"
              alt="Modern hotel building on a beach at sunset" loading="lazy" decoding="async" className="w-full h-56 object-cover rounded-lg bg-[#d6cdb8]" />
            <img src="https://images.unsplash.com/photo-1705672354908-a068661bc81d?w=600&h=300&fit=crop&auto=format"
              alt="Coastal sitting area with ocean view" loading="lazy" decoding="async" className="w-full h-44 object-cover rounded-lg bg-[#d6cdb8]" />
          </div>
        </div>
      </section>

      <section className="bg-[#ede8df] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-2 font-medium">{a.valuesTag}</p>
            <h2 className="font-display text-4xl text-[#1b4d6e]">{a.valuesTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 border border-[#d6cdb8] hover:shadow-md transition-shadow">
                <span className="text-3xl" aria-hidden="true">{v.icon}</span>
                <h3 className="font-display text-lg text-[#1b4d6e] mt-4 mb-2">{v.title}</h3>
                <p className="text-sm text-[#6b6355] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-2 font-medium">{a.teamTag}</p>
          <h2 className="font-display text-4xl text-[#1b4d6e]">{a.teamTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {a.team.map((member, i) => (
            <div key={member.name} className="flex gap-5 items-start bg-white border border-[#d6cdb8] rounded-lg p-6 hover:shadow-md transition-shadow">
              <img src={teamImgs[i]} alt={member.name} className="w-16 h-16 rounded-full object-cover shrink-0 bg-[#d6cdb8]" />
              <div>
                <p className="font-display text-lg text-[#1b4d6e]">{member.name}</p>
                <p className="text-xs text-[#4a8fa3] font-medium uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-sm text-[#6b6355] leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1b4d6e] py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="font-display text-3xl text-white mb-3">{a.ctaTitle}</p>
          <p className="text-[#a8bdc9] text-sm mb-6">{a.ctaDesc}</p>
          <button onClick={() => onNavigate("contact")}
            className="bg-[#4a8fa3] hover:bg-white hover:text-[#1b4d6e] text-white font-medium px-8 py-3 rounded transition-all text-sm">
            {a.ctaBtn}
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}
