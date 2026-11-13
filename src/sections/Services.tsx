import { Stethoscope, Leaf, HeartPulse, Droplet, MessageSquare, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  { Icon: Stethoscope, title: 'Eastern Medicine Consultation', text: 'Individual consultations to discuss your health concerns and explore appropriate care options within Eastern Medicine.', duration: '60 min consultation', features: ['Health history review', 'Care approach discussion', 'Guidance on next steps'] },
  { Icon: Leaf, title: 'Phytomedicine Consultation', text: 'Guidance related to medicinal plants and herbal preparations, with appropriate attention to safety and potential interactions.', duration: '60 min consultation', features: ['Herbal preparation guidance', 'Safety & interaction review', 'Usage & dosage discussion'] },
  { Icon: HeartPulse, title: 'Personalized Wellness Guidance', text: 'Individualised health and lifestyle guidance based on your needs, routine, and personal circumstances.', duration: '45 min consultation', features: ['Lifestyle review', 'Personalised guidance', 'Follow-up check-in'] },
  { Icon: Droplet, title: 'Hijama (Cupping Therapy)', text: 'Cupping therapy offered after a suitability assessment, with appropriate hygiene and safety practices followed throughout.', duration: 'By appointment', features: ['Suitability assessment', 'Hygiene & safety protocol', 'Aftercare guidance'] },
  { Icon: MessageSquare, title: 'General Health Consultation', text: 'An opportunity to discuss your concerns and receive guidance within the doctor\'s professional scope.', duration: '45 min consultation', features: ['Open health discussion', 'Scope-appropriate guidance', 'Care direction'] },
];

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="scroll-mt-20 bg-cream-50 py-20 sm:py-28 border-t border-forest-900/5">
      <div className="container-page">
        <div ref={ref} className={`mx-auto max-w-3xl text-center ${visible ? 'is-visible' : ''} reveal`}>
          <span className="eyebrow mx-auto"><Leaf className="h-3.5 w-3.5" /> Services</span>
          <h2 className="mt-5 section-title">How we can work together</h2>
          <p className="mt-4 text-forest-700">Consultations in person in Lahore or online. Every service starts with understanding your concerns and what care is appropriate for you.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text, duration, features }) => (
            <article key={title} className="group flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-100 text-forest-700 transition group-hover:bg-forest-700 group-hover:text-sage-200"><Icon className="h-6 w-6" /></span>
                <span className="text-xs font-medium text-forest-500">{duration}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">{title}</h3>
              <p className="mt-2 text-sm text-forest-600 leading-relaxed">{text}</p>
              <ul className="mt-5 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-forest-600"><span className="h-1.5 w-1.5 rounded-full bg-sage-500" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-forest-100 pt-5">
                <span className="text-xs text-forest-500">Request appointment</span>
                <button onClick={scrollToContact} className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 transition hover:text-forest-900">
                  Book Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-forest-500">Sessions available in-person in Lahore and online across Pakistan. Herbal and cupping therapies are provided within the doctor's professional scope and do not replace necessary medical treatment.</p>
      </div>
    </section>
  );
}