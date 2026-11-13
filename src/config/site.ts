export const siteConfig = {
  brand: {
    name: 'Dr. Shafqat Rasool',
    shortName: 'Shafqat',
    role: 'Healthcare & Wellness',
    tagline: 'Professional healthcare and wellness.',
  },
  contact: {
    phone: '+92 300 2707992',
    whatsapp: '923002707992',
    email: 'Sr.Somro@gmail.com',
    address: 'Township, Lahore, Pakistan',
    hours: 'Mon–Sat · 9:00 AM – 7:00 PM PKT',
    mapEmbedQuery: 'Township, Lahore, Pakistan',
  },
  social: {
    instagram: 'https://www.instagram.com/sr.somro?xtok=bHhyeW5qYXphY25u',
    facebook: 'https://www.facebook.com/share/1Mf43jDs3t/',
    linkedin: 'https://www.linkedin.com/in/dr-shafqat-rasool-21086bb8?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
};

export type NavItem = { 
  label: string; 
  href: string; 
  route?: boolean; // <-- Yeh add karein
};


export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];