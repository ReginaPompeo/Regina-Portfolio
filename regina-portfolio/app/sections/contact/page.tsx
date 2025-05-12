import styles from '../contact/contact.module.scss';
import Form from '../../../components/form/form';
  

const Contact: React.FC = () => {
    return(
        <div className={styles.containerContact}>
            <div className={styles.topContainer}>
                <div className={styles.title}> <h1>Disponível para Projetos</h1> </div>
                <div className={styles.gradientBar}></div>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </div>
    )
}

export default Contact;