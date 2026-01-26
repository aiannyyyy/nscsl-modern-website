import AboutTabs from '../components/about/AboutTabs';
import ContactSection from '../components/home/ContactSection';

export default function About() {
  return (
    <>
      <div style={{ paddingTop: '40px' }}>
        <AboutTabs />
        <ContactSection />
      </div>
    </>
  );
}
