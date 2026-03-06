import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Accommodations />
        <Gallery />
        <Contact />
        <Location />
      </main>
    </div>
  );
}

