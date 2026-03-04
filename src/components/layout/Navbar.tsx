import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/resources', label: 'Resources' },
    { path: '/announcements', label: 'Announcements' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 py-3 ${
        scrolled 
          ? isDark
            ? 'bg-gray-800/95 backdrop-blur-md shadow-2xl'
            : 'bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-md shadow-2xl'
          : isDark
            ? 'bg-gray-800/80 backdrop-blur-md'
            : 'bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center gap-2">
              <img 
                src="/images/dmmc.jpg" 
                alt="DMMC" 
                className="h-10 w-10 rounded-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
              />
              <img 
                src="/images/LOGO NEWWWWWWW.jpg" 
                alt="NSC SL" 
                className="h-10 w-10 rounded-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg transition-all duration-300 group-hover:text-[#063FA1] ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Newborn <span className={`${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>Screening Center</span>
              </span>
              <span className={`text-xs font-semibold transition-all duration-300 ${
                isDark ? 'text-gray-400 group-hover:text-yellow-400' : 'text-gray-600 group-hover:text-[#063FA1]'
              }`}>
                Southern Luzon
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === link.path 
                      ? isDark
                        ? 'text-yellow-400 bg-white/10'
                        : 'text-white bg-[#063FA1]'
                      : isDark
                        ? 'text-gray-300 hover:text-yellow-300 hover:bg-white/5'
                        : 'text-gray-700 hover:text-[#063FA1] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-1 left-4 h-0.5 bg-gradient-to-r transition-all duration-300 ${
                      location.pathname === link.path 
                        ? isDark
                          ? 'from-yellow-400 to-yellow-500 w-12'
                          : 'from-white to-white w-12'
                        : 'from-transparent to-transparent w-0 group-hover:w-12'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Facebook Link - Desktop */}
            <a 
              href="https://www.facebook.com/p/Southern-Luzon-NSC-100064428682142/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-white hover:bg-[#063FA1]'
              }`}
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm font-medium">Follow Us</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-yellow-400/20 hover:bg-yellow-400/30'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="text-yellow-400 w-5 h-5 transition-transform duration-500 hover:rotate-180" />
              ) : (
                <Moon className="text-[#063FA1] w-5 h-5 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${
                isDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-900 hover:bg-gray-200'
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? isDark
                        ? 'bg-yellow-400/20 text-yellow-400'
                        : 'bg-[#063FA1] text-white'
                      : isDark
                        ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-300'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#063FA1]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="https://www.facebook.com/p/Southern-Luzon-NSC-100064428682142/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:bg-white/5 hover:text-yellow-300'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#063FA1]'
                }`}
              >
                <Facebook className="w-4 h-4" />
                Follow Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}