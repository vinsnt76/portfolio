import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';

// --- Icon component for the Logo ---
const VinnieIcon = ({ className }: { className: string }) => (
  <Briefcase size={20} className={className} />
);

// --- Navigation Items ---
const navItems = [
  { name: 'Welcome', href: 'welcome' },
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
];

// --- Utility for smooth scrolling ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SSR-safe effect to set initial theme and handle scroll
  useEffect(() => {
    // Set initial theme from localStorage or system preference
    const savedTheme = window.localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    // Handle scroll behavior for sticky header
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle logic, now self-contained and SSR-safe
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleLinkClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false); // Close menu on mobile after clicking
  };

  // --- Dynamic Styles based on theme and state ---
  const baseClasses = 'fixed top-4 left-1/2 -translate-x-1/2 p-2 px-3 lg:px-4 flex items-center justify-between z-50 transition-all duration-300 backdrop-blur-md shadow-2xl rounded-full';
  
  const pillStyles = theme === 'dark' 
    ? 'bg-gray-800/80 border border-gray-700/50' 
    : 'bg-white/90 border border-gray-200 shadow-xl';

  const stickyStyles = isSticky ? 'top-2 scale-[0.98]' : 'top-4';
  
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

  return (
    <header className={`${baseClasses} ${pillStyles} ${stickyStyles} max-w-sm lg:max-w-4xl w-full`}>
      {/* 1. Logo / Brand Name */}
      <a 
        href="#welcome" 
        onClick={() => handleLinkClick('welcome')}
        className={`flex items-center space-x-2 text-lg font-bold ${textColor} tracking-tight pr-4`}>
        <VinnieIcon className="text-blue-400" />
        <span>Vinnie Baker</span>
      </a>

      {/* 2. Desktop Navigation Links (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-grow justify-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.href}`}
            onClick={() => handleLinkClick(item.href)}
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${textColor}`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* 3. Right-Side Controls (CTA + Toggle) */}
      <div className="flex items-center space-x-3">
        
        {/* Contact CTA Button */}
        <button
          onClick={() => handleLinkClick('contact')}
          className="bg-white text-gray-900 text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
        >
          Contact
        </button>

        {/* Theme Toggle Button */}
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
            ) : (
                <Moon size={20} className="text-gray-600" />
            )}
        </button>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button 
          className={`lg:hidden p-2 ${textColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-0 pt-24 bg-black/50 backdrop-blur-sm z-40 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)}>
        <nav className={`bg-gray-800 p-4 mx-4 rounded-lg shadow-xl border border-gray-700/50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col space-y-3">
            {[...navItems, { name: 'Contact', href: 'contact' }].map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`}
                  onClick={() => handleLinkClick(item.href)}
                  className="block text-lg text-gray-100 py-2 hover:text-blue-400 transition-colors text-center"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
