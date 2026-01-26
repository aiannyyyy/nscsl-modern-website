import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

export default function FAQTab() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Newborn Screening?',
      answer: 'Newborn Screening (NBS) is a public health program where a few drops of blood are taken from the baby\'s heel for testing to find out if your baby has a congenital disorder that may lead to mental retardation or even death if left untreated.'
    },
    {
      question: 'What is Expanded Newborn Screening (ENBS)?',
      answer: 'The expanded newborn screening program increased the screening panel of disorders from six (6) to twenty-nine.'
    },
    {
      question: 'Why is it important?',
      answer: 'Most babies with metabolic disorders look "normal" at birth. By doing ENBS, metabolic disorders may be detected even before clinical signs and symptoms are present. As a result of this, treatment can be given early to prevent consequences of untreated conditions.'
    },
    {
      question: 'When is it done?',
      answer: 'ENBS is ideally done immediately after 24 hours from birth.'
    },
    {
      question: 'How is it done?',
      answer: 'A few drops of blood are taken from the baby\'s heel, blotted on a special absorbent filter card and then sent to Newborn Screening Center- Southern Luzon.'
    },
    {
      question: 'Who will collect the sample to ENBS?',
      answer: 'The blood sample for ENBS may be collected by any of the following licensed health care worker such as physician, nurse, medical technologist or trained midwife.'
    },
    {
      question: 'Where is ENBS Available?',
      answer: 'ENBS is available in hospitals, lying-ins, rural health units, health centers and some private clinics and laboratories.'
    },
    {
      question: 'How much is ENBS?',
      answer: 'Expanded newborn screening costs ₱1750 and is included in the Newborn Care Package (NCP) for PhilHealth members.'
    },
    {
      question: 'What is Newborn Care Package?',
      answer: 'NCP is a PhilHealth benefit package for essential health services of the newborn during the first few days of life. It covers essential newborn care, expanded newborn screening, and hearing screening tests.'
    },
    {
      question: 'What are the eligibility conditions for newborn to avail of the NCP?',
      answer: 'Newborns are eligible for NCP if ALL of the following are met: Either of the parents are eligible to avail of the benefits, Born in accredited facilities that perform deliveries, such as hospitals and birthing homes; and Services were availed of upon delivery.'
    },
    {
      question: 'How can results be claimed?',
      answer: 'Results can be claimed from the Newborn Screening Facility (NSF) where ENBS was availed. Normal ENBS results are available by 7 – 14 working days from the time samples are received at NSC-SL. Positive ENBS results are relayed to the parents immediately by the NSF.'
    },
    {
      question: 'What is the meaning of the newborn screening result?',
      answer: 'A NEGATIVE SCREEN means that the ENBS result is normal. A POSITIVE SCREEN means that the newborn must be brought back to his/her health practitioner for further testing.'
    },
    {
      question: 'What must be done when a baby has a positive ENBS result?',
      answer: 'Babies with positive results must be referred at once to a specialist for confirmatory testing and further management.'
    },
    {
      question: 'What happens to the dried blood samples after screening?',
      answer: 'After the dried blood spot has been tested, it will be stored in a secure locked area. The stored sample is retained to allow for normal quality assurance and may be used for ethics committee approved researches for the benefit of the public.'
    },
    {
      question: 'What is the difference between screening and confirmatory tests?',
      answer: 'Screening and confirmatory are two different tests and may produce different results. A screening test is done to identify the population at HIGH RISK while the confirmatory test either CONFIRMS or RULES OUT a condition in newborns with an out-of-range screening result.'
    },
    {
      question: 'Why is a second test for preterm, LBW, or sick babies required at day 28 of life?',
      answer: 'A number of factors, including infant condition, treatment, and maternal status, increase the risk of missed or unreliable testing for premature, low birth weight, and sick newborns. Initial screening cannot wait for 28 days because the goal of screening is to identify and treat every affected infant before the onset of symptoms.'
    },
    {
      question: 'Where do we get the confirmatory testing results?',
      answer: 'Contact the facility that collected/sent the samples for confirmatory testing (e.g. Newborn Screening Center- Southern Luzon for Hemoglobinopathies, Thalassemia, and Metabolic Disorders; G6PD Confirmatory Testing Center for G6PD deficiency, etc.).'
    },
    {
      question: 'Is newborn screening test different from newborn hearing test?',
      answer: 'Newborn HEARING Screening test on the other hand, is a noninvasive test used to detect hearing loss in newborns using a tool called Otoacoustic Emissions (OAE) or Automated Auditory Brainstem Response (AABR). For more information about the hearing screening test, please visit http://www.nhsrc.ph or ask your doctor about it.'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Ask Your Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } ${openIndex === index ? 'ring-2 ring-[#063FA1]' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
                  isDark
                    ? openIndex === index ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white hover:bg-gray-700'
                    : openIndex === index ? 'bg-[#063FA1] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className={`px-6 py-4 border-t ${
                  isDark ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'
                }`}>
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Resources Link */}
        <div className="mt-12 text-center">
          <p className={`italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested to know more about the disorders screened by NBS? Download brochures and fact sheets in the Resources section.
          </p>
        </div>

        {/* CTA Section */}
        <div className={`mt-12 py-12 px-8 rounded-xl transition-colors duration-300 ${
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
                    : 'bg-[#063FA1] text-white hover:bg-[#052d7a]'
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