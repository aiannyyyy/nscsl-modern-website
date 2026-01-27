import ContactHero from '../components/contact/ContactHero';
import ContactMaps from '../components/contact/ContactMaps';
import OperatingHours from '../components/contact/OperatingHours';
import ContactDirectory from '../components/contact/ContactDirectory';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMaps />
      <OperatingHours />
      <ContactDirectory />
      <ContactForm />
    </>
  );
}