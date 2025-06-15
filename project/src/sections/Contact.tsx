import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import Button from '../components/Button';
import { Phone, Mail, Github, Linkedin, Send } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone size={20} />,
      label: 'Телефон',
      value: '+7 (702) 619 67 60',
      link: 'tel:+77026196760',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'bkuanyshov17@gmail.com',
      link: 'mailto:bkuanyshov17@gmail.com',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/bkuanyshov',
      link: 'https://github.com/bkuanyshov',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bekzat',
      link: 'https://linkedin.com/in/bekzat',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitResult({
      success: true,
      message: 'Ваше сообщение успешно отправлено!',
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitResult({});
    }, 5000);
  };

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
      id="contact"
      title="Контакты"
      subtitle="Свяжитесь со мной для сотрудничества"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Контактная информация
          </h3>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <span className="text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {info.label}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Найдите меня здесь
            </h3>
            <div className="flex space-x-4">
              {contactInfo
                .filter((info) => info.link?.startsWith('http'))
                .map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                    aria-label={info.label}
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {info.icon}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Отправьте мне сообщение
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Ваше имя"
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                placeholder="Ваше сообщение..."
              />
            </div>
            
            <div>
              <Button
                type="submit"
                variant="primary"
                icon={<Send size={18} />}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </Button>
            </div>
            
            {submitResult.message && (
              <div
                className={`mt-4 p-3 rounded-lg ${
                  submitResult.success
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}
              >
                {submitResult.message}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;