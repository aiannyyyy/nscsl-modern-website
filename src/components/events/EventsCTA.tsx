import { Users, Mail } from 'lucide-react';

export default function EventsCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Mission Today!</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          We are dedicated to improving newborn screening and ensuring every child gets the best start in life.
          Your support can make a difference!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="bg-white text-[#063FA1] hover:bg-gray-100 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <Users className="w-5 h-5" />
            Get Involved
          </a>
          <a href="mailto:admin@nscsl.com.ph" className="border-2 border-white text-white hover:bg-white hover:text-[#063FA1] dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-white/80 dark:text-gray-300">It only takes a moment to make a difference!</p>
      </div>
    </section>
  );
}