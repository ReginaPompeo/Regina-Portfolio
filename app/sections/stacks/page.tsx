'use client';

import styles from '../stacks/stacks.module.scss';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';
import { motion } from 'framer-motion';

interface StackData {
  titleSkill: string;
  techs: string[];
}

const stackData: StackData[] = [
  {
    titleSkill: "Front-End",
    techs: [
      "HTML5",
      "CSS3",
      "Sass",
      "Tailwind",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
    ],
  },
  {
    titleSkill: "Back-End",
    techs: [
      "Node.js",
      "Express",
      "Python",
      "Java",
      "C#",
      ".NET",
      "Spring Boot",
    ],
  },
  {
    titleSkill: "Bancos de Dados",
    techs: [
      "Oracle",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    titleSkill: "Ferramentas",
    techs: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "JUnit",
      "Jest",
      "Figma",
      "Netlify",
      "Vercel",
    ],
  },
  {
    titleSkill: "IDEs",
    techs: [
      "IntelliJ IDEA",
      "VSCode",
      "Visual Studio",
      "Eclipse",
    ],
  },
  {
    titleSkill: "Idiomas",
    techs: [
      "Português (nativo)",
      "Inglês (intermediário)",
      "Espanhol (básico)",
      "Alemão (básico)",
    ],
  },
];

const iconPath = mdiStarFourPoints;

const Stacks: React.FC = () => {
  return (
    <div id="skills" className={styles.containerStacks}>
      <motion.div
        className={styles.topContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.gradientBar}></div>
      </motion.div>

      <div className={styles.typesWrapper}>
        {stackData.map((stack, index) => (
          <motion.div
            key={stack.titleSkill}
            className={styles.typeContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.titleContainer}>
              <span><Icon path={iconPath} size={1.5} color="#3fb6ff" /></span>
              <h2>{stack.titleSkill}</h2>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.skills}>
              {stack.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
