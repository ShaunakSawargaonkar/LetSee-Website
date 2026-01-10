import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo_color.png';

export default function Footer() {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { label: 'Facebook', icon: Facebook, href: '#' },
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Instagram', icon: Instagram, href: '#' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/app-showcase', label: 'App' }
  ];

  const legalLinks = [
    { to: '/terms', label: 'Terms' },
    { href: '#', label: 'Privacy' },
    { href: '#', label: 'Contact' }
  ];

  return (
    <footer className="bg-dark-bg text-white mt-20 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* GRID UPDATE:
           - grid-cols-2: Sets a 2-column layout for mobile (instead of 1).
           - lg:grid-cols-4: Keeps the 4-column layout for desktop.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* BRANDING SECTION */}
          {/* col-span-2: Spans full width on mobile so the logo text isn't squashed */}
          {/* lg:col-span-1: Returns to 1 column width on desktop */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Letsee Logo" 
                className="w-10 h-10 object-contain" 
              />
              <h3 className="text-xl font-bold">Letsee</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              Empowering visually impaired with assistive technology.
            </p>
          </div>

          {/* LINKS SECTION */}
          {/* Takes up 1 column naturally, sitting on the Left side in mobile view */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-gray-700 hover:text-primary transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* LEGAL SECTION */}
          {/* Takes up 1 column naturally, sitting on the Right side in mobile view */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Legal</h4>
            <nav className="flex flex-col space-y-2">
              {legalLinks.map((link) => (
                link.to ? (
                  <Link 
                    key={link.label} 
                    to={link.to} 
                    className="text-gray-700 hover:text-primary transition-colors text-sm w-fit"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-gray-700 hover:text-primary transition-colors text-sm w-fit"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* FOLLOW US SECTION */}
          {/* col-span-2: Spans full width on mobile for easier tapping */}
          {/* lg:col-span-1: Returns to 1 column width on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-lg mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="bg-gray-700 p-2 rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300" 
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm text-center md:text-left">
              © {year} Letsee. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-1">
              Made with <span className="text-primary animate-pulse">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}