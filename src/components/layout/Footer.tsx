import { useState } from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone} from 'lucide-react';

export default function Footer() {
  const [showExtraEmails, setShowExtraEmails] = useState(false);

  return (
    <>
      <footer className="bg-[#333333] dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div>
              <h4 className="font-bold text-xl mb-4 text-center lg:text-left">
                Newborn Screening Center Southern Luzon
              </h4>
              <p className="text-sm mb-4">
                Newborn Screening is a public health program that ensures all babies born in Philippines undergo screening for early identification of disorders (inborn errors of metabolism) that can lead to mental retardation and death.
              </p>
              <div className="flex gap-2 justify-center lg:justify-start">
                <a 
                  href="https://www.facebook.com/p/Southern-Luzon-NSC-100064428682142/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-3 py-2 rounded hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:admin@nscsl.com.ph"
                  className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-3 py-2 rounded hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="https://ph.linkedin.com/company/dmmc-institute-of-health-sciences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-3 py-2 rounded hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h5 className="font-bold text-lg mb-4 text-center lg:text-left">Contact</h5>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=3rd+Floor+DMMC-IHS+Building,+143+Narra+Street,+Mountview+Subd.,+Tanauan+City,+Batangas,+4232,+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    3rd Floor DMMC-IHS Building, #143 Narra Street, Mountview Subd., Tanauan City, Batangas, 4232, Philippines
                  </a>
                </p>

                <div>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:admin@nscsl.com.ph" className="hover:text-yellow-400 transition-colors">
                      admin@nscsl.com.ph
                    </a>
                    <button 
                      onClick={() => setShowExtraEmails(!showExtraEmails)}
                      className="ml-2 bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs transition-all hover:scale-110"
                    >
                      {showExtraEmails ? '−' : '+'}
                    </button>
                  </p>
                  
                  {showExtraEmails && (
                    <div className="mt-2 space-y-2 ml-6">
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:unsat@nscsl.com.ph" className="hover:text-yellow-400">unsat@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:accounting1@nscsl.com.ph" className="hover:text-yellow-400">accounting1@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:accounting2@nscsl.com.ph" className="hover:text-yellow-400">accounting2@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:pdo1@nscsl.com.ph" className="hover:text-yellow-400">pdo1@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:pdo2@nscsl.com.ph" className="hover:text-yellow-400">pdo2@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:pdo3@nscsl.com.ph" className="hover:text-yellow-400">pdo3@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:pdolopez@nscsl.com.ph" className="hover:text-yellow-400">pdolopez@nscsl.com.ph</a></p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:programmngr@nscsl.com.ph" className="hover:text-yellow-400">programmngr@nscsl.com.ph</a></p>
                    </div>
                  )}
                </div>

                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+639155432390" className="hover:text-yellow-400">+639155432390</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+639239083301" className="hover:text-yellow-400">+639239083301</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+639062179280" className="hover:text-yellow-400">+639062179280</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" />(043) 341-6032</p>
              </div>
            </div>

            {/* Extension Office Column */}
            <div>
              <h5 className="font-bold text-lg mb-4 text-center lg:text-left">Lopez Quezon Extension Office</h5>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/place/Newborn+Screening+Center+-+Southern+Luzon+Lopez,+Quezon+Satellite+Office/@13.8860307,122.2628617,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    2nd Floor, Arago Building, Brgy. Danlagan, Lopez, Quezon
                  </a>
                </p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:pdolopez@nscsl.com.ph" className="hover:text-yellow-400">pdolopez@nscsl.com.ph</a></p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:adminlopez@nscsl.com.ph" className="hover:text-yellow-400">adminlopez@nscsl.com.ph</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+639668631343" className="hover:text-yellow-400">+639668631343</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+639685960803" className="hover:text-yellow-400">+639685960803</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-white dark:bg-gray-800 text-[#063FA1] dark:text-yellow-400 text-center py-3 font-bold transition-colors duration-300">
        © 2024 Newborn Screening Southern Luzon. All rights reserved.
      </div>
    </>
  );
}