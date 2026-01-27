import { useState } from 'react'
import { ChevronDown, Image as ImageIcon, ExternalLink } from 'lucide-react'
import { postersData } from '../../data/postersData'

export default function PostersAccordion() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <ImageIcon className="w-6 h-6 text-[#063FA1] dark:text-yellow-400" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Posters
          </span>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0">
          <ol className="space-y-3">
            {postersData.map((poster, index) => (
              <li
                key={poster.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
              >
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 min-w-[30px]">
                  {index + 1}.
                </span>

                <div className="flex-1">
                  {/* Multiple files (ex: English / Filipino) */}
                  {poster.files ? (
                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{poster.title}</span>
                      <span className="mx-2 text-gray-400">│</span>

                      {poster.files.map((file, idx) => (
                        <span key={idx}>
                          <a
                            href={file.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#063FA1] dark:text-yellow-400 hover:underline font-medium"
                          >
                            {file.label}
                          </a>

                          {idx < poster.files.length - 1 && (
                            <span className="mx-2 text-gray-400">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                  ) : (
                    /* Single file */
                    <a
                      href={poster.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-[#063FA1] dark:hover:text-yellow-400 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      {poster.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
