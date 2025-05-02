import styles from "./page.module.css";
import Hero from "../app/sections/hero/page";
import Navbar from './components/navbar/page';
import Career from '../app/sections/career/page';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Career/>
    </div>
  );
}
