import { useTheme } from '../../context/ThemeContext';

export default function ContactSection() {
  const { isDark } = useTheme();

  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@nscsl.com.ph';
  };

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark
        ? 'bg-gradient-to-r from-gray-900 to-gray-800'
        : 'bg-gradient-to-r from-[#063FA1] to-[#052d7a]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h6 className={`font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-white/80'
            }`}>Need Help?</h6>
            <h3 className={`text-3xl lg:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-white'
            }`}>
              Contact Us!
            </h3>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address"
                className={`flex-1 min-w-[250px] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  isDark
                    ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-yellow-400'
                    : 'bg-white text-gray-900 placeholder-gray-500 focus:ring-white'
                }`}
              />
              <button
                onClick={handleEmailClick}
                className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg ${
                  isDark
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                    : 'bg-white text-[#063FA1] hover:bg-gray-100'
                }`}
              >
                Email Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}