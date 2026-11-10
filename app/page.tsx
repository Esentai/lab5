import type { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import DatesSection from '@/components/sections/DatesSection';
import FaqSection from '@/components/sections/FaqSection';
import HeroSection from '@/components/sections/HeroSection';
import ProgramSection from '@/components/sections/ProgramSection';
import RegisterSection from '@/components/sections/RegisterSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import TracksSection from '@/components/sections/TracksSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <SpeakersSection />
      <ProgramSection />
      <DatesSection />
      <RegisterSection />
      <FaqSection />
    </main>
  );
}
