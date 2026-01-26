import { useTheme } from '../../context/ThemeContext';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className={`rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 border-b p-6 flex justify-between items-center transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            About NSC Southern Luzon
          </h3>
          <button
            onClick={onClose}
            className={`transition-colors ${
              isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <p className={`leading-relaxed text-justify ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            DMMC INSTITUTE OF HEALTH SCIENCES, INC., the current host facility of NSC SOUTHERN LUZON, is a private institution that was incorporated under the laws of the Republic of the Philippines and registered with the SEC last August 21, 2002. The school was a result of DMMC's (Daniel O. Mercado Medical Center) commitment to provide affordable quality health care through competent and highly skilled medical personnel. With the exodus of qualified health care professionals for greener pastures abroad, the hospital needed to support its manpower complement.
          </p>

          <p className={`leading-relaxed text-justify ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            The management, as part of its strategic directives and long term plan, decided to put up a school to specialize in Nursing and other allied health courses. Its objective is to develop health care professionals who are creative, critical thinkers with Christian values. To achieve this objective, the school will develop and implement a curriculum that is relevant, timely, dynamic, and research-oriented. Together with DMMC, it is the institute's intention to pursue its vision to ensure growth and, more importantly, that this growth truly benefits the people of Tanauan City in particular and Calabarzon in general.
          </p>

          <p className={`leading-relaxed text-justify ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            The management will adopt a culture that fosters integrity, sense of responsibility, and continuous improvement through life-long learning, innovation, and resourcefulness guided by its values of excellence, integrity, collaboration, commitment, and compassion.
          </p>
        </div>

        {/* Footer */}
        <div className={`border-t p-6 transition-colors duration-300 ${
          isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <button
            onClick={onClose}
            className={`w-full px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                : 'bg-[#063FA1] text-white hover:bg-[#052d7a]'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}