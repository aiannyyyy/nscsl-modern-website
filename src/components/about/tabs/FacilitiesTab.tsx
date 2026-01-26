import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

interface Facility {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  province: string;
}

export default function FacilitiesTab() {
  const { isDark } = useTheme();
  const [selectedProvince, setSelectedProvince] = useState('BATANGAS');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFacilities, setFilteredFacilities] = useState<Facility[]>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);

  const provinces = ['CAVITE', 'LAGUNA', 'BATANGAS', 'RIZAL', 'QUEZON'];

  const provinceMapUrls: { [key: string]: string } = {
    'CAVITE': "https://www.google.com/maps/d/embed?mid=1kITO78pW1qtDDyEYNwWb1EETRlTSLHI&ehbc=2E312F",
    'LAGUNA': "https://www.google.com/maps/d/embed?mid=1Ox3pTc2A_tXpLHBiOw7bwUxcAABiv_o&ehbc=2E312F",
    'BATANGAS': "https://www.google.com/maps/d/embed?mid=1Wt_nXSCZyZrOixoJXshXgibJVxLFsxM&ehbc=2E312F",
    'RIZAL': "https://www.google.com/maps/d/embed?mid=1FlONhb-CA0KjhikrMFAD-QXC8hUXPa0&ehbc=2E312F",
    'QUEZON': "https://www.google.com/maps/d/embed?mid=12l8Meu3rTgy1kLpHSpJj-ASQEmIQjRA&ehbc=2E312F"
  };

  const csvFileMap: { [key: string]: string } = {
    'CAVITE': '/data/cavite.csv',
    'LAGUNA': '/data/laguna.csv',
    'BATANGAS': '/data/batangas.csv',
    'RIZAL': '/data/rizal.csv',
    'QUEZON': '/data/quezon.csv'
  };

  const parseCSV = (csvText: string): Facility[] => {
    const lines = csvText.trim().split('\n');
    const facilities: Facility[] = [];

    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(',');
      if (parts.length >= 4) {
        const name = parts[0].trim();
        const latitude = parseFloat(parts[1].trim());
        const longitude = parseFloat(parts[2].trim());
        const province = parts[3].trim();

        if (name && !isNaN(latitude) && !isNaN(longitude)) {
          facilities.push({
            id: `${province}-${i}`,
            name,
            latitude,
            longitude,
            province
          });
        }
      }
    }
    return facilities;
  };

  useEffect(() => {
    const loadFacilities = async () => {
      setLoading(true);
      try {
        const csvFile = csvFileMap[selectedProvince];
        const response = await fetch(csvFile);
        const csvText = await response.text();
        const parsedFacilities = parseCSV(csvText);
        
        setFacilities(parsedFacilities);
        setFilteredFacilities(parsedFacilities);
        setSearchQuery('');
        setIsSearchMode(false);
      } catch (error) {
        console.error('Error loading CSV:', error);
      }
      setLoading(false);
    };

    loadFacilities();
  }, [selectedProvince]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a location to search');
      return;
    }

    const searchTerm = searchQuery.trim();
    const filtered = facilities.filter(facility =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredFacilities(filtered);
    setIsSearchMode(true);
  };

  const returnToProvinceMap = () => {
    setSearchQuery('');
    setFilteredFacilities(facilities);
    setIsSearchMode(false);
  };

  const facilitiesFaqs = [
    {
      question: 'Where will we get our facility\'s Newborn Screening Certificate?',
      answer: 'The Newborn Screening Certificate will be issued to all newborn screening facilities once they start performing newborn screening. It will be sent to the facility through the Newborn Screening Center- Southern Luzon (NSC-SL). NSC-SL will also issue a temporary certification to new facilities on their first purchase order, in lieu of possible delays in the processing of Newborn Screening Certificate.'
    },
    {
      question: 'What are the requirements to receive the annual newborn stickers?',
      answer: 'Only the active Newborn Screening Facilities (NSFs) will receive annual newborn screening stickers. Basis for the activity is the newborn screening samples sent over the previous year under your facility name and code. It will be sent by the Newborn Screening Center- Southern Luzon via accredited courier together with your NBS results.'
    },
    {
      question: 'We have not received the Newborn Screening Certificate even if our facility has been offering newborn screening for several years, what could be the problem?',
      answer: 'These are the possible reasons: The certificate was lost in transit. The certificate was received by the NSF but there were no endorsements to your Newborn Screening Coordinator. The certificate was returned to the sender. Please call or email the Newborn Screening Reference Center to check if your DOH-NIH certificate has been sent. Kindly send a letter stating non-receipt and request for a second copy. Once approved, the NSRC will process another certificate for your facility.'
    },
    {
      question: 'What should we do if we misplace our Newborn Screening Certificate and/or Annual NBS Sticker?',
      answer: 'Kindly send a request letter with an affidavit of loss to NSRC. While we are checking your NSF status and tracking your sticker, the Newborn Screening Reference Center will provide a certification in lieu of the annual sticker, upon request.'
    },
    {
      question: 'Where will I follow up my order?',
      answer: 'You may follow up your orders to our Purchasing Department at purchasing@nscsl.com.ph and supply@nscsl.com.ph.'
    },
    {
      question: 'What are the requirements to change the name of the facility?',
      answer: 'Please send a formal communication signed by the Medical Director/Chief of Hospital/Municipal/City/Provincial Health Officer/Clinic Owner/Clinic Manager and attach any of the following documents: PRIVATE facility: copy of DTI/SEC or Business/Mayor\'s Permit. GOVERNMENT facility: copy of resolution signed by the "Sangguniang Bayan" or DOH Certification or any proof issued by any government agency attesting the approval of their change of name.'
    },
    {
      question: 'What will our facility do if there is a duplication of claims on the same filter card numbers?',
      answer: 'If claim is denied due to duplication of the filter card number, you can get a certification from the Newborn Screening Center- Southern Luzon that the card was indeed released to your facility and submit it to PhilHealth with a copy of newborn screening test result when you file for a motion for reconsideration. If it becomes frequent, report it to PhilHealth Main Office thru the Newborn Screening Center- Southern Luzon and/or the Newborn Screening Reference Center (NSRC).'
    },
    {
      question: 'What will our facility do if there are delays in the reimbursement for PhilHealth causing also a delay in payments to Newborn Screening Center (NSC)?',
      answer: 'Your facility may follow up with the concerned PhilHealth regional offices and reconcile the status of your claims. For any updates, please visit PhilHealth\'s website: www.philhealth.gov.ph where they post all PhilHealth circulars, advisories and news. Further inquiries may be directed to PhilHealth\'s Corporate Action Center at (02) 441-74442 or through actioncenter@philhealth.gov.ph.'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Newborn Screening Center Facilities
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Select a province to view Newborn Screening Center Facilities in that area
            </p>
          </div>

          {/* Province Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {provinces.map((province) => (
              <button
                key={province}
                onClick={() => {
                  setSelectedProvince(province);
                  returnToProvinceMap();
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProvince === province
                    ? isDark
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-[#063FA1] text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {province}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex gap-3">
            <input
              type="text"
              placeholder="Search for a location in the selected province..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                isDark
                  ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-500'
                  : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-[#063FA1]'
              } focus:outline-none`}
            />
            <button
              onClick={handleSearch}
              className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                isDark
                  ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              Search
            </button>
          </div>

          {/* Search Notice */}
          {isSearchMode && (
            <div className={`mb-4 p-4 rounded-lg flex justify-between items-center ${
              isDark
                ? 'bg-blue-900 text-blue-100 border border-blue-700'
                : 'bg-blue-100 text-blue-800 border border-blue-300'
            }`}>
              <span>
                <i className="fas fa-info-circle mr-2"></i>
                Showing search results for "<strong>{searchQuery}</strong>" in {selectedProvince}
              </span>
              <button
                onClick={returnToProvinceMap}
                className={`px-4 py-2 rounded transition-all ml-4 flex items-center gap-2 ${
                  isDark
                    ? 'bg-blue-800 hover:bg-blue-700'
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
              >
                <i className="fas fa-arrow-left"></i>
                Back to {selectedProvince} Map
              </button>
            </div>
          )}

          {/* Map */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg relative">
            {loading ? (
              <div className={`h-[500px] flex items-center justify-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Loading map...</p>
              </div>
            ) : isSearchMode ? (
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed&z=12`}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Search results for ${searchQuery}`}
              ></iframe>
            ) : (
              <iframe
                src={provinceMapUrls[selectedProvince]}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${selectedProvince}`}
              ></iframe>
            )}
          </div>

          {/* Facilities List */}
          {filteredFacilities.length > 0 && (
            <div className="mb-12">
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {filteredFacilities.length} Facilities in {selectedProvince}
              </h3>
            </div>
          )}

          {/* How to Become NSF Section */}
          <div className={`mb-12 p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Newborn Screening Facilities (NSF)
            </h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              How to become a Newborn Screening Facility
            </p>

            <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-yellow-400' : 'text-[#063FA1]'}`}>
              How does one become an NSF?
            </h4>

            <ol className={`list-decimal list-inside space-y-3 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Organize a newborn screening (NBS) team. The NBS Team shall be chaired by an NBS Coordinator who shall oversee the NBS Process, collection of samples, release of results, prompt recall, and follow-up of positive cases.</li>
              <li>Download and fill out the institutional database form. The form can also be secured from the Newborn Screening Reference Center – National Institutes of Health (NSRC-NIH) or your respective DOH-Centers for Health Development (DOH-CHDs) or the BARMM Ministry of Health (BARMM-MOH).</li>
              <li>Submit the form together with the Certificate of Attendance in a Newborn Screening Training to: <a href="mailto:info@newbornscreening.ph" className={isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-[#063FA1] hover:text-[#052d7a]'}>info@newbornscreening.ph</a></li>
            </ol>

            <p className={`italic mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              *If you have not attended the training yet, please contact your respective CHD.
            </p>

            <p className={`italic mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              **Additional requirement:
            </p>

            <ul className={`list-disc list-inside space-y-2 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Private health facilities: DTI Certificate/SEC Registration/Mayor's Permit/Business Permit</li>
              <li>Public health facilities: Any legal document bearing the facility's full name (i.e. DOH license to operate, local resolution)</li>
            </ul>

            <ol className={`list-decimal list-inside space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>The application will be forwarded to the DOH – CHD following Department Memo 2018-0167. Endorsement from the DOH-CHD/BARMM-MOH is a prerequisite for the assignment of facility codes.</li>
              <li>Once endorsement is received, NSRC will send: A welcome letter indicating the facility code and Administrative mechanics including how to order the NBS Specimen Collection Kit.</li>
              <li>Once the facility code and mechanics are received, order the NBS Specimen Kits from the assigned Newborn Screening Center (NSC).</li>
              <li>Start offering newborn screening services once the ordered kits are delivered.</li>
              <li>Inform all sections concerned about inclusion of newborn screening in the facility.</li>
              <li>Prepare an Advocacy and Promotional Plan. For any questions contact: <a href="mailto:info@newbornscreening.ph" className={isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-[#063FA1] hover:text-[#052d7a]'}>info@newbornscreening.ph</a></li>
            </ol>

            <p className={`mt-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              All inquiries for training will be forwarded to the respective DOH-CHDs/BARMM-MOH. Training and orientation are being conducted by the DOH-CHD and BARMM/BARMM MOH.
            </p>

            <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              For more guidance about the systematic implementation of NBS in your Institution, you may refer to the NCNBSS Manual of Operations or the Facilitator's Guidebook: Newborn Screening in the Communities.
            </p>

            <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Other resources on newborn screening are also now available for downloads.
            </p>
          </div>

          {/* Facilities FAQs */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Ask Your Questions
            </h3>

            <div className="space-y-3">
              {facilitiesFaqs.map((faq, index) => (
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
          </div>

        </div>
      </div>
    </div>
  );
}