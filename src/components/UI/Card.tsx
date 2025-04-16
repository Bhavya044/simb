"use client";

import React from "react";

interface CardProps {
    className?: string; // Optional className for custom styles
    children: React.ReactNode;

}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`${className} py-4 px-2 rounded-md bg-white/5 backdrop-blur-sm  ring-1 ring-white/6`}>

            {children}
        </div>
    );
};

export default Card;