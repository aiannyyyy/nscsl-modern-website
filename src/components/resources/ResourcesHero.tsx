import { BookOpen, FileText, Briefcase } from 'lucide-react';

export default function ResourcesHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#063FA1] to-[#052d7a] dark:from-gray-900 dark:to-gray-800 text-white py-24 overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce">
              <BookOpen className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce delay-100">
              <FileText className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
            <div className="bg-white/10 dark:bg-yellow-500/20 backdrop-blur-sm p-4 rounded-full animate-bounce delay-200">
              <Briefcase className="w-8 h-8 text-white dark:text-yellow-400" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-white/90 dark:text-gray-300 max-w-3xl mx-auto">
            NSCSL Educational and Training Resource Materials
          </p>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" className="dark:fill-gray-900"/>
        </svg>
      </div>
    </section>
  );
}