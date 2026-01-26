// src/components/about/tabs/WhyScreenTab.tsx
import { useTheme } from '../../../context/ThemeContext';

export default function WhyScreenTab() {
  const { isDark } = useTheme();

  const disorders = [
    {
      name: 'Organic Acid Disorders',
      notScreened: ['Developmental delay', 'Breathing problems', 'Neurologic damage', 'Seizures', 'Coma', 'Early death'],
      screened: ['Alive', 'Most will have normal development with episodes of metabolic crisis']
    },
    {
      name: 'Endocrine Disorders',
      notScreened: ['Severe Mental Retardation', 'Death'],
      screened: ['Normal', 'Alive']
    },
    {
      name: 'Fatty Acid Oxidation Disorders',
      notScreened: ['Developmental and physical delay', 'Neurologic impairment', 'Sudden death', 'Coma', 'Seizure', 'Enlargement of the heart & liver', 'Muscle weakness'],
      screened: ['Usually healthy in between episodes of metabolic crises', 'Alive']
    },
    {
      name: 'Hemoglobinopathies',
      notScreened: ['Painful crises', 'Anemia', 'Stroke', 'Multi-organ failure', 'Death'],
      screened: ['Alive', 'Reduces the frequency of painful crises', 'May reduce the need for blood transfusions']
    },
    {
      name: 'Urea Cycle Defects',
      notScreened: ['Seizure', 'Mental Retardation', 'Death'],
      screened: ['Alive', 'Normal Intelligence']
    },
    {
      name: 'Amino Acid Disorders',
      notScreened: ['Mental retardation', 'Coma and death from metabolic crisis'],
      screened: ['Alive', 'Normal growth', 'Normal intelligence for some, learning problems to others']
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Table */}
        <div className="mb-12 overflow-x-auto">
          <table className={`w-full border-collapse transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <caption className={`py-4 text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              The table below shows the potential effects of a screened and managed newborn versus one who did not receive NBS services.
            </caption>
            <thead>
              <tr className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <th className={`border px-4 py-3 text-left font-bold ${
                  isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'
                }`}>
                  Disorder Type
                </th>
                <th className={`border px-4 py-3 text-left font-bold ${
                  isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'
                }`}>
                  If NOT Screened
                </th>
                <th className={`border px-4 py-3 text-left font-bold ${
                  isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'
                }`}>
                  If Screened & Managed
                </th>
              </tr>
            </thead>
            <tbody>
              {disorders.map((disorder, index) => (
                <tr key={index} className={index % 2 === 0 ? (isDark ? 'bg-gray-800' : 'bg-white') : (isDark ? 'bg-gray-750' : 'bg-gray-50')}>
                  <td className={`border px-4 py-3 font-semibold ${
                    isDark ? 'border-gray-600 text-yellow-400' : 'border-gray-300 text-[#063FA1]'
                  }`}>
                    {disorder.name}
                  </td>
                  <td className={`border px-4 py-3 ${
                    isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                  }`}>
                    <ul className="list-disc list-inside space-y-1">
                      {disorder.notScreened.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className={`border px-4 py-3 ${
                    isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                  }`}>
                    <ul className="list-disc list-inside space-y-1">
                      {disorder.screened.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <div className={`py-12 px-8 rounded-xl transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className={`text-sm font-semibold mb-2 uppercase tracking-widest ${
                isDark ? 'text-yellow-400' : 'text-[#063FA1]'
              }`}>
                Need Help?
              </h4>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Have Questions About Newborn Screening? <br /> Get in Touch With Us!
              </h2>
            </div>
            <div className="flex justify-center">
              <a
                href="/contact"
                className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                  isDark
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                    : 'border-2 border-[#063FA1] text-[#063FA1] hover:bg-[#063FA1] hover:text-white'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}