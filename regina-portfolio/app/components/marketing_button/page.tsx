'use client';

import React from 'react';
import styles from './marketing_button.module.scss';

interface MarketingButtonProps {
  phone: string;
  message?: string;
}

const MarketingButton: React.FC<MarketingButtonProps> = ({ phone, message = '' }) => {
  const handleClick = (): void => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Fale comigo no WhatsApp
    </button>
  );
};

export default MarketingButton;
