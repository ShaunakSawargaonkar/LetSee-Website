import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'Facebook', icon: Facebook, href: '#' },
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-dark-bg text-white mt-20 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4"><span className="text-3xl">👁️</span><h3 className="text-xl font-bold">Let's See</h3></div>
            <p className="text-gray-300">Empowering visually impaired with assistive technology.</p>
          </div>
          <nav aria-label="Quick links"><h4 className="font-bold text-lg mb-4 text-primary">Links</h4><ul className="space-y-2 list-none p-0 m-0">
            {[{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/app-showcase',label:'App'},{to:'/donate',label:'Donate'}].map(l=><li key={l.to}><Link to={l.to} className="text-gray-300 hover:text-primary transition-colors">{l.label}</Link></li>)}
          </ul></nav>
          <nav aria-label="Legal"><h4 className="font-bold text-lg mb-4 text-primary">Legal</h4><ul className="space-y-2 list-none p-0 m-0">
            {[{to:'/terms',label:'Terms'},{href:'#',label:'Privacy'},{href:'#',label:'Contact'}].map(l=>(l.to ? <li key={l.label}><Link to={l.to} className="text-gray-300 hover:text-primary transition-colors">{l.label}</Link></li>:<li key={l.label}><a href={l.href} className="text-gray-300 hover:text-primary transition-colors">{l.label}</a></li>))}
          </ul></nav>
          <div><h4 className="font-bold text-lg mb-4 text-primary">Follow</h4><div className="flex gap-4">{links.map(l=>{const Icon=l.icon;return <a key={l.label} href={l.href} className="text-gray-300 hover:text-primary" aria-label={l.label}><Icon size={24}/></a>})}</div></div>
        </div>
        <div className="border-t border-gray-700 pt-8"><div className="flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-gray-400 text-sm">© {year} Let's See. All rights reserved. Made with <span className="text-primary">♥</span></p></div></div>
      </div>
    </footer>
  );
}
