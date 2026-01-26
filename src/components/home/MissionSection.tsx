import { useTheme } from '../../context/ThemeContext';

export default function MissionSection() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: 'fas fa-user-shield',
      title: 'Early Detection',
      description: 'Identify treatable conditions in newborns early, giving them a healthier start in life.'
    },
    {
      icon: 'far fa-edit',
      title: 'Accurate Screening',
      description: 'Using advanced technology to ensure precise and reliable test results.',
      active: true
    },
    {
      icon: 'fas fa-signal',
      title: 'Nationwide Impact',
      description: 'Reaching families across the country with comprehensive screening programs.'
    }
  ];

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h6 className={`font-semibold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-[#063FA1]'
            }`}>Empowering Healthy Beginnings</h6>
            <h3 className={`text-3xl lg:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Our Mission in Newborn Screening
            </h3>
          </div>
          <div className="flex items-center">
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our goal is to provide accessible and accurate newborn screening services to every family, ensuring early detection and treatment of congenital disorders. Together, we build a healthier future for the next generation.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                feature.active 
                  ? isDark
                    ? 'bg-yellow-500 text-gray-900 shadow-xl'
                    : 'bg-[#063FA1] text-white shadow-xl'
                  : isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-100'
                    : 'bg-gray-50 hover:bg-white text-gray-800'
              }`}
            >
              <div className={`text-5xl mb-4 ${
                feature.active 
                  ? isDark
                    ? 'text-gray-900'
                    : 'text-white'
                  : isDark
                    ? 'text-yellow-400'
                    : 'text-[#063FA1]'
              }`}>
                <i className={feature.icon}></i>
              </div>
              <h4 className={`text-xl font-bold mb-3 ${
                feature.active
                  ? isDark
                    ? 'text-gray-900'
                    : 'text-white'
                  : isDark
                    ? 'text-white'
                    : 'text-gray-800'
              }`}>
                {feature.title}
              </h4>
              <p className={
                feature.active
                  ? isDark
                    ? 'text-gray-800'
                    : 'text-white/90'
                  : isDark
                    ? 'text-gray-300'
                    : 'text-gray-600'
              }>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}