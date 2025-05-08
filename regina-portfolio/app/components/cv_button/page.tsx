import React from 'react';
import { FaDownload } from 'react-icons/fa';
import styles from './cv_button.module.scss';

const DownloadCVButton = () => {
  return (
    <a
      href="/download/ReginaPompeoCV.pdf"
      download
      className={styles.downloadButton}
    >
    <span className={styles.iconWrapper}>
        <FaDownload className={styles.icon} />
    </span>
    <span className={styles.text}>Baixar CV</span>
    </a>
  );
};

export default DownloadCVButton;
