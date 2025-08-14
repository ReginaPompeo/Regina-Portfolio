'use client';

import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let retries = 0;
    const maxRetries = 10;

    const waitForHero = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setScrolled(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0.1,
          }
        );
        observer.observe(heroSection);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(waitForHero, 300);
      } else {
        console.warn("Hero section não encontrada após várias tentativas");
      }
    };

    waitForHero();

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const navbarClass = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -89;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={navbarClass}>
      <a
        href="#hero"
        className={styles.logoContainer}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}
        style={{ cursor: 'pointer' }}
      >
                <Image 
          src="/icon/horizontal-logo.svg" 
          alt="Logo" 
          className={styles.logo} 
          priority 
          width={150} 
          height={50} 
          style={{ objectFit: 'contain' }} 
        />

      </a>

      {!menuOpen && (
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={handleCloseMenu}>❌</button>
          <nav className={styles.mobileNavLinks}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); handleCloseMenu(); }}>Home</a>
            <a href="#carreira" onClick={(e) => { e.preventDefault(); scrollToSection('carreira'); handleCloseMenu(); }}>Carreira</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); handleCloseMenu(); }}>Sobre</a>
            <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); handleCloseMenu(); }}>Projetos</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); handleCloseMenu(); }}>Skills</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); handleCloseMenu(); }}>Contato</a>
          </nav>
        </div>
      )}

      <div className={styles.navLinks}>
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
        <a href="#carreira" onClick={(e) => { e.preventDefault(); scrollToSection('carreira'); }}>Carreira</a>
        <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a>
        <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}>Projetos</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
      </div>
    </div>
  );
};

export default Navbar;
