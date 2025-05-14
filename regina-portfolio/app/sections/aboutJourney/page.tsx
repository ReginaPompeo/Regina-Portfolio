'use client';

import { motion } from 'framer-motion';

import styles from '../aboutJourney/aboutJourney.module.scss';
import Timeline from '../../../components/timeline/timeline';
import DownloadCVButton from '../../../components/cv_button/cv_button';
import Image from 'next/image';

const AboutJourney: React.FC = () => {
  return (
    <div className={styles.containerAboutJourney}>
      <div className={styles.centerContainer}>
        {/* Seção de Texto com efeito de fade-in */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className={styles.subtitle}>
            <h2>Uma trajetória feita com</h2>
          </div>
          <div className={styles.title}>
            <h1>Tecnologia</h1>
          </div>
          <div className={styles.text}>
            Minha jornada na tecnologia começou com curiosidade e rapidamente se transformou em paixão.
            Sou formada em Análise e Desenvolvimento de Sistemas (2024) e atualmente curso Engenharia de Software,
            sempre em busca de evolução.
            Sou desenvolvedora front-end e assistente de dados, atuando em projetos que combinam tecnologia, criatividade
            e performance. Trabalho com React, Next.js e automações para otimizar processos e criar experiências digitais
            de alto nível. Hoje, concilio minha atuação como freelancer/PJ no desenvolvimento de sites com meu cargo na
            área de dados, enquanto sigo me especializando em Engenharia de Software.
          </div>
        </motion.div>

        {/* Seção de Imagem com efeito de fade-in */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className={styles.image}>
            <Image
              src="/image/graduate-image.jpg"
              alt="Regina Pompeo em sua formatura"
              width={300}
              height={400}
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </div>

      {/* Seção do BottomContainer sem animação */}
      <div className={styles.bottomContainer}>
        <Timeline />
        <DownloadCVButton />
      </div>
    </div>
  );
};

export default AboutJourney;
