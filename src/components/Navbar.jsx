import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_color.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/app-showcase', label: 'App' },
  ];

  const handleKeyDown = (e) => { if (e.key === 'Escape') setIsOpen(false); };

  return (
    <>
      <a href="#main-content" className="skip-to-main">Skip to main</a>
      <header className="sticky top-0 z-50 w-full shadow-lg" style={{ backgroundColor: '#1A1A1A', borderBottom: '3px solid #FCB853' }}>
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4" aria-label="Main" onKeyDown={handleKeyDown}>
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 focus-visible:outline-offset-2 rounded-lg flex-shrink-0" aria-label="Letsee">
              <img src={logo} alt="Letsee Logo" className="w-12 h-12 object-contain flex-shrink-0" />
              <div><span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">Letsee</span></div>
            </Link>
            <ul className="hidden md:flex gap-2 list-none m-0 p-0">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 focus-visible:outline-offset-2" onMouseEnter={(e) => e.target.style.backgroundColor = '#FCB853'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <motion.button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 rounded-lg" style={{ backgroundColor: '#FCB853' }} aria-label={isOpen ? 'Close' : 'Open'} aria-expanded={isOpen} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            {isOpen && (
              <div className="md:hidden mt-4 pb-4" style={{ borderTop: '2px solid #FCB853' }}>
                <ul className="flex flex-col gap-2 list-none m-0 p-0">
                  {navLinks.map(link => (
                    <li key={link.to}>
                      <Link to={link.to} onClick={() => setIsOpen(false)} className="block w-full text-left text-white font-semibold px-4 py-3 rounded-lg transition-all" onMouseEnter={(e) => e.target.style.backgroundColor = '#FCB853'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </nav>
      </header>
    </>
  );
}
