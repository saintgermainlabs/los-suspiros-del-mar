import { useEffect, useState } from "react";
import { LanguageProvider, useLang } from "./LanguageContext";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export type Page = "home" | "rooms" | "experiences" | "gallery" | "about" | "contact";

export interface BookingQuery {
  checkin: string;
  checkout: string;
  guests: string;
  roomIndex: string; // "" = any, otherwise index into roomOptions
}

const pageTitles: Record<Page, (tr: ReturnType<typeof useLang>["tr"]) => string> = {
  home: (tr) => `${tr.nav.home} | Los Suspiros del Mar`,
  rooms: (tr) => `${tr.nav.rooms} | Los Suspiros del Mar`,
  experiences: (tr) => `${tr.nav.experiences} | Los Suspiros del Mar`,
  gallery: (tr) => `${tr.nav.gallery} | Los Suspiros del Mar`,
  about: (tr) => `${tr.nav.about} | Los Suspiros del Mar`,
  contact: (tr) => `${tr.nav.contact} | Los Suspiros del Mar`,
};

function Shell() {
  const [page, setPage] = useState<Page>("home");
  const [booking, setBooking] = useState<BookingQuery | null>(null);
  const { tr } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  useEffect(() => {
    document.title = pageTitles[page](tr);
  }, [page, tr]);

  const goToContactWithBooking = (b: BookingQuery) => {
    setBooking(b);
    setPage("contact");
  };

  return (
    <div className="min-h-screen">
      <Nav current={page} onNavigate={setPage} />
      {page === "home" && <Home onNavigate={setPage} onBook={goToContactWithBooking} />}
      {page === "rooms" && <Rooms onNavigate={setPage} />}
      {page === "experiences" && <Experiences onNavigate={setPage} />}
      {page === "gallery" && <Gallery onNavigate={setPage} />}
      {page === "about" && <About onNavigate={setPage} />}
      {page === "contact" && <Contact onNavigate={setPage} initialBooking={booking} />}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  );
}
