import { useState } from 'react';
import { X, FileText, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { getYears, getMemosByYear } from '../../data/memorandumsData';

interface MemorandumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MemorandumModal({ isOpen, onClose }: MemorandumModalProps) {
  const years = getYears();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const memos = getMemosByYear(selectedYear);
  const filteredMemos = memos.filter(memo =>
    memo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    memo.memoId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentYearIndex = years.indexOf(selectedYear);
  const canGoPrevious = currentYearIndex > 0;
  const canGoNext = currentYearIndex < years.length - 1;

  const goToPreviousYear = () => {
    if (canGoPrevious) setSelectedYear(years[currentYearIndex - 1]);
  };

  const goToNextYear = () => {
    if (canGoNext) setSelectedYear(years[currentYearIndex + 1]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen px-4 py-8">
        <div
          className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl mx-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-gray-900 dark:to-gray-800 text-white p-6 rounded-t-xl z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8" />
                <h2 className="text-3xl font-bold">All Memorandums</h2>
              </div>
              <button
                onClick={onClose}
                className="hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search memorandums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Year Navigation */}
          <div className="sticky top-[140px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 z-10">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPreviousYear}
                disabled={!canGoPrevious}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="flex-1 overflow-x-auto">
                <div className="flex gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                        selectedYear === year
                          ? 'bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 shadow-lg scale-105'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={goToNextYear}
                disabled={!canGoNext}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {filteredMemos.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {searchQuery ? 'No memorandums found matching your search.' : 'No memorandums available for this year.'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredMemos.map((memo, index) => (
                  <div
                    key={memo.id}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all group"
                  >
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 min-w-[30px]">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <span className="inline-block bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 px-3 py-1 rounded text-sm font-semibold mb-2">
                        {memo.memoId}
                      </span>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">
                        {memo.title}
                      </p>
                    </div>
                    <a href={memo.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#063FA1] dark:bg-yellow-500 hover:bg-[#052d7a] dark:hover:bg-yellow-600 text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-semibold">Open</span>
                    </a>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredMemos.length} memorandum{filteredMemos.length !== 1 ? 's' : ''} for {selectedYear}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}