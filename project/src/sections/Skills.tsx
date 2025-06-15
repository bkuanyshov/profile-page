import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 5 },
        { name: 'JavaScript', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Tailwind CSS', level: 5 },
        { name: 'Bootstrap', level: 4 },
        { name: 'Vite', level: 4 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 3 },
        { name: 'Express.js', level: 3 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'Python', level: 3 },
        { name: 'Golang', level: 2 },
      ],
    },
    {
      title: 'Инструменты',
      skills: [
        { name: 'Git', level: 4 },
        { name: 'VS Code', level: 5 },
        { name: 'Figma', level: 3 },
        { name: 'GitHub', level: 4 },
        { name: 'Postman', level: 4 },
        { name: 'Chrome DevTools', level: 4 },
        { name: 'Adobe Photoshop', level: 3 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Ответственность', level: 5 },
        { name: 'Внимание к деталям', level: 4 },
        { name: 'Командная работа', level: 4 },
        { name: 'Быстрая обучаемость', level: 5 },
        { name: 'Коммуникация', level: 4 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-5 rounded-full ${
              i <= level
                ? 'bg-blue-600 dark:bg-blue-500'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Section
      id="skills"
      title="Навыки"
      subtitle="Мои технические и личностные навыки"
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;