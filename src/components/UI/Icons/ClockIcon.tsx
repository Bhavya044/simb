
interface TickIconProps {
    color?: string;
    h?: number | string;
    w?: number | string;
}

export const ClockIcon: React.FC<TickIconProps> = ({ color, h, w }) => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" width={w}
        height={h} xmlns="http://www.w3.org/2000/svg" stroke={color}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
