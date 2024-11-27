import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-hidden bg-teal-900 ">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}