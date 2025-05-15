'use client';

import styles from '../projects/projects.module.scss';
import Image from 'next/image';
import Carousel from '../../../components/carousel/carousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Project: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 }); // "reseta" para reaparecer
    }
  }, [inView, controls]);

  return (
    <div className={styles.containerProjects}>
      <div className={styles.topContainer}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <div className={styles.title}>
            <h1>Projetos em destaque</h1>
          </div>
          <div className={styles.gradientBar}></div>
        </motion.div>

        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: false }}
        >
          <h2>
            Aqui estão alguns dos projetos que desenvolvi — alguns pessoais, outros feitos para clientes ou estudos.
            Todos com código aberto no GitHub.
          </h2>
        </motion.div>
      </div>

      {/* 👇 Aqui é onde a mágica acontece */}
      <motion.div
        ref={ref}
        className={styles.centerCarousel}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default Project;
