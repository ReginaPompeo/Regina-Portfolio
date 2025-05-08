import styles from '../projects/projects.module.scss';
import Image from 'next/image';
import Carousel from '../../components/carousel/page';

const Career: React.FC = () => {
    return(
        <div className={styles.containerProjects}>
            <div className={styles.topContainer}>
                <div className={styles.title}> <h1>Projetos em destaque</h1> </div>
                <div className={styles.gradientBar}></div>
                <div className={styles.subtitle}> <h2>Aqui estão alguns dos projetos 
                    que desenvolvi — alguns pessoais, outros feitos para clientes ou estudos. 
                    Todos com código aberto no GitHub.</h2> </div>
            </div>
            <div className={styles.centerCarousel}>
                <Carousel />
            </div>
        </div>
    )
}

export default Career;