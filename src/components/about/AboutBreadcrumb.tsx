import { useTheme } from '../../context/ThemeContext';

export default function AboutBreadcrumb() {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            About Newborn Screening Center Southern Luzon
          </h1>
        </div>
      </div>
    </section>
  );
}