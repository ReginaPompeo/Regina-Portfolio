// components/Footer.tsx
'use client';

import { FaLinkedin, FaWhatsapp, FaArrowCircleUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./footer.module.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footerTop}>
        <div className={styles.footer__icons}>  
            <div className={styles.titleIcons}> <h1>Entre em contato</h1></div>
          <a
            href="https://www.linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={60} />
          </a>
          <a
            href="mailto:contato@reginapompeo.dev"
            aria-label="E-mail"
          >
            <MdEmail size={60} />
          </a>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={60} />
          </a>
        </div>

        <div className={styles.scrollContainer}>
        <div className={styles.titleScroll}> <h1>Voltar ao topo</h1></div>
        <button
          className={styles.footer__scrollTop}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <FaArrowCircleUp size={60} />
        </button>
        </div>
        </div>

        <p className={styles.footer__bottom}>
          © 2025 Regina Pompeo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
