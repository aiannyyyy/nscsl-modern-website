import HeroSection from '../components/home/HeroSection';
import StoriesSection from '../components/home/StoriesSection';
import MissionSection from '../components/home/MissionSection';
import BlogSection from '../components/home/BlogSection';
import TestimonialSection from '../components/home/TestimonialSection';
import JobPostings from '../components/home/JobPostings';
import ContactSection from '../components/home/ContactSection';
import PartnersSection from '../components/home/PartnersSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StoriesSection />
      <MissionSection />
      <BlogSection />
      <TestimonialSection />
      <JobPostings />
      <ContactSection />
      <PartnersSection />
    </>
  );
}