const BirdIcon = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.5 6c-1.4 1.7-3.9 2.5-6.8 1.9l-2.9 2.9L6 7l-1 1 2.8 2.8L5 13.5c-.2-1.3-1.1-2.7-2.5-3.9l1.1 5.5c.1.9.9 1.6 1.8 1.6h1.5L5 20.2c-.4.8.5 1.6 1.2 1.1l2.7-1.9c.2-.1.4-.3.4-.5l1.9-2.7v-4.2c2.2-1.1 4-2.5 5.2-4.3h3.1V6z" />
        </svg>
    );
};

export default BirdIcon; 