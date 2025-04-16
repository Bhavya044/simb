
interface TickIconProps {
    color?: string;
    h?: number | string;
    w?: number | string;
}

export const TerminalIcon: React.FC<TickIconProps> = ({ color }) => (
    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17L10 11L4 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
