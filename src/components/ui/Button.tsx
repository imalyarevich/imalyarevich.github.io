// components/ui/Button.tsx
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Icon } from './Icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            icon,
            iconPosition = 'left',
            fullWidth = false,
            className = '',
            ...props
        },
        ref
    ) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50';

        const variants = {
            primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25',
            secondary: 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20',
            outline: 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-200',
            ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2',
            lg: 'px-6 py-3'
        };

        return (
            <button
                ref={ref}
                className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
                {...props}
            >
                {icon && iconPosition === 'left' && <Icon name={icon} className="w-4 h-4" aria-hidden="true"/>}
                {children}
                {icon && iconPosition === 'right' && <Icon name={icon} className="w-4 h-4" aria-hidden="true"/>}
            </button>
        );
    }
);

Button.displayName = 'Button';