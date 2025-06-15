import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  href,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white focus:ring-gray-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 focus:ring-blue-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button className={allClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;