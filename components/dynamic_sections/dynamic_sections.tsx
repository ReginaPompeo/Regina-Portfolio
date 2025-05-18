// app/components/DynamicSections.tsx
'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("../../app/sections/hero/page"), { ssr: false });
const AboutJourney = dynamic(() => import("../../app/sections/aboutJourney/page"), { ssr: false });
const Career = dynamic(() => import("../../app/sections/career/page"), { ssr: false });
const Projects = dynamic(() => import("../../app/sections/projects/page"), { ssr: false });
const Stacks = dynamic(() => import("../../app/sections/stacks/page"), { ssr: false });
const Contact = dynamic(() => import("../../app/sections/contact/page"), { ssr: false });

export default function DynamicSections() {
  return (
    <>
      <Hero />
      <AboutJourney />
      <Career />
      <Projects />
      <Stacks />
      <Contact />
    </>
  );
}
