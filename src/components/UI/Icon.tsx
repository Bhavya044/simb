import React from "react";
import Image from "next/image";

interface IconProps {
    src: string;
    height?: string | number;
    width?: string | number;
}

const Icon: React.FC<IconProps> = ({ src, height = "24", width = "24" }) => {
    return (
        <div style={{ display: "inline-block", height, width }}>
            <Image
                src={src}
                alt="icon"
                height={Number(height)}
                width={Number(width)}
                layout="intrinsic"
            />
        </div>
    );
};

export default Icon;
