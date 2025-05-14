// components/Footer.tsx
'use client';

import { FaLinkedin, FaWhatsapp, FaArrowCircleUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./footer.module.scss";
import Logo from '../../public/icon/logo-rp.svg';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
      <div className={styles.footerTop}>
  <div className={styles.footer__half}>
    <div className={styles.titleIcons}>
      <h1>Entre em contato</h1>
    </div>
    <div className={styles.iconCircleGroup}>
      <a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <div className={styles.iconCircle}><FaLinkedin size={30} /></div>
      </a>
      <a href="mailto:contato@reginapompeo.dev" aria-label="E-mail">
        <div className={styles.iconCircle}><MdEmail size={30} /></div>
      </a>
      <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <div className={styles.iconCircle}><FaWhatsapp size={30} /></div>
      </a>
    </div>
    <div className={styles.contacts}>
      <p>in/regina-pompeo</p>
      <p>regina.pompeo.dev@gmail.com</p>
      <p>(11) 94529-2874</p>
    </div>
  </div>

  <div className={styles.footer__half}>
    <div className={styles.titleScroll}>
      <h1>Voltar ao topo</h1>
    </div>
    <div className={styles.scrollCircle}>
      <button className={styles.footer__scrollTop} onClick={scrollToTop} aria-label="Voltar ao topo">
        <FaArrowCircleUp size={30} />
      </button>
    </div>
  </div>
</div>
<div className={styles.logoCotainer}>
      <Image src={Logo} alt="Logo" className={styles.logo} />
    </div>

        <p className={styles.footer__bottom}>
          © 2025 Regina Pompeo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
