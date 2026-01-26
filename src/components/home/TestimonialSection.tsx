import { useTheme } from '../../context/ThemeContext';

export default function TestimonialSection() {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-950 to-gray-900'
        : 'bg-gradient-to-br from-[#063FA1] to-[#052d7a]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl transition-all duration-300 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/10'
          }`}>
            <i className={`fas fa-quote-left text-6xl mb-6 ${
              isDark ? 'text-yellow-400/30' : 'text-white/30'
            }`}></i>
            <blockquote className={`text-xl lg:text-2xl font-light leading-relaxed mb-8 ${
              isDark ? 'text-gray-100' : 'text-white'
            }`}>
              Newborn screening is a public health intervention that involves a simple blood test used to identify
              many life-threatening genetic illnesses before any symptoms begin.
            </blockquote>
            <div className={`border-t pt-6 ${
              isDark ? 'border-white/10' : 'border-white/20'
            }`}>
              <h3 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-yellow-400' : 'text-white'
              }`}>Lucille Roybal-Allard</h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-white/80'
              }`}>Example City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}