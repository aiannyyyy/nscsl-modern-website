import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    // Show preloader for 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
      isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    } ${isDark ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#063FA1] border-r-[#063FA1] animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-400 border-l-yellow-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/images/LOGO NEWWWWWWW.jpg" 
              alt="Loading" 
              className="w-12 h-12 rounded-lg animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#063FA1]'}`}>
            NSC Southern Luzon
          </h3>
          <div className="flex gap-1">
            <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-yellow-400' : 'bg-[#063FA1]'}`} style={{ animationDelay: '0s' }}></span>
            <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-yellow-400' : 'bg-[#063FA1]'}`} style={{ animationDelay: '0.2s' }}></span>
            <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-yellow-400' : 'bg-[#063FA1]'}`} style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}