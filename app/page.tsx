'use client';

import dynamic from 'next/dynamic';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import LazySection from '../components/lazy_section/lazy_section';

const Hero = dynamic(() => import("../app/sections/hero/page"));
const AboutJourney = dynamic(() => import("../app/sections/aboutJourney/page"));
const Career = dynamic(() => import("../app/sections/career/page"));
const Projects = dynamic(() => import("../app/sections/projects/page"));
const Stacks = dynamic(() => import("../app/sections/stacks/page"));
const Contact = dynamic(() => import("../app/sections/contact/page"));

export default function Home() {
  return (
    <>
      <Navbar />
      
      <LazySection>
        <Hero />
      </LazySection>

      <LazySection>
        <AboutJourney />
      </LazySection>

      <LazySection>
        <Career />
      </LazySection>

      <LazySection>
        <Projects />
      </LazySection>

      <LazySection>
        <Stacks />
      </LazySection>

      <LazySection>
        <Contact />
      </LazySection>

      <Footer />
    </>
  );
}
