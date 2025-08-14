'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './form.module.scss';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const formElement = form.current;
    if (!formElement) return;

    const nameInput = formElement.elements.namedItem('name') as HTMLInputElement | null;
    const emailInput = formElement.elements.namedItem('email') as HTMLInputElement | null;
    const messageInput = formElement.elements.namedItem('message') as HTMLTextAreaElement | null;

    if (!nameInput || !emailInput || !messageInput) {
      alert('Erro interno: campos não encontrados no formulário.');
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    emailjs
      .sendForm(
        'service_m66bzli',
        'template_w7i6ook',
        formElement,
        'RbPzlYJ8IYD6HDKTL'
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          formElement.reset();
        },
        () => {
          alert('Erro ao enviar. Tente novamente');
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className={styles.form}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className={styles.inputRow}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
        />
      </div>
      <textarea
        name="message"
        placeholder="Digite uma mensagem"
        required
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </motion.form>
  );
}
