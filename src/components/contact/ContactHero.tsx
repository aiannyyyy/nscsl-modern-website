import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#063FA1] to-[#052d7a] dark:from-gray-900 dark:to-gray-800 text-white py-24 overflow-hidden transition-colors duration-300" style={{ marginTop: '0px' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          {/* Icon Display */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce">
              <Phone className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce delay-100">
              <Mail className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce delay-200">
              <MapPin className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 dark:from-yellow-400 dark:to-yellow-200">
            Contact Us
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 dark:text-gray-300 max-w-2xl mx-auto">
            We are here to provide you with comprehensive information and support regarding newborn screening
          </p>
        </div>

        {/* Stats or Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 dark:border-yellow-400/30 hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-white dark:text-yellow-400">Get</div>
            <div className="text-sm text-white/80 dark:text-gray-300">In Touch</div>
          </div>
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 dark:border-yellow-400/30 hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-white dark:text-yellow-400">We're</div>
            <div className="text-sm text-white/80 dark:text-gray-300">Here to Help</div>
          </div>
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 dark:border-yellow-400/30 hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-white dark:text-yellow-400">24/7</div>
            <div className="text-sm text-white/80 dark:text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Wave Decoration at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" className="dark:fill-gray-900"/>
        </svg>
      </div>
    </section>
  );
}