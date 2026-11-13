import { GraduationCap, BookOpen, BadgeCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { siteConfig } from '@/config/site';

const degrees = [
  { title: 'Bachelor of Eastern Medicine and Surgery (BEMS)' },
  { title: 'MPhil in Phytomedicine' },
  { title: 'PhD in Eastern Medicine' },
];

const studyAreas = [
  'Head of School of Eastern Medicine, Minhaj University Lahore',
  'Medicinal plant research and biological activities',
  'Clinical practice and integrative care',
  'Academic leadership and curriculum development',
];

export function Qualifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="qualifications" className="relative scroll-mt-20 bg-forest-950 py-20 text-sage-100 sm:py-28 border-t border-forest-800/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="container-page relative">
        <div ref={ref} className={`max-w-3xl ${visible ? 'is-visible' : ''} reveal`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-800/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
            <GraduationCap className="h-3.5 w-3.5" /> Qualifications
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
            Training behind the guidance
          </h2>
          <p className="mt-4 text-sage-200/80">
            {siteConfig.brand.name}'s care is grounded in formal training in Eastern Medicine and
            the study of medicinal plants.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Degrees */}
          <div className="rounded-3xl bg-forest-900/60 p-6 ring-1 ring-forest-700/40 lg:col-span-2">
            <div className="flex items-center gap-2 text-sage-300">
              <GraduationCap className="h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">Education</h3>
            </div>
            <ul className="mt-5 space-y-5">
              {degrees.map((d) => (
                <li key={d.title} className="border-l-2 border-sage-500/40 pl-4">
                  <div className="font-display text-lg font-semibold text-white">{d.title}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of study / Career Highlights */}
          <div className="rounded-3xl bg-forest-900/60 p-6 ring-1 ring-forest-700/40">
            <div className="flex items-center gap-2 text-sage-300">
              <BookOpen className="h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">Career Highlights</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {studyAreas.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-sage-100">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}