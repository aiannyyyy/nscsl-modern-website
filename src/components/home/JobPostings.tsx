import { useTheme } from '../../context/ThemeContext';

export default function JobPostings() {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className={`font-semibold mb-2 ${
            isDark ? 'text-yellow-400' : 'text-[#063FA1]'
          }`}>Job Postings</h6>
          <h3 className={`text-3xl lg:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Join Our Team <span className="text-4xl">👨‍💻</span>
          </h3>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className={`rounded-xl p-12 border-2 border-dashed transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-300'
          }`}>
            <div className="text-6xl mb-4">🚫</div>
            <p className={`text-lg mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We currently have no job openings available. 
              Please check back later for updates.
            </p>
            <div className="text-4xl mb-6">👀</div>
            <img 
              src="/images/LOGO NEWWWWWWW.jpg" 
              alt="NSCSL Logo" 
              className={`mx-auto w-32 h-auto transition-opacity ${
                isDark ? 'opacity-30' : 'opacity-50'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}