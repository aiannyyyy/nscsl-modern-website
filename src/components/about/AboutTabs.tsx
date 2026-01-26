import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Watermark from '../Watermark';
import AboutTab from './tabs/AboutTab';
import FacilitiesTab from './tabs/FacilitiesTab';
import WhyScreenTab from './tabs/WhyScreenTab';
import FAQTab from './tabs/FAQTab';

export default function AboutTabs() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Newborn Screening' },
    { id: 'facilities', label: 'Newborn Screening Facilities (Region 4A)' },
    { id: 'why', label: 'Why screen your baby?' },
    { id: 'faq', label: 'F.A.Q' }
  ];

  return (
    <div className="relative">
      <Watermark />

      <div className={`relative z-10 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Tab Navigation */}
        <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-medium transition-all duration-300 rounded-t-lg ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-yellow-500 text-gray-900'
                        : 'bg-[#063FA1] text-white'
                      : isDark
                        ? 'text-gray-300 hover:text-yellow-400'
                        : 'text-gray-700 hover:text-[#063FA1]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'facilities' && <FacilitiesTab />}
          {activeTab === 'why' && <WhyScreenTab />}
          {activeTab === 'faq' && <FAQTab />}
        </div>
      </div>
    </div>
  );
}