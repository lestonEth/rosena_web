import React from 'react';

export default function Badge({ children, variant = 'default', className = '', ...props }) {
    const variants = {
        default: 'bg-gray-500/20 text-gray-400',
        success: 'bg-green-500/20 text-green-400',
        warning: 'bg-yellow-500/20 text-yellow-400',
        error: 'bg-red-500/20 text-red-400',
        info: 'bg-blue-500/20 text-blue-400',
    };

    const classes = `
    px-2 py-1 rounded-full text-xs
    ${variants[variant]}
    ${className}
  `;

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}