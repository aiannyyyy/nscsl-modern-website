import { useState } from 'react';
import { X, BookMarked, Download } from 'lucide-react';
import { brochuresData } from '../../data/brochuresData';
import type { BrochureFile } from '../../data/brochuresData';


interface BrochuresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochuresModal({ isOpen, onClose }: BrochuresModalProps) {
  const [selectedCategory, setSelectedCategory] = useState(brochuresData[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = brochuresData.find(cat => cat.id === selectedCategory);

  // Normalize files: either multiple files or single file
  const currentItems: BrochureFile[] = currentCategory
    ? currentCategory.files || (currentCategory.file ? [{ label: currentCategory.title, file: currentCategory.file }] : [])
    : [];

  const filteredItems = currentItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen px-4 py-6">
        <div
          className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl mx-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-gray-900 dark:to-gray-800 text-white p-4 rounded-t-xl z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                <h2 className="text-xl font-bold">Brochures, Manuals & Guidebooks</h2>
              </div>
              <button
                onClick={onClose}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search brochures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Category Navigation */}
          <div className="sticky top-[100px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 z-10">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {brochuresData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <BookMarked className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {searchQuery 
                    ? 'No brochures found matching your search.' 
                    : 'No brochures available.'}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all group"
                  >
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 min-w-[24px]">
                      {index + 1}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                        {item.label}
                      </p>
                    </div>
                    <a 
                      href={item.file} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 bg-[#063FA1] dark:bg-yellow-500 hover:bg-[#052d7a] dark:hover:bg-yellow-600 text-white dark:text-gray-900 px-3 py-1.5 rounded-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Open</span>
                    </a>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
              Showing {filteredItems.length} brochure{filteredItems.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
