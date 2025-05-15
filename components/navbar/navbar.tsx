'use client';

import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/icon/logo-rp.svg';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const handleCloseMenu = (): void => setMenuOpen(false);

  // Scroll para adicionar classe quando passa de 300px
useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 200;
    console.log('scrollY:', window.scrollY, 'scrolled:', isScrolled);
    setScrolled(isScrolled);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const navbarClass = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;

  // Função para rolar até a seção com offset de 90px
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -89; // altura da navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={navbarClass}>
      <a
  href="#home"
  className={styles.logoContainer}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('home');
  }}
  style={{ cursor: 'pointer' }}
>
  <Image src={Logo} alt="Logo" className={styles.logo} priority />
</a>



      {/* HAMBURGER */}
      {!menuOpen && (
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={handleCloseMenu}>❌</button>
          <nav className={styles.mobileNavLinks}>
            <a onClick={() => { scrollToSection('home'); handleCloseMenu(); }}>Home</a>
            <a onClick={() => { scrollToSection('carreira'); handleCloseMenu(); }}>Carreira</a>
            <a onClick={() => { scrollToSection('sobre'); handleCloseMenu(); }}>Sobre</a>
            <a onClick={() => { scrollToSection('projetos'); handleCloseMenu(); }}>Projetos</a>
            <a onClick={() => { scrollToSection('skills'); handleCloseMenu(); }}>Skills</a>
            <a onClick={() => { scrollToSection('contato'); handleCloseMenu(); }}>Contato</a>
          </nav>
        </div>
      )}

      {/* MENU DESKTOP */}
      <div className={styles.navLinks}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('carreira')}>Carreira</a>
        <a onClick={() => scrollToSection('sobre')}>Sobre</a>
        <a onClick={() => scrollToSection('projetos')}>Projetos</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('contato')}>Contato</a>
      </div>
    </div>
  );
};

export default Navbar;
