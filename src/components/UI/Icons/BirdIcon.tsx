const BirdIcon = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 3c-2.1 2.6-5.6 3.1-9.7 1.5l-2.4 2.4-4.3-4.3-1.4 1.4 2.4 2.4-3.1 3.1c-.3-1.7-1.9-3.8-3.5-5.5l1.5 7.8c.2 1.3 1.3 2.2 2.6 2.2H7l-2.5 4.4c-.6 1.1.7 2.2 1.7 1.5l3.8-2.7c.3-.2.5-.4.6-.7L13 15V9.1c3.2-1.6 5.8-3.6 7.5-6.1h1.5V3z"
            />
        </svg>
    );
};

export default BirdIcon; 