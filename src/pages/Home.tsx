import HeroSection from '../components/home/HeroSection';
import NBSCoverageSection from '../components/home/NBSCoverageSection';
import BlogSection from '../components/home/BlogSection';
import TestimonialSection from '../components/home/TestimonialSection';
import JobPostings from '../components/home/JobPostings';
import ContactSection from '../components/home/ContactSection';
import PartnersSection from '../components/home/PartnersSection';
import NewsSection from '../components/home/NewsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <NBSCoverageSection />
      <BlogSection />
      <TestimonialSection />
      <JobPostings />
      <ContactSection />
      <PartnersSection />
    </>
  );
}