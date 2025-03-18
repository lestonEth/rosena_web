import React from 'react';

export default function Card({
    children,
    hover = false,
    clickable = false,
    className = '',
    ...props
}) {
    const baseClasses = 'bg-darkCard p-4 rounded-md border border-darkBorder';

    const classes = `
    ${baseClasses}
    ${hover ? 'hover-card' : ''}
    ${clickable ? 'cursor-pointer' : ''}
    ${className}
  `;

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}