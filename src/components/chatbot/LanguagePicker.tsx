import { Globe } from 'lucide-react';

interface LanguagePickerProps {
  onSelect: (lang: 'en' | 'tl') => void;
}

export default function LanguagePicker({ onSelect }: LanguagePickerProps) {
  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-yellow-600 dark:to-yellow-500 text-white p-4 rounded-t-2xl flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg">NSCSL Assistant</h3>
          <p className="text-xs text-white/80">Please select your language</p>
        </div>
      </div>

      {/* Language Selection */}
      <div className="p-6 flex flex-col gap-4">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm font-medium">
          Choose your preferred language / Piliin ang inyong wika
        </p>

        <button
          onClick={() => onSelect('en')}
          className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#063FA1] dark:hover:border-yellow-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all group"
        >
          <span className="text-3xl">🇺🇸</span>
          <div className="text-left">
            <p className="font-bold text-gray-800 dark:text-white group-hover:text-[#063FA1] dark:group-hover:text-yellow-400">
              English
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Continue in English</p>
          </div>
        </button>

        <button
          onClick={() => onSelect('tl')}
          className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#063FA1] dark:hover:border-yellow-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all group"
        >
          <span className="text-3xl">🇵🇭</span>
          <div className="text-left">
            <p className="font-bold text-gray-800 dark:text-white group-hover:text-[#063FA1] dark:group-hover:text-yellow-400">
              Filipino / Tagalog
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Magpatuloy sa Filipino</p>
          </div>
        </button>
      </div>
    </div>
  );
}