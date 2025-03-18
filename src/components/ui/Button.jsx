import React from 'react';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    animated = false,
    className = '',
    ...props
}) {
    const baseClasses = 'rounded-md transition-colors focus:outline-none';

    const variants = {
        primary: 'bg-accent hover:bg-accent/80 text-white',
        secondary: 'bg-accent/10 hover:bg-accent/20 text-accent',
        outline: 'border border-accent/50 text-accent hover:bg-accent/10',
        ghost: 'hover:bg-gray-100 dark:hover:bg-darkCard/50',
    };

    const sizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-5 py-3 text-lg',
        icon: 'p-2',
    };

    const classes = `
    ${baseClasses}
    ${variants[variant]} 
    ${sizes[size]}
    ${animated ? 'btn-animate' : ''}
    ${className}
  `;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}