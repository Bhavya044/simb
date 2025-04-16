interface TickIconProps {
    color?: string;
    h?: number | string;
    w?: number | string;
}

export const CrossIcon: React.FC<TickIconProps> = ({ color, h, w }) => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" height={h} width={w} xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
