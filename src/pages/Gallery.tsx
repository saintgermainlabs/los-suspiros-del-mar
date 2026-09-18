import { useState, useEffect, useRef } from "react";
import type { Page } from "../App";
import Footer from "../components/Footer";
import { useLang } from "../LanguageContext";
import { photos } from "../galleryData";
import type { GalleryCategory, GalleryPhoto } from "../galleryData";

function Lightbox({
  photo,
  all,
  onClose,
  onPrev,
  onNext,
  labels,
}: {
  photo: GalleryPhoto;
  all: GalleryPhoto[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  labels: { close: string; prev: string; next: string };
}) {
  const lang = useLang().lang;
  const idx = all.findIndex((p) => p.id === photo.id);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt[lang]}
    >
      {/* Close */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label={labels.close}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      {idx > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label={labels.prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="max-w-4xl w-full mx-12" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.url}
          alt={photo.alt[lang]}
          className="w-full max-h-[80vh] object-contain rounded"
        />
        <p className="text-white/50 text-sm text-center mt-3">
          {photo.alt[lang]} · {idx + 1} / {all.length}
        </p>
      </div>

      {/* Next */}
      {idx < all.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label={labels.next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function Gallery({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const { tr, lang } = useLang();
  const g = tr.gallery;
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  const filterKeys: { key: GalleryCategory; label: string }[] = [
    { key: "all", label: g.filters.all },
    { key: "beach", label: g.filters.beach },
    { key: "rooms", label: g.filters.rooms },
    { key: "terrace", label: g.filters.terrace },
  ];

  const handlePrev = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    if (idx > 0) setLightbox(filtered[idx - 1]);
  };

  const handleNext = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    if (idx < filtered.length - 1) setLightbox(filtered[idx + 1]);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-72 md:h-96 bg-[#1b4d6e] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1785416611427-e29c1f9dbeda?w=1600&h=600&fit=crop&auto=format"
          alt="Vibrant orange sunset over the ocean"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4d6e]/30 to-[#1b4d6e]/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs uppercase tracking-widest text-[#4a8fa3] mb-3 font-medium">{g.tag}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-3">{g.heroTitle}</h1>
          <p className="text-[#a8bdc9] max-w-md mx-auto">{g.heroSub}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f4ef" />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterKeys.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a8fa3] ${
                active === key
                  ? "bg-[#1b4d6e] text-white"
                  : "bg-white border border-[#d6cdb8] text-[#6b6355] hover:border-[#4a8fa3] hover:text-[#1b4d6e]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="block w-full break-inside-avoid group relative overflow-hidden rounded-lg bg-[#d6cdb8] cursor-zoom-in"
            >
              <img
                src={photo.thumb}
                alt={photo.alt[lang]}
                loading="lazy"
                decoding="async"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1b4d6e]/0 group-hover:bg-[#1b4d6e]/30 transition-colors flex items-center justify-center">
                <svg
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-[#6b6355] mt-10 italic">
          {filtered.length} {active === "all" ? (lang === "en" ? "photos" : "fotos") : (lang === "en" ? "photos in this category" : "fotos en esta categoría")}
        </p>
      </section>

      {lightbox && (
        <Lightbox
          photo={lightbox}
          all={filtered}
          onClose={() => setLightbox(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          labels={{ close: g.lightboxClose, prev: g.lightboxPrev, next: g.lightboxNext }}
        />
      )}

      <Footer onNavigate={onNavigate} />
    </main>
  );
}
