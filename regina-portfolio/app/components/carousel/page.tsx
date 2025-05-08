"use client";

import React, { useState, useEffect } from "react";
import styles from "./carousel.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Tipagem do projeto
interface Project {
  image: string;
  title: string;
  techs: string[];
  description: string;
}

const projects: Project[] = [
  {
    image: "/image/profile-image.jpeg",
    title: "Portfólio Profissional",
    techs: ["Next.js", "SCSS", "TypeScript"],
    description: "Site pessoal moderno e responsivo com foco em performance.",
  },
  {
    image: "/image/profile-image.jpeg",
    title: "Loja Virtual",
    techs: ["React", "Sass", "Firebase"],
    description: "E-commerce completo com painel administrativo.",
  },
  {
    image: "/image/profile-image.jpeg",
    title: "Dashboard de Dados",
    techs: ["Vue.js", "Chart.js", "Node.js"],
    description: "Painel interativo para visualização de dados em tempo real.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval); // limpa o timer ao desmontar
  }, [current]);

  const { image, title, techs, description } = projects[current];

  const getCardIndex = (offset: number) => (current + offset + total) % total;

  const visibleCards = [
    projects[getCardIndex(-1)],
    projects[getCardIndex(0)],
    projects[getCardIndex(1)],
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={styles.carousel__prev}>
        <IoIosArrowBack />
      </button>
      {visibleCards.map((project, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            index === 1 ? styles.card__active : ""
          }`}
          onClick={() => index === 1 && openModal(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className={styles.card__image}
          />
          <h2 className={styles.card__title}>{project.title}</h2>
          <p className={styles.card__description}>{project.description}</p>
          <div className={styles.card__techs}>
            {project.techs.map((tech, i) => (
              <span key={i} className={styles.card__badge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal__close} onClick={closeModal}>
              X
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={styles.modal__image}
            />
            <h2 className={styles.modal__title}>{selectedProject.title}</h2>
            <p className={styles.modal__description}>
              {selectedProject.description}
            </p>
            <div className={styles.modal__techs}>
              {selectedProject.techs.map((tech, i) => (
                <span key={i} className={styles.card__badge}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/seurepositorio"
              target="_blank"
              className={styles.modal__link}
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      )}

      <button onClick={next} className={styles.carousel__next}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
