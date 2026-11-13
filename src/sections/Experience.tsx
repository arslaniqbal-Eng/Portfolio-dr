import { Stethoscope, Leaf, HeartPulse, Droplet, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const timeline = [
  {
    Icon: Stethoscope,
    role: 'Eastern Medicine Consultation',
    text: 'Individual consultations to discuss health concerns and appropriate care options within Eastern Medicine.',
  },
  {
    Icon: Leaf,
    role: 'Phytomedicine Practice',
    text: 'Guidance on medicinal plants and herbal preparations, with attention to safety and potential interactions.',
  },
  {
    Icon: HeartPulse,
    role: 'Personalised Wellness Guidance',
    text: 'Individualised health and lifestyle guidance tailored to each patient\'s needs and circumstances.',
  },
  {
    Icon: Droplet,
    role: 'Hijama (Cupping Therapy)',
    text: 'Cupping therapy offered with suitability assessment and appropriate hygiene and safety practices.',
  },
];

const focusAreas = [
  'Eastern Medicine consultations',
  'Phytomedicine & herbal guidance',
  'Personalised wellness guidance',
  'Hijama (cupping therapy)',
  'General health consultation',
  'Lifestyle & daily habits',
];

export function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className={`max-w-3xl ${visible ? 'is-visible' : ''} reveal`}>
          <span className="eyebrow">
            <Calendar className="h-3.5 w-3.5" /> Practice
          </span>
          <h2 className="mt-5 section-title">Areas of practice</h2>
          <p className="mt-4 text-forest-700">
            My practice centres on Eastern Medicine, phytomedicine, and patient-centred wellness —
            offering consultations and care that respect both tradition and patient safety.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Approach */}
          <ol className="relative space-y-8 border-l border-forest-200 pl-8">
            {timeline.map(({ Icon, role, text }) => (
              <li key={role} className="relative">
                <span className="absolute -left-[2.45rem] grid h-10 w-10 place-items-center rounded-2xl bg-sage-100 text-forest-700 ring-4 ring-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-forest-900/5 transition hover:shadow-card">
                  <h3 className="font-display text-lg font-semibold text-forest-900">{role}</h3>
                  <p className="mt-3 text-sm text-forest-600 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Focus areas */}
          <div className="rounded-3xl bg-forest-950 p-8 text-sage-100">
            <h3 className="font-display text-xl font-semibold text-white">What I offer</h3>
            <p className="mt-3 text-sm text-sage-200/80">
              Services provided within my professional scope.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-2xl bg-forest-900/60 px-4 py-3 text-sm ring-1 ring-forest-700/40"
                >
                  <span className="h-2 w-2 rounded-full bg-sage-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
