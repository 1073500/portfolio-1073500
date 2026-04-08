import { useState, useEffect } from "react";
import { useCrawler } from "../hooks/useCrawler";

export default function Crawler({
                                    size = 48,
                                    speed = 80,
                                    frameA,
                                    frameB,
                                    fps = 8,
                                }) {
    const { x, y, angle } = useCrawler(speed);
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((f) => (f === 0 ? 1 : 0));
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [fps]);

    return (
        <div
            className="fixed pointer-events-none"
            style={{
                zIndex: -1,
                width: size,
                height: size,
                left: x - size / 2,
                top: y - size / 2,
                transform: `rotate(${angle}deg)`,
            }}
        >
            <img
                src={frameA}
                alt=""
                className="w-full h-full object-contain absolute inset-0"
                style={{ opacity: frame === 0 ? 1 : 0 }}
            />
            <img
                src={frameB}
                alt=""
                className="w-full h-full object-contain absolute inset-0"
                style={{ opacity: frame === 1 ? 1 : 0 }}
            />
        </div>
    );
}