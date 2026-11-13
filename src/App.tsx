import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './sections/Home';
import {About} from './sections/About';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Qualifications } from './sections/Qualifications';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="home"><Home /></section>
        
        <section id="about">
          <div className="bg-[#e5e7eb] border-b border-forest-900/5 py-8 text-center">
            <span className="eyebrow mx-auto">About Us</span>
            <h1 className="mt-4 font-display text-4xl font-semibold text-forest-900">Meet Dr. Shafqat Rasool</h1>
            <p className="mt-3 text-forest-600 max-w-xl mx-auto px-4">Eastern Medicine & Phytomedicine Practitioner</p>
          </div>
          <About />
          <Skills />
        </section>
        
        <section id="services"><Services /></section>
        <section id="qualifications"><Qualifications /></section>
        <section id="contact"><ContactPage /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;