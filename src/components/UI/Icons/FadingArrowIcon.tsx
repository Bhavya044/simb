import React from 'react';

interface FadingArrowIconProps {
    className?: string;
}

const FadingArrowIcon: React.FC<FadingArrowIconProps> = ({ className = '' }) => {
    return (
        <div className={`relative ${className}`}>
            {/* SVG Arrow with gradient */}
            <svg
                width="2"
                height="200"
                viewBox="0 0 2 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-fade-tail"
            >
                <defs>
                    <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="100%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <rect width="2" height="200" fill="url(#arrowGradient)" />
            </svg>

            {/* Arrow head */}
            <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 animate-fade-tail"
            >
                <path
                    d="M1 1L7 7L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default FadingArrowIcon;
