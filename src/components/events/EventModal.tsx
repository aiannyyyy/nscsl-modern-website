import { ChevronLeft, Calendar, MapPin, Users, Mail, Phone, User } from 'lucide-react';

interface EventSchedule {
  date: string;
  time: string;
  venue: string;
  city: string;
  province: string;
}

interface EventModalProps {
  event: {
    title: string;
    image: string;
    overview: string;
    date: string;
    location: string;
    participants?: string;
    speaker?: string,
    schedule?: EventSchedule[];
    facilitators?: string[];
    contact: {
      emails: string[];
      phone?: string;
      address: string;
    };
    registrationFee?: string;
  } | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center px-4 pt-20 pb-6"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-6xl max-h-full flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#063FA1] to-[#052d7a] text-white p-5 rounded-t-xl flex-shrink-0">
          <button
            onClick={onClose}
            className="mb-3 inline-flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Events
          </button>
          <h2 className="text-2xl font-bold">{event.title}</h2>
        </div>

        {/* Modal Content - scrollable */}
        <div className="overflow-y-auto flex-1 p-5 lg:p-6">
          {/* Event Image */}
          <img
            src={event.image}
            alt={event.title}
            className="w-full rounded-xl mb-5"
          />

          {/* Event Overview */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#063FA1] dark:text-yellow-400 mb-3">
              Event Overview
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {event.overview}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Calendar className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800 dark:text-white">Date:</strong>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">{event.date}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800 dark:text-white">Venue:</strong>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">{event.location}</span>
                </div>
              </div>
              {event.participants && (
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800 dark:text-white">Participants:</strong>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">{event.participants}</span>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-2">
                <User className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800 dark:text-white">Speaker:</strong>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">{event.speaker}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Schedule Table */}
          {event.schedule && event.schedule.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#063FA1] dark:text-yellow-400 mb-3">
                Event Schedule
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-[#063FA1] dark:bg-yellow-600 text-white">
                    <tr>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Time</th>
                      <th className="p-3 text-left">Venue</th>
                      <th className="p-3 text-left">City</th>
                      <th className="p-3 text-left">Province</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.schedule.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <td className="p-3 text-gray-700 dark:text-gray-300">{item.date}</td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">{item.time}</td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">{item.venue}</td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">{item.city}</td>
                        <td className="p-3 text-gray-700 dark:text-gray-300">{item.province}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Facilitators */}
          {event.facilitators && event.facilitators.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#063FA1] dark:text-yellow-400 mb-3">
                Facilitators
              </h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {event.facilitators.map((facilitator, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                  >
                    <Users className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 flex-shrink-0" />
                    <span>{facilitator}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Registration Fee */}
          {event.registrationFee && (
            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#063FA1] dark:text-yellow-400 mb-3">
                Registration Information
              </h4>
              <p className="text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                {event.registrationFee}
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#063FA1] dark:text-yellow-400 mb-3">
              Contact Information
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg space-y-4">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800 dark:text-white block mb-2">Email:</strong>
                  <div className="flex flex-wrap gap-2">
                    {event.contact.emails.map((email, index) => (
                      <a
                        key={index}
                        href={`mailto:${email}`}
                        className="text-[#063FA1] dark:text-yellow-400 hover:underline"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {event.contact.phone && (
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800 dark:text-white">Phone:</strong>
                    <a
                      href={`tel:${event.contact.phone}`}
                      className="text-[#063FA1] dark:text-yellow-400 hover:underline ml-2"
                    >
                      {event.contact.phone}
                    </a>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#063FA1] dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800 dark:text-white">Office Address:</strong>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">{event.contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}