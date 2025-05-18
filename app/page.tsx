// app/page.tsx
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import DynamicSections from '../components/dynamic_sections/dynamic_sections'; // novo componente

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicSections />
      <Footer />
    </>
  );
}
