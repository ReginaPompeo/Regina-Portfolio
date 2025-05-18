"use client";

import React, { useState, useEffect } from "react";
import styles from "./carousel.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Tipagem do projeto
interface Project {
  image: string;
  title: string;
  techs: string[];
  shortDescription: string;
  longDescription: string;
  projectLink: string; // Link do projeto, pode ser GitHub ou site
}

const projects: Project[] = [
  {
    image: "/image/project-relatorio.svg",
    title: "API ECOral Relatórios",
    techs: ["C#", ".NET", "Swagger", "Oracle SQL"],
    shortDescription:
      "API para geração e monitoramento de relatórios ambientais dos recifes de corais.",
    longDescription: `
      API em C# com ASP.NET que gera e monitora relatórios ambientais dos recifes de corais. Conecta sensores via CSV, permite operações CRUD e tem documentação Swagger. Projeto voltado para sustentabilidade e backend.
    `,
    projectLink: "https://github.com/ReginaPompeo/ECOral_API_Relatorios",
  },
  {
    image: "/image/project-webscrapping.svg",
    title: "Web Scraping .NET",
    techs: [".NET", "Oracle", "C#"],
    shortDescription:
      "Automação para extração e armazenamento de dados de produtos em banco Oracle.",
    longDescription: `
      Aplicação em C# com .NET para extrair dados de produtos da web e armazenar em banco Oracle. Inclui criação de tabelas e integração eficiente entre scraper e banco. Demonstra automação e backend.
    `,
    projectLink: "https://github.com/ReginaPompeo/WebScrapping-BD",
  },
  {
    image: "/image/project-iot.svg",
    title: "ECOral Sensor IoT",
    techs: ["Arduino", "ESP32", "IoT", "Machine Learning"],
    shortDescription:
      "Sistema IoT para monitoramento ambiental marinho e simulação de regeneração de recifes de corais.",
    longDescription: `
      Sistema IoT com Arduino ESP32 para monitorar parâmetros ambientais marinhos em tempo real via nuvem (Thinger.io). Inclui pesquisa em machine learning para simular regeneração dos recifes de corais, promovendo conservação e educação ambiental.
    `,
    projectLink: "https://github.com/ReginaPompeo/ECOral-Sensor_IOT",
  },
  {
    image: "/image/project-site.svg",
    title: "Site Advocacia Responsivo",
    techs: ["React.js", "HTML5", "CSS3", "JavaScript"],
    shortDescription:
      "Landing page para advogada com formulário, chat fixo e design responsivo.",
    longDescription: `
      Landing page para advogada, criada em React.js com design aprovado no Figma. Inclui formulário com envio por EmailJS, botão WhatsApp fixo, animações e é responsiva para vários dispositivos. Projeto que impulsionou meu crescimento profissional.
    `,
    projectLink: "https://renataoliveiraadvocacia.com.br/",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const total = projects.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval); // limpa o timer ao desmontar
  }, [current]);

  const getCardIndex = (offset: number) => (current + offset + total) % total;

  const visibleCards = [
    projects[getCardIndex(-1)],
    projects[getCardIndex(0)],
    projects[getCardIndex(1)],
  ];

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
      {!isModalOpen && (
        <button onClick={prev} className={styles.carousel__prev}>
          <IoIosArrowBack />
        </button>
      )}

      {visibleCards.map((project, index) => (
        <div
          key={index}
          className={`${styles.card} ${index === 1 ? styles.card__active : ""}`}
          onClick={() => index === 1 && openModal(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className={styles.card__image}
          />
          <h2 className={styles.card__title}>{project.title}</h2>
          <p className={styles.card__description}>{project.shortDescription}</p>
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
              {selectedProject.longDescription}
            </p>
            <div className={styles.modal__techs}>
              {selectedProject.techs.map((tech, i) => (
                <span key={i} className={styles.card__badge}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.projectLink}
              target="_blank"
              rel="noreferrer"
              className={styles.modal__link}
            >
              Ver projeto
            </a>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <button onClick={next} className={styles.carousel__next}>
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Carousel;
