import ContactHero from '../components/contact/ContactHero';
import ContactMaps from '../components/contact/ContactMaps';
import OperatingHours from '../components/contact/OperatingHours';
import ContactDirectory from '../components/contact/ContactDirectory';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMaps />
      <OperatingHours />
      <ContactDirectory />
    </>
  );
}