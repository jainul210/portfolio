import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundOrbs from '@/components/BackgroundOrbs';
export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <BackgroundOrbs />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
