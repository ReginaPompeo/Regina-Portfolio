'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaArrowCircleUp, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './footer.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (inView) setShowBackground(true);
  }, [inView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      ref={ref}
      className={`${styles.footer} ${showBackground ? styles.lazyBackground : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className={styles.footer__content}>
        <div className={styles.footer__top}>
          {/* Contato */}
          <div className={styles.footer__half}>
            <div className={styles.titleIcons}>
              <h1>Entre em contato</h1>
            </div>
            <div className={styles.iconCircleGroup}>
              <a
                href="https://www.linkedin.com/in/regina-pompeo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className={styles.iconCircle}>
                  <FaLinkedin size={30} />
                </div>
              </a>
              <a
                href="mailto:regina.pompeo.dev@gmail.com"
                aria-label="E-mail"
              >
                <div className={styles.iconCircle}>
                  <MdEmail size={30} />
                </div>
              </a>
              <a
                href="https://wa.me/5511945292874"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <div className={styles.iconCircle}>
                  <FaWhatsapp size={30} />
                </div>
              </a>
              <a
                href="https://github.com/reginapompeo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className={styles.iconCircle}>
                  <FaGithub size={30} />
                </div>
              </a>
            </div>
            <div className={styles.contacts}>
              <p>in/regina-pompeo</p>
              <p>regina.pompeo.dev@gmail.com</p>
              <p>(11) 94529-2874</p>
            </div>
          </div>

          {/* Voltar ao topo */}
          <div className={styles.footer__half}>
            <div className={styles.titleScroll}>
              <h1>Voltar ao topo</h1>
            </div>
            <div className={styles.scrollCircle}>
              <button
                className={styles.footer__scrollTop}
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
              >
                <FaArrowCircleUp size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className={styles.logoContainer}>
<div style={{ position: 'relative', width: '400px', height: '80px' }}>
  <Image
    src="/icon/horizontal-logo.svg"
    alt="Logo"
    priority
    fill
    style={{ objectFit: 'contain' }}
  />

          </div>
        </div>

        {/* Direitos autorais */}
        <div className={styles.footer__bottom}>
          <p>
          © 2025 Regina Pompeo. Todos os direitos reservados.
        </p>
        <p>Desenvolvido por Regina Pompeo</p>
      </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
