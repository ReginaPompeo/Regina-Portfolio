"use client";

import styles from '../hero/hero.module.scss';
import MarketingButton from '../../../components/marketing_button/marketing_button';

const Hero: React.FC = () => {
  
    const handleScroll = () => {
      const section = document.getElementById("carreira");
      if (section) {
        const yOffset = -80; // ajuste conforme a altura da navbar
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

  return (
    <div className={styles.containerHero}>
      <video 
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background/background-hero.mp4" type="video/mp4"/>
        Seu navegador não suporta vídeos .webm
      </video>

      <div className={styles.containerText}></div>

      <div className={styles.subtitle}><h2>Desenvolvedora</h2></div>
      <div className={styles.title}><h1>Regina Pompeo</h1></div>

      <div className={styles.subtitle}>
        <h2>
          Tecnologia com estratégia: esse é o meu portfólio profissional.
        </h2>
      </div>

      <div className={styles.buttonContainer}>
        <MarketingButton 
          phone="5511945292874" 
          message="Olá! Quero saber mais sobre os serviços." 
        />
      </div>

      <div onClick={handleScroll} style={{ cursor: "pointer" }}>
        <video
          className={styles.setaIcone}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/icon/seta-icon.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
