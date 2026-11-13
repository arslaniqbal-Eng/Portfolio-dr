import { Quote, Leaf, Sparkles, Compass } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { siteConfig } from '@/config/site';
import portrait from '../assets/doctor.jpg';

// const portrait = 'https://images.pexels.com/photos/15319037/pexels-photo-15319037.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

const values = [
  { Icon: Compass, title: 'Academic Leadership', text: 'Head of the School of Eastern Medicine at Minhaj University Lahore.' },
  { Icon: Leaf, title: 'Plant-Based Tradition', text: 'Guidance grounded in Eastern Medicine and the careful use of medicinal plants.' },
  { Icon: Sparkles, title: 'Rooted in Evidence', text: 'Bridging traditional healthcare knowledge with contemporary scientific evidence.' },
];

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    // Reduced pt-20 to pt-6 so it sits closer to the header
    <section className="relative scroll-mt-20 pt-6 pb-20 sm:pt-10 sm:pb-28">
      <div className="container-page">
        <div ref={ref} className={`grid items-center gap-12 lg:grid-cols-2 ${visible ? 'is-visible' : ''} reveal`}>
          
          {/* Portrait */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-sage-100" />
            <div className="overflow-hidden rounded-[2.5rem] shadow-card ring-1 ring-forest-900/5">
              <img
                src={portrait}
                alt={`${siteConfig.brand.name}, ${siteConfig.brand.role}`}
                className="h-[480px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white p-4 shadow-card ring-1 ring-forest-900/5">
              <div className="font-display text-2xl font-semibold text-forest-700">BEMS · MPhil · PhD</div>
              <div className="text-xs text-forest-500">Eastern Medicine & Phytomedicine</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="eyebrow">
              <Quote className="h-3.5 w-3.5" /> About
            </span>
            <h2 className="mt-5 section-title">Meet {siteConfig.brand.name}</h2>
            
            {/* Added text-justify and hyphens-auto for professional alignment */}
            <div className="mt-5 space-y-4 text-forest-700 leading-relaxed text-justify hyphens-auto">
              <p>
                Dr. {siteConfig.brand.shortName} currently serves as the <strong className="text-forest-900">Head of the School of Eastern Medicine</strong> at Minhaj University Lahore, Pakistan. He holds a Bachelor of Eastern Medicine and Surgery (BEMS), an M.Phil in Phytomedicine, and a PhD in Eastern Medicine.
              </p>
              <p>
                His professional expertise encompasses Eastern Medicine, Herbal Medicine, Phytomedicine, Clinical Consultation, Nutrition, Medicinal Plant Research, and Health Education. Throughout his career, he has contributed to university teaching, academic leadership, curriculum development, clinical practice, research activities, and professional training.
              </p>
              <p>
                His research focuses on exploring the biological activities and therapeutic potential of medicinal plants through scientific investigations. He is passionate about bridging traditional healthcare knowledge with contemporary scientific evidence, mentoring future healthcare professionals, and contributing to the advancement of natural and integrative medicine.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-cream-50 p-4 ring-1 ring-forest-900/5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sage-100 text-forest-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-forest-900">{title}</h4>
                  <p className="mt-1 text-xs text-forest-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}