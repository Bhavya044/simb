import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../UI/Card";
import clsx from "clsx";

interface AlertSummaryCardProps {
    title: string;
    initialCount: number;
    icon: React.ReactNode;
    threatLevel?: number;  // Optional prop
    className?: string;
    variant?: "success" | "default";  // Optional prop
    alerts?: string[];  // Optional prop
}

const AlertSummaryCard: React.FC<AlertSummaryCardProps> = ({
    title,
    initialCount,
    icon,
    threatLevel = 100,
    className = "",
    variant = "default",
    alerts = [],
}) => {
    const [count, setCount] = useState(initialCount);
    const [isError, setIsError] = useState(false);
    const [shake, setShake] = useState(false);
    const [alertIndex, setAlertIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isFlickering, setIsFlickering] = useState(false);

    const currentAlert = alerts[alertIndex] || ""; // Fallback to empty string if alerts are empty

    // Typing effect
    useEffect(() => {
        setTypedText("");
        setCharIndex(0);
    }, [alertIndex]);

    useEffect(() => {
        if (variant === "default" && charIndex < currentAlert.length) {
            const typingTimer = setTimeout(() => {
                setTypedText((prev) => prev + currentAlert[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 30);

            return () => clearTimeout(typingTimer);
        }
        else {
            setCharIndex(0)
            setTypedText("")
        }
    }, [charIndex, currentAlert, variant]);

    // Alert rotation
    useEffect(() => {
        if (alerts.length > 0) {
            const alertTimer = setInterval(() => {
                setAlertIndex((prev) => (prev + 1) % alerts.length);
                setShake(true);
            }, 3000);

            return () => clearInterval(alertTimer);
        }
    }, [alerts]);

    // Shake animation reset
    useEffect(() => {
        if (shake) {
            const timer = setTimeout(() => setShake(false), 500);
            return () => clearTimeout(timer);
        }
    }, [shake]);

    useEffect(() => {
        if (isError) {
            const flickerInterval = setInterval(() => {
                setIsFlickering((prev) => !prev);
            }, 500);

            return () => clearInterval(flickerInterval);
        }
    }, [isError]);

    // Count simulation and handling variant success
    useEffect(() => {
        if (variant === "success") {
            const decreaseInterval = setInterval(() => {
                setCount((prev) => Math.max(0, prev - 1)); // Decrease rapidly until 0
            }, 10);
            return () => clearInterval(decreaseInterval);
        } else {
            const interval = setInterval(() => {
                const increase = Math.floor(Math.random() * 3);
                setCount((prev) => prev + increase);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [variant]);

    useEffect(() => {
        if (variant !== "success" && threatLevel && count >= threatLevel) {
            setIsError(true);
            setShake(true);
        }
        else {
            setIsError(false)
            setShake(false)
        }
    }, [count, threatLevel, variant]);

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
                            "text-green-500": variant === "success",  // Apply green color when success variant
                            "text-red-500": isError && variant !== "success", // Apply red color in error state if not success
                            "text-blue-500": !isError && variant !== "success",  // Default text color
                        })}
                        initial={{ scale: 1.2, opacity: 1 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {count}
                    </motion.span>
                </div>

                {/* Alert Display - Typing */}
                {
                    variant === "default" ? <div className="min-h-[24px] overflow-hidden relative">
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
                    </div> : null
                }
            </Card>
        </motion.div>
    );
};

export default AlertSummaryCard;
