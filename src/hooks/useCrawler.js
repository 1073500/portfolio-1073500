import { useEffect, useRef, useState } from "react";

function randomPoint(margin = 80) {
    return {
        x: margin + Math.random() * (window.innerWidth  - margin * 2),
        y: margin + Math.random() * (window.innerHeight - margin * 2),
    };
}

export function useCrawler(speed = 80) {
    const [transform, setTransform] = useState({ x: 100, y: 100, angle: 0 });

    const posRef          = useRef({ x: 100, y: 100 });
    const targetRef       = useRef(null);
    const lastTimeRef     = useRef(null);
    const angleRef        = useRef(0);

    useEffect(() => {
        targetRef.current = randomPoint();

        let animId;

        const tick = (time) => {
            const delta = lastTimeRef.current
                ? (time - lastTimeRef.current) / 1000
                : 0;
            lastTimeRef.current = time;

            const pos    = posRef.current;
            const target = targetRef.current;

            if (!target) return;

            const dx   = target.x - pos.x;
            const dy   = target.y - pos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 5) {
                targetRef.current = randomPoint();
            } else {
                const step = Math.min(speed * delta, dist);

                posRef.current = {
                    x: pos.x + (dx / dist) * step,
                    y: pos.y + (dy / dist) * step,
                };

                const rawAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

                const diff = ((rawAngle - angleRef.current + 540) % 360) - 180;
                angleRef.current += diff * Math.min(delta * 5, 1);

                setTransform({
                    x: posRef.current.x,
                    y: posRef.current.y,
                    angle: angleRef.current,
                });
            }

            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, [speed]);

    return transform;
}