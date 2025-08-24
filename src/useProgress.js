import { useState, useRef, useCallback, useEffect } from "react";

export const useProgress = (durationMs = 2000) => {
    const [progress, setProgress] = useState(0);
    const startRef = useRef(null);
    const rafRef = useRef(null);

    // This hook uses requestAnimationFrame to update progress based on elapsed time
    // Time accurate animation for each bar independently
    const step = useCallback(
        (ts) => {
            if (startRef.current == null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const pct = Math.min(100, (elapsed / durationMs) * 100);
            setProgress(pct);
            if (pct < 100) {
                rafRef.current = requestAnimationFrame(step);
            }
        },
        [durationMs]
    );

    useEffect(() => {
        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [step]);

    return progress;
}
