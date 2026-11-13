import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Leaf, Stethoscope, FlaskConical, Star, Users } from 'lucide-react';
import { ConsultNowButton } from '@/components/ConsultNowButton';
import { siteConfig } from '@/config/site';
import heroImg from '../assets/hero.jpg';

const servicesTeaser = [
  { Icon: Stethoscope, title: 'Eastern Medicine', text: 'Clinical consultations grounded in traditional Eastern practice.' },
  { Icon: Leaf, title: 'Phytomedicine', text: 'Scientific research and safe application of medicinal plants.' },
  { Icon: FlaskConical, title: 'Plant Research', text: 'Investigating the biological activities and therapeutic potential of herbs.' },
  { Icon: GraduationCap, title: 'Health Education', text: 'Academic leadership, university teaching, and curriculum development.' },
];

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = progress * (2 - progress);
            const currentVal = easeOut * end;
            setCount(Number.isInteger(end) ? Math.floor(currentVal) : parseFloat(currentVal.toFixed(1)));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Home() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-cream-50" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 -z-10 h-80 w-80 rounded-full bg-forest-100/60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grain [background-size:22px_22px]" />

      <div className="container-page pt-10 pb-20 sm:pt-16 lg:pt-24">
        
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Left Side */}
          <div className="animate-fade-up">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-500" /> Head of School of Eastern Medicine
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-forest-900 sm:text-5xl lg:text-6xl">
              Bridging traditional healing with <span className="text-forest-600">modern science</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-700">
              I'm Dr. {siteConfig.brand.shortName}, an academic and practitioner at Minhaj University Lahore. 
              I offer clinical consultations in Eastern Medicine and Phytomedicine, focusing on evidence-based 
              herbal care, medicinal plant research, and personalised wellness support.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ConsultNowButton />
            </div>

                        <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-sage-100 text-forest-950 ring-1 ring-forest-900/5">
                    <Users className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <div className="text-sm">
                {/* Changed to yellow-400 */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-forest-600">Trusted by patients and students</p>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="relative animate-fade-in [animation-delay:120ms] lg:mt-2 w-full">
            <div className="relative w-full h-[460px] sm:h-[520px]">
              <div className="overflow-hidden rounded-[2.5rem] bg-sage-100 shadow-card ring-1 ring-forest-900/5 h-full w-full">
                <img 
                  src={heroImg} 
                  alt="Dr. Shafqat Rasool" 
                  className="h-full w-full object-cover" 
                  loading="eager" 
                />
              </div>
            </div>
          </div>
          
        </div>

        {/* Stats band - Text changed to PURE WHITE */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-forest-950 p-6 shadow-card ring-1 ring-forest-800/50 sm:grid-cols-4 sm:gap-8 sm:p-8">
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp end={3} /></div>
            <div className="mt-1 text-sm text-white/80">Degrees held</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp end={150} suffix="+" /></div>
            <div className="mt-1 text-sm text-white/80">Consultations</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp end={5} suffix=" Yrs" /></div>
            <div className="mt-1 text-sm text-white/80">Experience</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl font-semibold text-white sm:text-4xl"><CountUp end={3} suffix="+" /></div>
            <div className="mt-1 text-sm text-white/80">Research Papers</div>
          </div>
        </div>
      </div>

      {/* Services teaser */}
      <div className="container-page pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesTeaser.map(({ Icon, title, text }) => (
            <div key={title} className="card card-hover p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-100 text-forest-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">{title}</h3>
              <p className="mt-2 text-sm text-forest-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}