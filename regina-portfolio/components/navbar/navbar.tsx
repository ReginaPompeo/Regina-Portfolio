'use client';

import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/icon/logo-rp.svg';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = (): void => setMenuOpen(false);

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 300);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navbarClass = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;


  return (
    <div className={navbarClass}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="Logo" className={styles.logo} />
      </div>

      {/* HAMBURGUER: visível só quando menu está fechado */}
      {!menuOpen && (
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}

      {/* MENU MOBILE: visível só se aberto */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={handleCloseMenu}>❌</button>
          <nav className={styles.mobileNavLinks}>
            <a href="#home" onClick={handleCloseMenu}>Home</a>
            <a href="#carreira" onClick={handleCloseMenu}>Carreira</a>
            <a href="#sobre" onClick={handleCloseMenu}>Sobre</a>
            <a href="#projetos" onClick={handleCloseMenu}>Projetos</a>
            <a href="#skills" onClick={handleCloseMenu}>Skills</a>
            <a href="#contato" onClick={handleCloseMenu}>Contato</a>            
          </nav>
        </div>
      )}

      {/* Links visíveis apenas em telas grandes */}
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#carreira">Carreira</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#contato">Contato</a>        
      </div>
    </div>
  );
};

export default Navbar;
