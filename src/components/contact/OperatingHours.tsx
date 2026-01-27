import { Sun, Moon, Clock } from 'lucide-react';

export default function OperatingHours() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h6 className="text-[#063FA1] dark:text-yellow-400 font-semibold mb-2">Visit Us</h6>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Operating Hours</h3>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#063FA1] dark:bg-yellow-600">
                  <th className="py-4 px-6 text-left text-white font-semibold">Day</th>
                  <th className="py-4 px-6 text-left text-white font-semibold">Opening Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 text-gray-900 dark:text-gray-300 font-medium">Monday - Friday</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-400">8:00 AM - 5:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <Sun className="w-10 h-10 text-yellow-500" />
            <Moon className="w-10 h-10 text-[#063FA1] dark:text-yellow-400" />
            <Clock className="w-10 h-10 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
}