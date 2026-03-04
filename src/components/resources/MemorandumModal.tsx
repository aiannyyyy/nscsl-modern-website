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
    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center px-4 pt-20 pb-6" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-6xl max-h-full flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-gray-900 dark:to-gray-800 text-white p-4 rounded-t-xl flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <h2 className="text-xl font-bold">All Memorandums</h2>
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
            placeholder="Search memorandums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        {/* Year Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={goToPreviousYear}
              disabled={!canGoPrevious}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
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
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Content - scrollable */}
        <div className="p-4 overflow-y-auto flex-1">
          {filteredMemos.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {searchQuery ? 'No memorandums found matching your search.' : 'No memorandums available for this year.'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredMemos.map((memo, index) => (
                <div
                  key={memo.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all group"
                >
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 min-w-[24px]">
                    {index + 1}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 px-2 py-0.5 rounded text-xs font-semibold mb-1">
                      {memo.memoId}
                    </span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                      {memo.title}
                    </p>
                  </div>
                  <a
                    href={memo.file}
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
            Showing {filteredMemos.length} memorandum{filteredMemos.length !== 1 ? 's' : ''} for {selectedYear}
          </div>
        </div>
      </div>
    </div>
  );
}