import React from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-white text-black hover:bg-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700",
    outline: "border border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-200",
    ghost: "hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 py-2 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};