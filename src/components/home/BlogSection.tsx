import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Blog{
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
  isCarousel?: boolean;
  carouselImages?: string[];
}

export default function BlogSection() {
  const { isDark } = useTheme();
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);

  const blogs: Blog[] = [
    {
      id: 1,
      title: 'Importance of Newborn Screening',
      description: 'Discover why early detection of certain health conditions through newborn screening is crucial for a baby\'s health and development.',
      image: '/images/importanceofnbs.png',
      content: 'Newborn screening is a vital health program aimed at identifying conditions that can affect a baby\'s long-term health or survival. Early detection allows timely intervention, often preventing severe health outcomes or even death.'
    },
    {
      id: 2,
      title: 'The Screening Process',
      description: 'Learn about the steps involved in newborn screening and what parents can expect during the process.',
      image: '/images/newbornscreeningprocess.png',
      isCarousel: true,
      carouselImages: [
        '/images/1.png',
        '/images/2.png',
        '/images/3.png',
        '/images/4.png',
        '/images/5.png',
        '/images/6.png',
        '/images/7.png',
        '/images/8.png',
        '/images/9.png',
        '/images/10.png',
        '/images/11.png'
      ],
      content: 'The newborn screening process typically involves collecting a small blood sample from the baby\'s heel, which is sent to a laboratory for testing. The process is quick and ensures comprehensive testing for various conditions.'
    }
  ];

  const nextCarouselImage = () => {
    if (!selectedBlog?.carouselImages || selectedBlog.carouselImages.length === 0) return;
    setCurrentCarouselImage((prev) =>
      (prev + 1) % selectedBlog.carouselImages!.length
    );
  };

  const prevCarouselImage = () => {
    if (!selectedBlog?.carouselImages || selectedBlog.carouselImages.length === 0) return;
    setCurrentCarouselImage((prev) =>
      (prev - 1 + selectedBlog.carouselImages!.length) % selectedBlog.carouselImages!.length
    );
  };

  return (
    <>
      <section className={`py-16 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800' 
          : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                  isDark
                    ? 'bg-gray-800'
                    : 'bg-white'
                }`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setSelectedBlog(blog);
                        setCurrentCarouselImage(0);
                      }}
                      className={`opacity-0 group-hover:opacity-100 px-6 py-2 rounded-lg font-semibold transition-all transform scale-90 group-hover:scale-100 ${
                        isDark
                          ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800'
                          : 'bg-white text-[#063FA1]'
                      }`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${
                    isDark
                      ? 'text-white'
                      : 'text-gray-800'
                  }`}>
                    {blog.title}
                  </h4>
                  <p className={`mb-4 ${
                    isDark
                      ? 'text-gray-300'
                      : 'text-gray-600'
                  }`}>
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className={`rounded-xl max-w-4xl w-full max-h-[92vh] transition-colors duration-300 flex flex-col ${
              isDark
                ? 'bg-gray-800'
                : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 border-b p-4 flex justify-between items-center z-10 transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}>
              <h5 className={`text-lg font-bold ${
                isDark
                  ? 'text-white'
                  : 'text-gray-800'
              }`}>
                {selectedBlog.title}
              </h5>
              <button
                onClick={() => setSelectedBlog(null)}
                className={`text-2xl transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(92vh-140px)]">
              {selectedBlog.isCarousel && selectedBlog.carouselImages ? (
                <div className="relative mb-4">
                  <img
                    key={currentCarouselImage}
                    src={selectedBlog.carouselImages[currentCarouselImage]}
                    alt={`Step ${currentCarouselImage + 1}`}
                    className="w-full h-[28rem] object-contain rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevCarouselImage();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <i className="fas fa-chevron-left text-lg"></i>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextCarouselImage();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <i className="fas fa-chevron-right text-lg"></i>
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {selectedBlog.carouselImages.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentCarouselImage(index);
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentCarouselImage ? 'bg-white w-4' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-[28rem] object-contain rounded-lg mb-4"
                />
              )}
              <p className={`text-sm leading-relaxed ${
                isDark
                  ? 'text-gray-300'
                  : 'text-gray-700'
              }`}>
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}