import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../UI/Card";
import clsx from "clsx";

interface AlertSummaryCardProps {
    title: string;
    initialCount: number;
    icon: React.ReactNode;
    threatLevel?: number;
    className?: string;
    alerts: string[];  // Accepting alerts as a prop
}

const AlertSummaryCard: React.FC<AlertSummaryCardProps> = ({
    title,
    initialCount,
    icon,
    threatLevel = 100,
    className = "",
    alerts,
}) => {
    const [count, setCount] = useState(initialCount);
    const [isError, setIsError] = useState(false);
    const [shake, setShake] = useState(false);
    const [alertIndex, setAlertIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isFlickering, setIsFlickering] = useState(false);

    const currentAlert = alerts[alertIndex];  // Use alerts prop instead of DUMMY_ALERTS

    // Typing effect
    useEffect(() => {
        setTypedText("");
        setCharIndex(0);
    }, [alertIndex]);

    useEffect(() => {
        if (charIndex < currentAlert.length) {
            const typingTimer = setTimeout(() => {
                setTypedText((prev) => prev + currentAlert[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 30);

            return () => clearTimeout(typingTimer);
        }
    }, [charIndex, currentAlert]);

    // Alert rotation
    useEffect(() => {
        const alertTimer = setInterval(() => {
            setAlertIndex((prev) => (prev + 1) % alerts.length);  // Use alerts.length
            setShake(true);
        }, 3000); // time per alert

        return () => clearInterval(alertTimer);
    }, [alerts]);

    // Shake animation reset
    useEffect(() => {
        if (shake) {
            const timer = setTimeout(() => setShake(false), 500);
            return () => clearTimeout(timer);
        }
    }, [shake]);

    // Flicker effect when in error state
    useEffect(() => {
        if (isError) {
            const flickerInterval = setInterval(() => {
                setIsFlickering((prev) => !prev);
            }, 500); // Flicker every 500ms

            return () => clearInterval(flickerInterval);
        }
    }, [isError]);

    // Count simulation
    useEffect(() => {
        const interval = setInterval(() => {
            const increase = Math.floor(Math.random() * 3);
            setCount((prev) => prev + increase);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count >= threatLevel) {
            setIsError(true);
            setShake(true);
        }
    }, [count, threatLevel]);

    return (
        <motion.div
            animate={
                shake
                    ? {
                        x: [-2, 2, -2, 2, 0],
                        transition: { duration: 0.4 },
                    }
                    : {}
            }
        >
            <Card
                hasError={isError || isFlickering}
                className={clsx(
                    "max-w-xs px-4 py-6 transition-all duration-150",
                    {
                        "bg-red-900/20 backdrop-blur-sm ring-1 ring-red-500/30": isError && isFlickering,
                        "bg-white/5 ring-1 ring-white/6": !isError || !isFlickering,
                    },
                    className
                )}
            >
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <span className={clsx({ "text-red-500": isError })}>{icon}</span>
                        <h3
                            className={clsx("text-md font-medium", {
                                "text-red-500": isError,
                                "text-gray-200": !isError,
                            })}
                        >
                            {title}
                        </h3>
                    </div>
                    <motion.span
                        key={count}
                        className={clsx("text-2xl font-bold", {
                            "text-red-500": isError,
                            "text-gray-200": !isError,
                        })}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {count}
                    </motion.span>
                </div>

                {/* Alert Display - Typing */}
                <div className="min-h-[24px] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={alertIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className={clsx(
                                "absolute w-full text-sm",
                                isError ? "text-red-500" : "text-gray-400",
                                "truncate", "text-xs"
                            )}
                        >
                            {typedText}
                            <span
                                className={clsx("animate-pulse inline-block w-1 h-4 ml-1", {
                                    "bg-red-500": isError,
                                    "bg-gray-400": !isError,
                                })}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Card>
        </motion.div>
    );
};

export default AlertSummaryCard;
