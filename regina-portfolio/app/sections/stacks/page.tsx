'use client';

import styles from '../stacks/stacks.module.scss';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';
import { motion } from 'framer-motion';  // Importando o framer-motion

interface stackData {
  image: string;
  title: string;
  techs: string[];
  description: string;
}

const stackData = [
  {
    titleSkill: "Front-End",
    icon: <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />,
    techs: ["-  React", "-  Next.js", " -  Sass", "-  TypeScript"],
  },
  {
    titleSkill: "Back-End",
    icon: <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />,
    techs: ["-  Node.js", "-  Express", "-  PostgreSQL"],
  },
  {
    titleSkill: "Ferramentas",
    icon: <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />,
    techs: ["-  Git", "-  Figma", "-  Vercel", "-  Jest"],
  },
];

const Stacks: React.FC = () => {
  return (
    <div className={styles.containerStacks}>
      <div className={styles.topContainer}>
        {/* Fade-in para o título */}
        <motion.div
          className={styles.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Skills</h1>
        </motion.div>
        <div className={styles.gradientBar}></div>
      </div>

      <div className={styles.typesWrapper}>
        {stackData.map((stack, index) => (
          <motion.div
            key={index}
            className={styles.typeContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay para os stacks aparecerem um de cada vez
          >
            <div className={styles.titleContainer}>
              <span>{stack.icon}</span>
              <h2>{stack.titleSkill}</h2>
            </div>
            <div className={styles.line}></div>
            <div className={styles.skills}>
              {stack.techs.map((tech, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }} // Delay para as techs aparecerem depois
                >
                  {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
