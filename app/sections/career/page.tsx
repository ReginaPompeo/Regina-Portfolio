'use client'; // Para garantir o uso do framer-motion no cliente

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../career/career.module.scss';

const Career: React.FC = () => {
  return (
    <div id="sobre" className={styles.containerCareer}>
      <div className={styles.topContainer}>
        {/* Título e subtítulo com fade-in */}
        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Além do código:</h2>
        </motion.div>
        <motion.div
          className={styles.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Quem é a Regina?</h1>
        </motion.div>
      </div>

      <div className={styles.centerContainer}>
        {/* Texto vindo da direita */}
<motion.div
  className={styles.text}
  initial={{ opacity: 0, x: 10 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <p>
    Sou uma mulher criativa, comunicativa e apaixonada por desafios. Desde que entrei no universo da tecnologia, busco sempre unir técnica com originalidade — porque pra mim, programar também é uma forma de criar.
  </p>

  <p>
    Tenho facilidade em me comunicar com pessoas técnicas e não técnicas, o que me ajuda a entender a real necessidade de cada projeto. Não gosto de fazer por fazer: gosto de entender, planejar e construir com propósito.
  </p>

  <p>
    Adoro aprender, experimentar e transformar ideias em soluções que realmente funcionam. E sim, acredito que um bom código pode mudar uma rotina inteira.
  </p>

  <p>
    Hoje, além do meu trabalho como assistente de dados, desenvolvo sites, sistemas e automações para empresas que querem se digitalizar com inteligência — e sem complicação.
  </p>
</motion.div>


        {/* Imagem vindo da esquerda */}
        <div className={styles.imageContainer}>
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, x: -50 }}  // Imagem começa da esquerda
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/image/profile-image.jpeg"
              alt="Regina Pompeo em ambiente de trabalho"
              width={500}
              height={500}
              className={styles.profileImage}
              loading="lazy"
            />
          </motion.div>

          {/* Texto ao lado da imagem */}
          <motion.div
            className={styles.textImage}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Sou movida por ideias, cores e conexões reais — e isso aparece em tudo que eu crio.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Career;
