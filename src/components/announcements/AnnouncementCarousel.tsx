import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { announcementsData } from '../../data/announcementsData';

export default function AnnouncementCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcementsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcementsData.length) % announcementsData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (announcementsData.length === 0) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">No announcements available at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-800">
            {/* Slides */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {announcementsData.map((announcement, index) => (
                <div
                  key={announcement.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {announcementsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentSlide + 1} / {announcementsData.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}