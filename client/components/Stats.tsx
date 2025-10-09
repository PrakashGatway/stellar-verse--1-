import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Custom hook for counter animation
const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const updateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
                const currentCount = Math.floor(easeOutQuart * (end - start) + start);

                setCount(currentCount);

                if (progress < duration) {
                    animationFrame = requestAnimationFrame(updateCount);
                } else {
                    setCount(end);
                }
            };

            animationFrame = requestAnimationFrame(updateCount);

            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }
    }, [end, duration, start, isInView]);

    return [count, ref];
};

const Counter = ({ value, label, helper, duration = 2000 }) => {
    const [count, ref] = useCounter(value, duration);

    const formatNumber = (num) => {
        if (label.includes('%') || label.toLowerCase().includes('success') || label.toLowerCase().includes('increase')) {
            return `${num}+`;
        }
        // if (num >= 1000) {
        //     return `${(num / 1000).toFixed(0)}k+`;
        // }
        return `${num}+`;
    };

    return (
        <div
            ref={ref}
            className="rounded-[28px] border-2 shadow-xl border-red-300 bg-white px-6 sm:py-8 py-6 text-center"
        >
            <p className="sm:text-3xl text-xl font-semibold text-primary md:text-4xl">
                {formatNumber(count)}
            </p>
            <p className="sm:mt-2 sm:text-lg text-base font-semibold text-foreground">{label}</p>
            <p className="sm:mt-3 sm:text-sm text-xs text-foreground/60">{helper}</p>
        </div>
    );
};

// Main Stats Component
const AnimatedStats = () => {
    const stats = [
        {
            value: 12000,
            label: "Visa Success Stories",
            helper: "Gateway Abroad students excelling in top universities across the USA, UK, and Canada after stellar SAT scores.",
            duration: 2500
        },
        {
            value: 50000,
            label: "Students Mentored",
            helper: "Personalized SAT prep journeys guided by expert mentors and proven admission strategies.",
            duration: 2500
        },
        {
            value: 450000,
            label: "Live Learning Hours",
            helper: "Engaging live sessions, intensive practice drills, and analytics-driven performance tracking for guaranteed improvement.",
            duration: 2500
        },
    ];

    return (
        <div className="grid gap-3 md:gap-6 md:grid-cols-3">
            {stats.map((stat) => (
                <Counter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    helper={stat.helper}
                    duration={stat.duration}
                />
            ))}
        </div>
    );
};

export default AnimatedStats;