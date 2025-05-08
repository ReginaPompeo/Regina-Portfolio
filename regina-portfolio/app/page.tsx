import styles from "./page.module.css";
import Hero from "../app/sections/hero/page";
import Navbar from './components/navbar/page';
import AboutJourney from '../app/sections/aboutJourney/page';
import Career from '../app/sections/career/page';
import Projects from '../app/sections/projects/page';
import Stacks from '../app/sections/stacks/page';
import Contact from '../app/sections/contact/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="carreira">
        <AboutJourney />
      </div>
      <div id="sobre">
        <Career />
      </div>
      <div id="projetos">
        <Projects />
      </div>
      <div id="skills">
          <Stacks />
      </div>
      <div id="contato">
        <Contact />
      </div>
    </div>
  );
}
