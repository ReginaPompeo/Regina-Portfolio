'use client';

import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Logo from '../../../public/next.svg';
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
            <Link href="/sobre" onClick={handleCloseMenu}>Sobre</Link>
            <Link href="/servicos" onClick={handleCloseMenu}>Serviços</Link>
            <a href="#team" onClick={handleCloseMenu}>Equipe</a>
            <a href="#contact" onClick={handleCloseMenu}>Contato</a>
          </nav>
        </div>
      )}

      {/* Links visíveis apenas em telas grandes */}
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <Link href="/sobre">Sobre</Link>
        <Link href="/servicos">Serviços</Link>
        <a href="#team">Equipe</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
  );
};

export default Navbar;
