import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'GoldFish — ресторан жареной рыбы',
      description: 'Современный адаптивный лендинг ресторана с ярким дизайном, анимацией и кнопками действия. Сайт рассказывает о лучших рыбных блюдах в Астане и приглашает посетителей через привлекательный интерфейс.',
      image: '/public/img/img2.jpg',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      demoLink: 'https://example.com/project1',
      githubLink: 'https://github.com/bkuanyshov/Gold-fish.git',
    },
    {
      title: 'Eye Bot — AI-диагностика заболеваний глаз',
      description: 'Современный веб-сервис, использующий искусственный интеллект для анализа снимков глазного дна и предварительной диагностики заболеваний. Интерфейс с анимацией, адаптивностью и удобной навигацией.',
      image: '/public/img/img3.jpg',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Html', 'Css' , 'JavaScript'],
      demoLink: 'https://example.com/project2',
      githubLink: 'https://github.com/bkuanyshov/chat-bot-eye.git',
    },
    {
      title: 'BikeShop',
      description: 'Интернет-магазин велосипедов с каталогом, блогом, страницами о компании и контактами. Удобный поиск и современный интерфейс.',
      image: '/public/img/img5.jpg',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      demoLink: 'http://localhost:5174',
      githubLink: 'https://github.com/bkuanyshov/bike-shop.git',
    },
    {
      title: 'Basketball Arena',
      description: 'Онлайн-игра про баскетбол с режимами 1v1, 3v3, турнирами и возможностью соревноваться с игроками со всего мира.',
      image: '/public/img/img4.jpg',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      demoLink: 'https://example.com/project4',
      githubLink: 'https://github.com/bkuanyshov/basketball-game.git',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section 
      id="projects" 
      title="Проекты" 
      subtitle="Примеры моих работ"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;