import { useState } from 'react';
import EventsHero from '../components/events/EventsHero';
import EventCard from '../components/events/EventCard';
import EventModal from '../components/events/EventModal';
import EventsCTA from '../components/events/EventsCTA';
import { eventsData } from '../data/eventsData';
import type { Event } from '../data/eventsData';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter only active events
  const activeEvents = eventsData.filter(event => event.active);

  return (
    <>
      <EventsHero />

      {/* Events List */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {activeEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                No Upcoming Events
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check back soon for new events!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {activeEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onReadMore={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <EventsCTA />

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
}