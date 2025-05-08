import styles from '../stacks/stacks.module.scss';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';


interface stackData {
    image: string;
    title: string;
    techs: string[];
    description: string;
  }

const stackData = [
    {
      titleSkill: "Front-End",
      icon: <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />, // pode usar um componente de ícone real se preferir
      techs: ["-  React", "-  Next.js", " -  Sass", "-  TypeScript"],
    },
    {
      titleSkill: "Back-End",
      icon: <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />,
      techs: ["-  Node.js", "-  Express", "-  PostgreSQL"],
    },
    {
      titleSkill: "Ferramentas",
      icon:  <Icon path={mdiStarFourPoints} size={1.5} color="#3fb6ff" />,
      techs: ["-  Git", "-  Figma", "-  Vercel", "-  Jest"],
    },
  ];

  
const Stacks: React.FC = () => {
    return(
        <div className={styles.containerStacks}>
            <div className={styles.typesWrapper}>
            {stackData.map((stack, index) => (
    <div key={index} className={styles.typeContainer}>
      <div className={styles.titleContainer}>
        <span>{stack.icon}</span>
        <h2>{stack.titleSkill}</h2>
      </div>
      <div className={styles.line}></div>
      <div className={styles.skills}>
      {stack.techs.map((tech, index) => (
    <p key={index}>{tech}</p>
  ))}

      </div>
    </div>
  ))}
  </div>
        <div className={styles.bottomContainer}>
                <div className={styles.title}> <h1>Skills</h1> </div>
                <div className={styles.gradientBar}></div>
            </div>
        </div>
    )
}

export default Stacks;