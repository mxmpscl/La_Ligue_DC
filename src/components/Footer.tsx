import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-bg py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/Logo noir.svg" alt="La Ligue" className="h-8 w-auto invert" />
        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/la.ligue/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@la.ligue" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center justify-center w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
          <a href="https://facebook.com/laliguemedia/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/company/liguemedia/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-bg/50">
          © {new Date().getFullYear()} La Ligue. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
