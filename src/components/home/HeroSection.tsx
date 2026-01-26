import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function HeroSection() {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const slides = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={`relative py-16 lg:py-24 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Watermark Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/images/LOGO NEWWWWWWW.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
          opacity: isDark ? 0.02 : 0.04
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className={`text-3xl lg:text-4xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                <span className="text-[#063FA1]">Newborn Screening</span>
              </h3>
              <h3 className={`text-3xl lg:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Southern Luzon
              </h3>
            </div>

            <div className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="text-justify">
                In pursuit of the Department of Health in expanding the coverage of the National Comprehensive Newborn Screening System, the 5th Newborn Screening Center was established. After passing the stages of the selection process, DANIEL O. MERCADO MEDICAL CENTER (DMMC), has been selected by the Department of Health (DOH) and the Newborn Screening Reference Center (NSRC) to be the host institution for NSC in Southern Luzon (REGION IVA) in 2013. Being the newest NSC, personnel underwent extensive training at the NSC-National Institutes of Health in UP Ayala Technohub and NSC-Visayas from May to August 2013. The NSC Southern Luzon is located at 3rd floor, DMMC IHS Building, Mountview Subdivision, Poblacion 3, Tanauan City, Batangas.
              </p>

              {showFullText && (
                <p className="text-justify mt-4">
                  The center had its initial accreditation August 21–22, 2013 and live run for the NBS 6 test September 22, 2013. After running NBS 6 test for 3 years, the center started preparing for the expanded NBS (ENBS) – expansion of floor area, purchase of equipment, and training of personnel. NSC Southern Luzon had its live run for ENBS July 23, 2018. In January 22, 2021, the host institution for NSC Southern Luzon became the DMMC INSTITUTE OF HEALTH SCIENCES, INC.
                </p>
              )}

              <button
                onClick={() => setShowFullText(!showFullText)}
                className={`font-semibold mt-2 hover:underline transition-all hover:scale-105 ${
                  isDark
                    ? 'text-yellow-400 hover:text-yellow-300'
                    : 'text-[#063FA1] hover:text-[#052d7a]'
                }`}
              >
                {showFullText ? 'Read less' : '... Read more'}
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/about" 
                className={`text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg ${
                  isDark
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-[#063FA1] hover:bg-[#052d7a]'
                }`}
              >
                Read More
              </a>
              <a 
                href="/contact" 
                className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  isDark
                    ? 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                    : 'border-2 border-[#063FA1] text-[#063FA1] hover:bg-[#063FA1] hover:text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Images */}
              <div className="relative h-[400px]">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}