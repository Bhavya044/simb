"use client";

import Image from 'next/image';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface IconBoxProps {
    // Can accept either an image source or a React component
    icon: string | ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'active' | 'dark';
}

const IconBox = ({
    icon,
    className,
    size = "md",
}: IconBoxProps) => {
    // Size classes mapping
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12"
    };



    return (
        <div
            className={clsx(
                sizeClasses[size],
                'rounded-md',
                "bg-white",
                'flex',
                'items-center',
                'justify-center',
                'shrink-0',
                'transition-all',
                'duration-200',
                'hover:scale-105',
                className
            )}
        >
            {typeof icon === 'string' ? (
                <Image
                    src={icon}
                    alt="Icon"
                    width={size === 'lg' ? 24 : size === 'md' ? 20 : 16}
                    height={size === 'lg' ? 24 : size === 'md' ? 20 : 16}
                    className="object-contain"
                />
            ) : (
                icon
            )}
        </div>
    );
};

export default IconBox; 