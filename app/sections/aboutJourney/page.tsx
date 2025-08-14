'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './aboutJourney.module.scss';
import Timeline from '../../../components/timeline/timeline';
import DownloadCVButton from '../../../components/cv_button/cv_button';

const AboutJourney: React.FC = () => {
  return (
    <section id="carreira" className={styles.containerAboutJourney}>
      {/* Container central com texto + imagem */}
      <div className={styles.centerContainer}>
        {/* Texto */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className={styles.subtitle}>Uma trajetória feita com</p>
          <h2 className={styles.title}>Tecnologia</h2>
          <div className={styles.text}>
            <p>Minha jornada na tecnologia começou com curiosidade e rapidamente se transformou em paixão.</p>
            <p>Sou formada em Análise e Desenvolvimento de Sistemas (2024) e atualmente curso Engenharia de Software, sempre em busca de evolução.</p>
            <p>Sou desenvolvedora front-end e assistente de dados, atuando em projetos que combinam tecnologia, criatividade e performance.</p>
            <p>Trabalho com React, Next.js e automações para otimizar processos e criar experiências digitais de alto nível.</p>
            <p>Hoje, concilio minha atuação como freelancer/PJ no desenvolvimento de sites com meu cargo na área de dados, enquanto sigo me especializando em Engenharia de Software.</p>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className={styles.image}>
            <div className={styles.imageWrapper}>
              <Image
  src="/image/graduate-image.jpg"
  alt="Regina Pompeo em sua formatura"
  width={400}
  height={533}
  className={styles.profile}
  style={{ objectFit: 'cover' }}
  loading="lazy"
/>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Linha do tempo e botão de CV */}
      <div className={styles.bottomContainer}>
        <Timeline />
        <DownloadCVButton />
      </div>
    </section>
  );
};

export default AboutJourney;
