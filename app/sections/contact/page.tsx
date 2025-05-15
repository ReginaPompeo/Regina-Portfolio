'use client';

import styles from '../contact/contact.module.scss';
import Form from '../../../components/form/form';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div className={styles.containerContact}>
            <motion.div
                className={styles.topContainer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className={styles.title}>
                    <h1>Disponível para Projetos</h1>
                </div>
                <div className={styles.gradientBar}></div>
            </motion.div>

            <div className={styles.form}>
                <Form />
            </div>
        </div>
    );
};

export default Contact;
