import { Leaf, Activity, FlaskConical, GraduationCap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const skills = [
  { 
    Icon: Leaf, 
    title: 'Phytomedicine & Herbal Care', 
    text: 'Expertise in medicinal plants, safe herbal preparations, and clinical applications.' 
  },
  { 
    Icon: Activity, 
    title: 'Clinical Consultation', 
    text: 'Traditional diagnostic principles, nutrition, and holistic patient assessment.' 
  },
  { 
    Icon: FlaskConical, 
    title: 'Medicinal Plant Research', 
    text: 'Scientific investigation of biological activities and therapeutic potential.' 
  },
  { 
    Icon: GraduationCap, 
    title: 'Academic Leadership', 
    text: 'University teaching, curriculum development, and mentoring future practitioners.' 
  },
];

export function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 bg-white border-t border-forest-900/5">
      <div className="container-page">
        <div ref={ref} className={`max-w-3xl mx-auto text-center ${visible ? 'is-visible' : ''} reveal`}>
          <span className="eyebrow mx-auto"><Activity className="h-3.5 w-3.5" /> Professional Skills</span>
          <h2 className="mt-5 section-title">Areas of Expertise</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ Icon, title, text }) => (
            <div key={title} className="card p-6 text-center hover:shadow-card transition-shadow bg-cream-50">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sage-100 text-forest-700">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">{title}</h3>
              <p className="mt-2 text-sm text-forest-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}