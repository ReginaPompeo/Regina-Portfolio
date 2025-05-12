import React from 'react';
import styles from './timeline.module.scss'; // ✅ importação correta
import { 	FaUniversity, FaBriefcase, 	FaLaptopCode, FaUserTie, FaGraduationCap, FaBookOpen, FaRocket } from 'react-icons/fa';

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    icon: <	FaUniversity />, 
    date: 'Ago de 2022',
    title: 'Início da Graduação',
    description: 'Iniciei minha primeira graduação em Análise e Desenvolvimento de Sistemas na FIAP.',
  },
  {
    icon: <FaBriefcase/>,
    date: 'Jul de 2023',
    title: 'Início do meu Estágio',
    description: 'Iniciei o meu estágio em Análise de Dados na Febrapo',
  },
  {
    icon: <	FaLaptopCode />,
    date: 'Fev de 2024',
    title: 'Início como desenvolvedora freelancer',
    description: 'Comecei a trabalhar como desenvolvedora front-end como freelancer.',
  },
  {
    icon: <	FaUserTie />,
    date: 'Jun de 2024',
    title: 'Efetivação como Assistente de TI',
    description: 'Fui efetivada como Assistente de TI na Febrapo',
  },
  {  
    icon: <	FaGraduationCap />,
    date: 'Ago de 2024',
    title: 'Formatura em Analíse e Desenvolvimento de Sistemas',
    description: 'Me formei em Análise e Desenvolvimento de Sistemas pela FIAP.',
  },
  {  
    icon: <	FaBookOpen />,
    date: 'Ago de 2024',
    title: 'Início da 2ª Graduação',
    description: 'Iniciei minha segunda graduação em Engenharia de Software na Estácio.',
  },
  {
    icon: <	FaRocket/>,
    date: '2025',
    title: 'Desenvolvimento Profissional',
    description: 'Lançamento oficial do meu portfólio e consolidação como dev.',
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <div className={styles.timelineItem} key={index}>
          <div className={styles.timelineIcon}>
          { item.icon}
          </div>
          <div className={styles.timelineSide}>
            <div className={styles.timelineDate}>{item.date}</div>
            <div className={styles.timelineContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
