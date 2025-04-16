"use client";

import React from "react";

interface CardProps {
    className?: string; // Optional className for custom styles
    children: React.ReactNode;
    hasError?: boolean

}

const Card: React.FC<CardProps> = ({ className, children, hasError }) => {
    return (
        <div className={`${className} py-4 px-2 rounded-md ${!hasError && 'bg-white/5 ring-1 ring-white/6'} backdrop-blur-sm  `}>

            {children}
        </div>
    );
};

export default Card;