import { nbsCoverageData } from '../../data/nbsCoverageData';

export default function NBSCoverageSection() {
  const { heading, subheading, stats } = nbsCoverageData;

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Decorative dot pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="nbs-dna-dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="#1e40af" className="dark:fill-blue-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nbs-dna-dots)" />
        </svg>
      </div>

      {/* Optional soft glow blobs for extra depth */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 dark:opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 dark:opacity-30 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400 mb-2">
          {subheading}
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-100 mb-10">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-2 border-blue-300 dark:border-blue-800 rounded-xl p-6 shadow-sm dark:shadow-black/30 bg-blue-50/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-pink-700 dark:text-pink-400 font-semibold text-lg mb-1">
                {stat.label}
              </p>
              <p className="text-blue-700 dark:text-blue-400 font-medium mb-3">
                {stat.asOfDate}
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200">
                {stat.count.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}