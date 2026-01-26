import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
  };
  index: number;
  onReadMore: () => void;
}

export default function EventCard({ event, index, onReadMore }: EventCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
        index % 2 === 0 ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Event Image */}
      <div className="lg:w-1/3">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Event Info */}
      <div className="lg:w-2/3 p-6 lg:p-8">
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          {event.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {event.description}
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Calendar className="w-5 h-5 text-[#063FA1] dark:text-yellow-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MapPin className="w-5 h-5 text-[#063FA1] dark:text-yellow-400" />
            <span>{event.location}</span>
          </div>
        </div>
        <button
          onClick={onReadMore}
          className="bg-[#063FA1] hover:bg-[#052d7a] dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
        >
          Read More
        </button>
      </div>
    </div>
  );
}