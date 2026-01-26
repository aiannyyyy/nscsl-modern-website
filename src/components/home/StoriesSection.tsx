import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  fullContent: string;
  isVideo?: boolean;
  videoSrc?: string;
}

export default function StoriesSection() {
  const { isDark } = useTheme();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: 1,
      title: "Baby's Life Saved Through Early Screening",
      excerpt: "Thanks to early detection through newborn screening, a rare metabolic disorder was identified and treated before it could become life-threatening..",
      image: "/images/impnbs.jpg",
      fullContent: "Thanks to early detection through newborn screening, Janelle was diagnosed with Congenital Hypothyroidism, a condition that could have severely impacted her development if untreated. Her parents share their journey of learning about newborn screening and how it changed her life. Early intervention allowed Janelle to grow up healthy and thrive, eventually becoming a successful engineer. In contrast, JR, who was diagnosed much later at the age of 12, faced significant challenges due to delayed treatment. His story highlights the profound impact of early diagnosis and management in ensuring better outcomes for children with similar conditions."
    },
    {
      id: 2,
      title: "Celebrating 11 Years of Newborn Screening Southern Luzon",
      excerpt: "Celebrating 11 Years of Newborn Screening Southern Luzon is a momentous occasion ...",
      image: "/images/11yrs.PNG",
      isVideo: true,
      videoSrc: "/images/NSCSL AD 2024.mp4",
      fullContent: "Celebrating 11 Years of Newborn Screening Southern Luzon is a momentous occasion that highlights the remarkable journey of early detection and intervention in the region. For over a decade, we have been committed to providing vital newborn screening services that ensure the health and well-being of infants in Southern Luzon. Through our dedicated efforts, we've helped detect life-threatening conditions early, giving newborns the best possible chance for a healthy life. This achievement reflects the hard work, dedication, and collaboration of healthcare professionals and families who have been part of this journey. As we celebrate this significant milestone, we are not only reflecting on the progress we've made but also looking forward to the future with optimism and resolve. The past 11 years have been filled with challenges, growth, and success, but there is still much more to accomplish. Together with our partners and stakeholders, we remain committed to expanding our services, reaching more families, and ensuring that every newborn in Southern Luzon receives the critical care they need. Here's to 11 years of progress, and to many more years of making a lasting difference in the lives of newborns and their families."
    }
  ];

  return (
    <>
      <section className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Newborn Screening Stories
            </h3>
            <p className={`text-lg max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Read inspiring stories and updates related to Newborn Screening across Southern Luzon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stories.map((story) => (
              <div 
                key={story.id}
                className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h5 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {story.title}
                  </h5>
                  <p className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {story.excerpt}
                  </p>
                  <button
                    onClick={() => setSelectedStory(story)}
                    className={`text-white px-6 py-2 rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-[#063FA1] hover:bg-[#052d7a]'
                    }`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className={`rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 border-b p-4 flex justify-between items-center transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}>
              <h5 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {selectedStory.title}
              </h5>
              <button
                onClick={() => setSelectedStory(null)}
                className={`text-2xl transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {selectedStory.isVideo && selectedStory.videoSrc ? (
                <video 
                  className="w-full rounded-lg mb-4" 
                  autoPlay 
                  loop 
                  muted
                  controls
                >
                  <source src={selectedStory.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={selectedStory.image} 
                  alt={selectedStory.title}
                  className="w-full rounded-lg mb-4"
                />
              )}
              <p className={`leading-relaxed text-justify whitespace-pre-line ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {selectedStory.fullContent}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}