"use client";

const ConnectingArrow = ({ className = "", bgColor = "bg-[#4F6BFF]/30" }) => {
    return (
        <div className={`relative ${className}`}>
            {/* Soft blue line with slight glow */}
            <div className={`absolute h-[2px] w-full ${bgColor}  -translate-y-1/2 shadow-[0_0_6px_#4F6BFF]/10"`}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_4px_#4F6BFF]/10"
                    >
                        <path
                            d="M1 6H11M11 6L6 1M11 6L6 11"
                            stroke="#4F6BFF"
                            strokeOpacity="0.4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ConnectingArrow;
