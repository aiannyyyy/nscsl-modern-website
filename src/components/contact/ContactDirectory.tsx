import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DepartmentProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Department({ title, children, defaultOpen = false }: DepartmentProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#063FA1] dark:bg-gray-800 text-white py-4 px-6 flex justify-between items-center hover:bg-[#052d7a] dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-bold text-lg">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 p-6">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ContactDirectory() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">NSCSL DIRECTORY</h1>
          <p className="text-xl text-[#063FA1] dark:text-yellow-400 font-semibold">
            FOR MORE CONCERN AND CLARIFICATIONS
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          {/* Program Concern */}
          <Department title="PROGRAM CONCERN" defaultOpen={true}>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NBS PROGRAM CONCERN</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>📠</span>
                    <span className="font-semibold">PLDT:</span>
                    <span>(043) 341-6032</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>📱</span>
                    <span className="font-semibold">SUN:</span>
                    <span>0923-908-3301</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>📱</span>
                    <span className="font-semibold">GLOBE:</span>
                    <span>0915-543-2390</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>✉️</span>
                    <a href="mailto:pdo1@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">pdo1@nscsl.com.ph</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>✉️</span>
                    <a href="mailto:pdo2@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">pdo2@nscsl.com.ph</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>✉️</span>
                    <a href="mailto:pdo3@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">pdo3@nscsl.com.ph</a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NSC-SL LOPEZ, QUEZON EXTENSION OFFICE</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>📱</span>
                    <span className="font-semibold">GLOBE:</span>
                    <span>0966-863-1343</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>📱</span>
                    <span className="font-semibold">SMART:</span>
                    <span>0968-596-0803</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>✉️</span>
                    <a href="mailto:pdolopez@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">pdolopez@nscsl.com.ph</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span>✉️</span>
                    <a href="mailto:adminlopez@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">adminlopez@nscsl.com.ph</a>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span>📍</span>
                  <span>2nd floor, Arago building, Brgy. Danlagan Lopez, Quezon</span>
                </div>
              </div>
            </div>
          </Department>

          {/* Accounting Concern */}
          <Department title="ACCOUNTING CONCERN">
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">PAYABLES AND BALANCES</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">GLOBE:</span>
                  <span>0906-217-9280</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📠</span>
                  <span className="font-semibold">PLDT Telefax:</span>
                  <span>(043) 341-6032</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:accounting1@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">accounting1@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:accounting2@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">accounting2@nscsl.com.ph</a>
                </div>
              </div>
            </div>
          </Department>

          {/* Purchase Order Concern */}
          <Department title="PURCHASE ORDER CONCERN">
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">PURCHASE ORDER</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">SMART:</span>
                  <span>0931-0101640</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📠</span>
                  <span className="font-semibold">PLDT:</span>
                  <span>(043) 341-6032</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:supply@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">supply@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:purchasing@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">purchasing@nscsl.com.ph</a>
                </div>
              </div>
            </div>
          </Department>

          {/* Laboratory Concern */}
          <Department title="LABORATORY CONCERN">
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">STATUS AND RECALL OF UNSATISFACTORY SAMPLES</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">SMART:</span>
                  <span>0933-0439651</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>☎️</span>
                  <span className="font-semibold">PLDT:</span>
                  <span>(043) 778-4849</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>✉️</span>
                <a href="mailto:unsat@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">unsat@nscsl.com.ph</a>
              </div>
            </div>
          </Department>

          {/* Follow-up Concern */}
          <Department title="FOLLOW-UP CONCERN">
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NEWBORN SCREENING RESULTS (Elevated/Result Update/Patients Concern)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">SMART:</span>
                  <span>0908-392-1298</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">SMART:</span>
                  <span>0931-202-7188</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📱</span>
                  <span className="font-semibold">SUN:</span>
                  <span>0923-908-3296</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>📠</span>
                  <span className="font-semibold">PLDT:</span>
                  <span>(043) 341-6032</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>☎️</span>
                  <span className="font-semibold">GLOBE:</span>
                  <span>(043) 430-5071</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:followup1@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">followup1@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:followup2@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">followup2@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:followup3@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">followup3@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:followup4@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">followup4@nscsl.com.ph</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span>✉️</span>
                  <a href="mailto:followupg6pd@nscsl.com.ph" className="hover:text-[#063FA1] dark:hover:text-yellow-400">followupg6pd@nscsl.com.ph</a>
                </div>
              </div>
            </div>
          </Department>
        </div>

        <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
          <p>Last updated: April 2025 • For official use</p>
        </div>
      </div>
    </section>
  );
}