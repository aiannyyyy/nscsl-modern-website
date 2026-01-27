import { useState } from 'react';
import ResourcesHero from '../components/resources/ResourcesHero';
import MemorandumAccordion from '../components/resources/MemorandumAccordion';
import MemorandumModal from '../components/resources/MemorandumModal';
import FactSheetsAccordion from '../components/resources/FactSheetsAccordion';
import FactSheetsModal from '../components/resources/FactSheetsModal';
import BrochuresAccordion from '../components/resources/BrochuresAccordion';
import PostersAccordion from '../components/resources/PostersAccordion';

export default function Resources() {
  const [showMemoModal, setShowMemoModal] = useState(false);
  const [showFactSheetsModal, setShowFactSheetsModal] = useState(false);

  return (
    <>
      <ResourcesHero />

      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Memorandums Accordion */}
            <MemorandumAccordion onViewAll={() => setShowMemoModal(true)} />

            {/* Fact Sheets & Books Accordion */}
            <FactSheetsAccordion onViewAll={() => setShowFactSheetsModal(true)} />

            {/* Brochures Accordion - No modal */}
            <BrochuresAccordion />

            {/* Posters Accordion - No modal */}
            <PostersAccordion />
          </div>
        </div>
      </section>

      {/* Modals */}
      <MemorandumModal isOpen={showMemoModal} onClose={() => setShowMemoModal(false)} />
      <FactSheetsModal isOpen={showFactSheetsModal} onClose={() => setShowFactSheetsModal(false)} />
    </>
  );
}