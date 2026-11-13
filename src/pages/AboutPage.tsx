import {About} from '@/sections/About'; 
import { Skills } from '@/sections/Skills';
import { Services } from '@/sections/Services';
import { Qualifications } from '@/sections/Qualifications';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Header section - Reduced py-12 to py-8 for less gap */}
           {/* Header - Off-White */}
      <div className="bg-[#e5e7eb] border-b border-forest-900/5 py-8 text-center">
        <span className="eyebrow mx-auto">About Us</span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-forest-900">Meet Dr. Shafqat Rasool</h1>
        <p className="mt-3 text-forest-600 max-w-xl mx-auto px-4">Eastern Medicine & Phytomedicine Practitioner</p>
      </div>
      
      {/* About Section - White */}
      <div className="bg-white">
        <About />
      </div>
      
      {/* Skills Section - Off-White */}
      <div className="bg-[#e5e7eb] border-t border-forest-900/5">
        <Skills />
      </div>
      
      {/* Services Section - White */}
      <div className="bg-white border-t border-forest-900/5">
        <Services />
      </div>    
      <div className="bg-forest-950 border-t border-forest-800/50">
        <Qualifications />
      </div>
    </main>
  );
}