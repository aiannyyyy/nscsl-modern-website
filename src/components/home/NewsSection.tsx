import { useState, useEffect } from 'react';
import { newsData, type NewsItem } from '../../data/newsData';
import { X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function NewsSection() {
  const { isDark } = useTheme();
  const { heading, items } = newsData;
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  const featured = items.find((item) => item.featured) ?? items[0];
  const sideItems = items.filter((item) => item.id !== featured.id);

  // Lock body scroll while modal is open, so only the modal itself scrolls
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <section
        className={`relative py-16 transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-[#063FA1]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-10">
            {heading}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured article */}
            <div className="lg:col-span-2">
              <div className="relative rounded-md overflow-hidden shadow-lg">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-orange-500 text-white text-center px-4 py-2 leading-tight">
                  <div className="text-xl font-bold">{featured.day}</div>
                  <div className="text-sm">{featured.month}</div>
                  <div className="text-sm">{featured.year}</div>
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold mt-5 mb-2">
                {featured.title}
              </h3>
              <p className="text-white/90 mb-3">{featured.excerpt}</p>
              <button
                onClick={() => setSelectedItem(featured)}
                className="inline-flex items-center gap-1 text-white font-bold hover:text-orange-300 transition-colors"
              >
                Read more <span aria-hidden="true">»</span>
              </button>
            </div>

            {/* Side list */}
            <div className="flex flex-col gap-8">
              {sideItems.map((item) => (
                <div key={item.id}>
                  <div
                    className={`relative rounded-md overflow-hidden shadow-lg transition-colors duration-300 ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[180px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-orange-500 text-white text-center px-3 py-1.5 leading-tight">
                      <div className="text-lg font-bold">{item.day}</div>
                      <div className="text-xs">{item.month}</div>
                      <div className="text-xs">{item.year}</div>
                    </div>
                  </div>

                  <h4 className="text-white text-lg font-bold mt-3 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-sm mb-1">
                    by {item.author} &nbsp;&nbsp; {item.excerpt}
                  </p>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1 text-white font-bold text-sm hover:text-orange-300 transition-colors"
                  >
                    Read more <span aria-hidden="true">»</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-24 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`relative rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className={`absolute top-3 right-3 z-10 rounded-full p-2 shadow-md transition-colors ${
                isDark
                  ? 'bg-gray-700/90 hover:bg-gray-700'
                  : 'bg-white/90 hover:bg-white'
              }`}
              aria-label="Close"
            >
              <X className={`w-5 h-5 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />

            <div className="p-6">
              <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {selectedItem.day} {selectedItem.month} {selectedItem.year}
              </div>
              <h3
                className={`text-2xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {selectedItem.title}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                by {selectedItem.author}
              </p>
              <div
                className={`whitespace-pre-line leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {selectedItem.fullContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}