
interface TickIconProps {
    color?: string;
    h?: number | string;
    w?: number | string;
}

export const UserIcon: React.FC<TickIconProps> = ({ color, h, w }) => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color} height={h} width={w}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#a3a3a3" strokeWidth="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
);
