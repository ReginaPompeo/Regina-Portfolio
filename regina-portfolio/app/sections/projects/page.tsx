'use client';

import styles from '../projects/projects.module.scss';
import Image from 'next/image';
import Carousel from '../../../components/carousel/carousel';
import { motion } from 'framer-motion';  // Importando o framer-motion

const Project: React.FC = () => {
  return (
    <div className={styles.containerProjects}>
      <div className={styles.topContainer}>
        {/* Título com fade-in */}
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0 }} // Inicializa com opacidade 0
          whileInView={{ opacity: 1 }} // Anima para opacidade 1 quando o elemento entra na vista
          transition={{ duration: 0.6, delay: 0.6 }} // Duração e atraso
        >
          <div className={styles.title}>
            <h1>Projetos em destaque</h1>
          </div>
          <div className={styles.gradientBar}></div>
        </motion.div>

        {/* Subtítulo com fade-in */}
        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0 }} // Inicializa com opacidade 0
          whileInView={{ opacity: 1 }} // Anima para opacidade 1 quando o elemento entra na vista
          transition={{ duration: 0.6, delay: 1 }} // Duração e atraso para subtítulo
        >
          <h2>
            Aqui estão alguns dos projetos que desenvolvi — alguns pessoais, outros feitos para clientes ou estudos.
            Todos com código aberto no GitHub.
          </h2>
        </motion.div>
      </div>

      {/* Carousel com fade-in */}
      <motion.div
        className={styles.centerCarousel}
        initial={{ opacity: 0 }} // Inicializa com opacidade 0
        whileInView={{ opacity: 1 }} // Anima para opacidade 1 quando o elemento entra na vista
        transition={{ duration: 0.6, delay: 1.6 }} // Duração e atraso para o carousel
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default Project;
