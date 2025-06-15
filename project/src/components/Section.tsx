import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              variants={itemVariants}
              className="section-subtitle"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;