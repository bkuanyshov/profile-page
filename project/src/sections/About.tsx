import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import { Code, BookOpen, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section 
      id="about" 
      title="Обо мне" 
      subtitle="Узнайте больше о моем опыте и интересах"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Я создаю быстрые и понятные пользовательские интерфейсы. Люблю чистый код, интересуюсь UI/UX-дизайном и стремлюсь постоянно развиваться в команде профессионалов.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Имею опыт работы с современными фреймворками и библиотеками, такими как React, Tailwind CSS, и Node.js. Всегда стремлюсь изучать новые технологии и применять лучшие практики разработки.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            В свободное время изучаю новые инструменты разработки, участвую в open-source проектах и создаю собственные приложения для расширения своего портфолио.
          </p>
        </div>
        
        <div>
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-4"
          >
            <motion.div 
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Образование</h3>
                <p className="text-gray-600 dark:text-gray-400">Astana IT University, Кибербезопасность</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Год выпуска</h3>
                <p className="text-gray-600 dark:text-gray-400">2025</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Code className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Опыт</h3>
                <p className="text-gray-600 dark:text-gray-400">Frontend-разработка</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Местоположение</h3>
                <p className="text-gray-600 dark:text-gray-400">Астана, Казахстан</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;