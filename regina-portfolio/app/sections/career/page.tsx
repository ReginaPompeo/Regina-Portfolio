import styles from '../career/career.module.scss';
import Image from 'next/image';

const Career: React.FC = () => {
    return(
        <div className={styles.containerCareer}>
            <div className={styles.topContainer}>
                <div className={styles.subtitle}> <h2>Além do código:</h2> </div>
                <div className={styles.title}> <h1>Quem é a Regina?</h1> </div>
            </div>
            <div className={styles.centerContainer}>
                <div className={styles.text}>
                Sou uma mulher criativa, comunicativa e apaixonada por desafios. 
                Desde que entrei no universo da tecnologia, busco sempre unir técnica com originalidade 
                — porque pra mim, programar também é uma forma de criar.

                Tenho facilidade em me comunicar com pessoas técnicas e não técnicas, 
                o que me ajuda a entender a real necessidade de cada projeto. Não gosto de fazer 
                por fazer: gosto de entender, planejar e construir com propósito.

                Adoro aprender, experimentar e transformar ideias em soluções que realmente funcionam. E sim, 
                acredito que um bom código pode mudar uma rotina inteira.

                Hoje, além do meu trabalho como assistente de dados, desenvolvo sites, sistemas e automações 
                para empresas que querem se digitalizar com inteligência — e sem complicação.
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                    <   Image
                        src="/image/profile-image.jpeg"
                        alt="Regina Pompeo em ambiente de trabalho"
                        width={350}
                        height={350}
                        className={styles.profileImage}
                    />
                    </div>
                    <div className={styles.textImage}>
                        Sou movida por ideias, cores e conexões reais — e isso aparece em tudo que eu crio.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career;