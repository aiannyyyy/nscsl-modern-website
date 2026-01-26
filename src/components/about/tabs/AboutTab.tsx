import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import AboutModal from '../../modals/AboutModal';

export default function AboutTab() {
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Image */}
            <div>
              <img 
                src="/images/groupphoto.jpg" 
                alt="Newborn Screening Southern Luzon"
                className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h4 className={`text-sm font-semibold mb-2 uppercase tracking-widest ${
                isDark ? 'text-yellow-400' : 'text-[#063FA1]'
              }`}>
                About Us
              </h4>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Newborn Screening Southern Luzon
              </h2>
              <p className={`mb-4 leading-relaxed text-justify ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                DMMC INSTITUTE OF HEALTH SCIENCES, INC., the current host facility of NSC SOUTHERN LUZON, is a private institution that was incorporated under the laws of the Republic of the Philippines and registered with the SEC last August 21, 2002. The school was a result of DMMC's (Daniel O. Mercado Medical Center) commitment to provide affordable quality health care through competent and highly skilled medical personnel.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className={`font-semibold transition-all duration-300 ${
                  isDark
                    ? 'text-yellow-400 hover:text-yellow-300'
                    : 'text-[#063FA1] hover:text-[#052d7a]'
                }`}
              >
                ... Read more
              </button>
            </div>
          </div>

          <hr className={`my-12 ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

          {/* Lopez Quezon Extension Office */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/lopez.jpg" 
                alt="Lopez Quezon Extension Office"
                className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Lopez Quezon Extension Office
              </h2>
              <p className={`leading-relaxed text-justify ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                The Lopez Quezon Extension Office is dedicated to extending essential newborn screening services to the communities in Lopez, Quezon, and surrounding areas. This office serves as a vital hub for improving access to early detection of congenital disorders, ensuring that every newborn receives timely and accurate screening.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className={`py-12 px-8 rounded-xl transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-yellow-400' : 'text-[#063FA1]'
              }`}>
                Our Mission
              </h3>
              <ul className="space-y-4">
                <li className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`text-xl flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>
                    ✓
                  </span>
                  <span className="text-justify">
                    To ensure that every newborn in Southern Luzon has access to the Comprehensive Newborn Screening Program through extensive information dissemination and parent education.
                  </span>
                </li>
                <li className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`text-xl flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>
                    ✓
                  </span>
                  <span className="text-justify">
                    To provide quality newborn screening services through continuous training of all personnel, conduct of research, maintenance and upgrading of facilities
                  </span>
                </li>
                <li className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`text-xl flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>
                    ✓
                  </span>
                  <span className="text-justify">
                    To provide proper evaluation, diagnosis and management of positive screens by intensifying the follow-up program, prompt recall and referral to specialists.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-yellow-400' : 'text-[#063FA1]'
              }`}>
                Our Vision
              </h3>
              <div className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className={`text-xl flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>
                  ✓
                </span>
                <p className="text-justify">
                  To be recognized as an institution providing quality Newborn Screening services and extensive coverage of live births across Southern Luzon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AboutModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}