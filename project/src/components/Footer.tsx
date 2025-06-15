import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
              <span className="mr-2">&lt;</span>
              <span>BK</span>
              <span className="ml-2">/&gt;</span>
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-center mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Бекзат Қуанышов. Все права защищены.
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Сделано с
            </span>
            <Heart 
              size={16} 
              className="text-red-500 fill-red-500 animate-pulse" 
            />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              className="ml-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;