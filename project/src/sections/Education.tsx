import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import { Calendar, Award } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

interface Course {
  name: string;
  provider: string;
  year: string;
  duration: string;
  certificate?: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education: Education[] = [
    {
      institution: 'Astana IT University',
      degree: 'Кибербезопасность',
      year: '2021-2025',
      description: 'Изучение основ информационной безопасности, криптографии, защиты компьютерных систем и сетей.',
    },
  ];

  const courses: Course[] = [
    {
      name: 'Полный курс по JavaScript',
      provider: 'Udemy',
      year: '2024',
      duration: '6 месяцев',
      certificate: 'https://example.com/cert1',
    },
    {
      name: 'React - Полное руководство',
      provider: 'Stepik',
      year: '2023',
      duration: '3 месяца',
      certificate: 'https://example.com/cert2',
    },
    {
      name: 'Современный Frontend-разработчик',
      provider: 'Coursera',
      year: '2023',
      duration: '4 месяца',
      certificate: 'https://example.com/cert3',
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

  return (
    <Section
      id="education"
      title="Образование и курсы"
      subtitle="Моё образование и пройденные курсы"
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="space-y-12"
      >
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Образование
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 dark:border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.institution}
                  </h4>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.year}</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {item.degree}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Calendar className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Курсы и сертификаты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {course.name}
                </h4>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    {course.provider}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {course.year}, {course.duration}
                  </span>
                </div>
                {course.certificate && (
                  <a
                    href={course.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline inline-flex items-center mt-2"
                  >
                    <Award size={16} className="mr-1" />
                    Посмотреть сертификат
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Education;