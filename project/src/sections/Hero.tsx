import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import { ThemeContext } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="hero" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-3/5 mt-8 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block text-blue-600 dark:text-blue-400 font-medium mb-2"
            >
              Frontend Developer
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Bekzat Kuanyshov
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
            >
              Frontend-разработчик с опытом создания адаптивных интерфейсов
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Vite
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Node.js
              </span>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button 
                href="/public/img/bkuanyshov.docx" 
                variant="primary"
                icon={<Download size={18} />}
              >
                Скачать резюме
              </Button>
              <Button 
                href="#contact" 
                variant="outline"
                icon={<Mail size={18} />}
              >
                Связаться со мной
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
              <img 
                src="/public/img/img1.jpg" 
                alt="Bekzat Kuanyshov" 
                className="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full p-2">
                  <code>&lt;/&gt;</code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll down</span>
          <ArrowDown size={20} className="text-blue-600 dark:text-blue-400 animate-bounce-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;