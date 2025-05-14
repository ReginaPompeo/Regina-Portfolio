'use client'; // Para garantir o uso do framer-motion no cliente

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './cv_button.module.scss';

const DownloadCVButton = () => {
  return (
    <div className={styles.wrapper}>
      <motion.a
        href="/download/ReginaPompeoCV.pdf"
        download
        className={styles.downloadButton}
        initial={{ opacity: 0, y: 40 }}  // Inicia invisível e abaixo
        whileInView={{ opacity: 1, y: 0 }}  // Quando entra na tela, fica visível e sobe
        exit={{ opacity: 0, y: 40 }}  // Quando sai da tela, desaparece e desce
        transition={{ duration: 0.6 }}  // Duração da animação
        viewport={{ once: false, amount: 0.3 }}  // Quando o botão aparece na tela
      >
        <span className={styles.iconWrapper}>
          <FaDownload className={styles.icon} />
        </span>
        <span className={styles.text}>Baixar CV</span>
      </motion.a>
    </div>
  );
};

export default DownloadCVButton;
