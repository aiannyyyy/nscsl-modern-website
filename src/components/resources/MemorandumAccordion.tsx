import { useState } from 'react';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { getRecentMemos } from '../../data/memorandumsData';

interface MemorandumAccordionProps {
  onViewAll: () => void;
}

export default function MemorandumAccordion({ onViewAll }: MemorandumAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const recentMemos = getRecentMemos(5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-[#063FA1] dark:text-yellow-400" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Memorandums
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
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 space-y-3">
          {recentMemos.map((memo, index) => (
            <div
              key={memo.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 min-w-[30px]">
                {index + 1}.
              </span>
              <div className="flex-1">
                <span className="inline-block bg-[#063FA1] dark:bg-yellow-500 text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-semibold mb-2">
                  {memo.memoId}
                </span>
                <a href={memo.file} target="_blank" rel="noopener noreferrer" className="block text-gray-700 dark:text-gray-300 hover:text-[#063FA1] dark:hover:text-yellow-400 transition-colors group-hover:translate-x-1 duration-200">
                  {memo.title}
                </a>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          <button
            onClick={onViewAll}
            className="w-full mt-4 bg-[#063FA1] dark:bg-yellow-500 hover:bg-[#052d7a] dark:hover:bg-yellow-600 text-white dark:text-gray-900 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            View All Memorandums
          </button>
        </div>
      </div>
    </div>
  );
}