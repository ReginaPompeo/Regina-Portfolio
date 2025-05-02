import styles from '../hero/hero.module.scss';
import MarketingButton from '../../components/marketing_button/page';

const Hero: React.FC = () => {
    return(
        <div className={styles.containerHero}>
            <video 
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            >
                <source src="/BackgroundVideo.mp4" type="video/mp4"/>
            </video>
            <div className={styles.containerText}></div>
            <div className={styles.subtitle}><h2>Desenvolvedora</h2></div>
            <div className={styles.title}><h1>Regina Pompeo</h1></div>
            <div className={styles.subtitle}>
                <h2>
                    Crio soluções digitais completas: do front-end ao back-end, passando por automações e integrações que otimizam o dia a dia de empresas.  
                    Este é o meu portfólio profissional — seja bem-vindo(a)!
                </h2>
            </div>
            <div className={styles.buttonContainer}>
                    <MarketingButton phone="5511945292874" message="Olá! Quero saber mais sobre os serviços." />
            </div>
        </div>
    )
}

export default Hero;