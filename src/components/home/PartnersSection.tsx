import { useTheme } from '../../context/ThemeContext';

export default function PartnersSection() {
  const { isDark } = useTheme();

  const partners = [
    { name: 'NSRC', logo: '/images/nsrc.jpg', url: 'https://newbornscreening.ph/' },
    { name: 'DOH CHD', logo: '/images/dohchd.jpg', url: 'https://ro4a.doh.gov.ph/' },
    { name: 'DMMC', logo: '/images/dmmc.jpg', url: 'https://dmmcihs.edu.ph/18/' },
    { name: 'DOH', logo: '/images/doh.png', url: 'https://doh.gov.ph/' },
    { name: 'NSC CC', logo: '/images/continuity.jpg', url: '#' }
  ];

  return (
    <section className={`py-16 px-4 transition-all duration-300 ${
      isDark
        ? 'bg-gray-800'
        : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>Our Partners</h2>
          <p className={`${
            isDark ? 'text-gray-300' : 'text-slate-600'
          }`}>Trusted organizations working together for better health outcomes</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group h-32 w-32 flex items-center justify-center rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gray-900 border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
              }`}
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`max-h-24 max-w-24 object-contain transition-all duration-300 ${
                  isDark
                    ? 'grayscale group-hover:grayscale-0 group-hover:brightness-110'
                    : 'grayscale group-hover:grayscale-0'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}