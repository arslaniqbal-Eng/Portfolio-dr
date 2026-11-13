import { siteConfig } from '@/config/site';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Leaf + Medical Cross */}
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-forest-600 to-forest-950 text-white shadow-lg ring-1 ring-forest-900/20">
        <svg 
          viewBox="0 0 24 24" 
          className="h-6 w-6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Leaf Shape */}
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          {/* Leaf vein */}
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          {/* Small medical cross */}
          <path d="M16 10h3M17.5 8.5v3" strokeWidth="2.5" />
        </svg>
      </span>
      
      {/* Text */}
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold">
          {siteConfig.brand.name}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-400 mt-1">
          Healthcare & Wellness
        </span>
      </span>
    </span>
  );
}