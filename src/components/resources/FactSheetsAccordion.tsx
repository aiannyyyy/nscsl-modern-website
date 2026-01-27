import { useState } from 'react';
import { ChevronDown, BookOpen, ExternalLink } from 'lucide-react';
import { factSheetsData } from '../../data/factSheetsData';

interface FactSheetsAccordionProps {
  onViewAll: () => void;
}

export default function FactSheetsAccordion({ onViewAll }: FactSheetsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get first 3 categories for preview
  const previewCategories = factSheetsData.slice(0, 3);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-[#063FA1] dark:text-yellow-400" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Fact Sheets & Books
          </span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 space-y-4">
          {previewCategories.map((category) => {
            const totalItems = 
              category.categories.doctors.length + 
              category.categories.parentsEnglish.length + 
              category.categories.parentsFilipino.length;

            return (
              <div
                key={category.id}
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {category.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 px-3 py-1 rounded-full font-semibold">
                    {totalItems} files
                  </span>
                </div>
                
                {/* Show sample items */}
                <div className="mt-3 space-y-2">
                  {category.categories.doctors.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                      <a 
                        href={item.file} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#063FA1] dark:hover:text-yellow-400 transition-colors"
                      >
                        {item.title}
                      </a>
                      <span className="text-xs text-gray-500 dark:text-gray-400">(Doctors)</span>
                    </div>
                  ))}
                  {totalItems > 2 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      +{totalItems - 2} more files...
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          <button
            onClick={onViewAll}
            className="w-full mt-4 bg-[#063FA1] dark:bg-yellow-500 hover:bg-[#052d7a] dark:hover:bg-yellow-600 text-white dark:text-gray-900 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            View All Fact Sheets & Books
          </button>
        </div>
      </div>
    </div>
  );
}