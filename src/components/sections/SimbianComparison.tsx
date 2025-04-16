import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../UI/Card';
import AlertCard from '../alerts/AlertCard';
import { ClockIcon } from '../UI/Icons/ClockIcon';
import { CrossIcon } from '../UI/Icons/CrossIcon';
import { MonitorIcon } from '../UI/Icons/MonitorIcon';
import { TerminalIcon } from '../UI/Icons/TerminalIcon';
import { ChatGPTIcon } from '../UI/Icons/ChatGPTIcon';
import { UserIcon } from '../UI/Icons/UserIcon';
import { BellIcon } from '../UI/Icons/BellIcon';
import { AlertIcon } from '../UI/Icons/AlertIcon';
import { CheckmarkIcon } from '../UI/Icons/CheckmarkIcon';
import { InsightIcon } from '../UI/Icons/InsightIcon';
import { JSONIcon } from '../UI/Icons/JSONIcon';
import HeroSection from '../HeroSection';
import Toolbar from '../Toolbar';
import ConnectingArrow from '../UI/Icons/ConnectingArrow';
import FadingArrowIcon from '../UI/Icons/FadingArrowIcon';
import AlertSummaryCard from '../alerts/AlertSummaryCard';
import { activeThreatsAlertsWS, ignoredAlertsWS, wronglyClosedAlertsWS } from '@/utils/util.helper';
import { useVisualMode } from '@/hooks/useVisualMode';

const withSimbianSteps = [
    {
        title: 'Triaged & Reported',
        description: 'SOC Agent handled investigation and reporting',
        icon: <CheckmarkIcon h={20} w={20} color="#58db3d" />,
    },
    {
        title: 'Less noise',
        description: '90% of alerts resolved automatically, 24/7',
        icon: <UserIcon h={20} w={20} color="#58db3d" />,
    },
    {
        title: 'Holistic insight',
        description: 'Correlate alerts and your environment into the big picture',
        icon: <InsightIcon h={20} w={20} color="#58db3d" />,
    },
    {
        title: 'Adapts automatically',
        description: 'No SOAR needed. Investigate every alert.',
        icon: <JSONIcon h={20} w={20} color="#58db3d" />,
    },
];

const withoutSimbianCards = [
    {
        subTitle: "Wasting valuable analyst time on false positives",
        icon: <CrossIcon color="red" />
    },
    {
        subTitle: "Processing one alert at a time, missing the big picture",
        icon: <MonitorIcon color="red" />
    },
    {
        subTitle: "More time fixing SOAR automation, less time on real threats",
        icon: <ClockIcon color="red" />
    }
];

const STATUS_MESSAGES = [
    {
        title: 'Waiting for Analyst',
        description: 'Analyst is dealing with other problems, hold on...',
        icon: <ClockIcon color={"#ababab"} />
    },
    {
        title: 'Writing Query',
        description: 'Querying across so many tools gets complex...',
        icon: <TerminalIcon color={"#ababab"} />
    },
    {
        title: 'Asking ChatGPT..',
        description: 'What does this powershell command even mean?',
        icon: <ChatGPTIcon />
    },
    {
        title: 'Asking Supervisor..',
        description: 'The analyst is in training, let\'s see what they say',
        icon: <UserIcon color={"#ababab"} />
    },
    {
        title: 'Oops!',
        description: 'Mistook that one as a false positive. Youre only Human..',
        icon: <CrossIcon color={"#ababab"} />
    },
    {
        title: 'Missed it!',
        description: 'We have more alerts than time to triage them.',
        icon: <ClockIcon color={"#ababab"} />
    },
];

interface AlertSummaryCardProps {
    title: string;
    initialCount: number;
    icon: React.ReactElement;
    variant?: "success" | "default";
    threatLevel?: number;
    alerts?: string[];
}

const SimbianComparison = () => {
    const visualMode = useVisualMode();
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

    useEffect(() => {
        if (visualMode === 'withoutSimbian') {
            const interval = setInterval(() => {
                setCurrentStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [visualMode]);

    const alertSummaryCards: AlertSummaryCardProps[] = visualMode === 'withSimbian' ? [
        {
            title: "Ignored Alerts",
            initialCount: 120,
            icon: <BellIcon h={20} w={20} color="#ababab" />,
            variant: "success"
        },
        {
            title: "Wrongly Closed",
            initialCount: 10,
            icon: <CrossIcon h={20} w={20} color="#ababab" />,
            variant: "success"
        },
        {
            title: "Active Threats",
            initialCount: 5,
            icon: <AlertIcon h={20} w={20} color="#ababab" />,
            variant: "success"
        }
    ] : [
        {
            title: "Ignored Alerts",
            initialCount: 200,
            icon: <BellIcon h={20} w={20} color="#ababab" />,
            threatLevel: 220,
            alerts: ignoredAlertsWS
        },
        {
            title: "Wrongly Closed",
            initialCount: 23,
            icon: <CrossIcon h={20} w={20} color="#ababab" />,
            threatLevel: 40,
            alerts: wronglyClosedAlertsWS
        },
        {
            title: "Active Threats",
            initialCount: 5,
            icon: <AlertIcon h={20} w={20} color="#ababab" />,
            threatLevel: 8,
            alerts: activeThreatsAlertsWS
        }
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 min-h-screen">
            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-16 relative">
                <div className={`col-span-1 lg:col-span-2 ${visualMode === 'withSimbian' ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <HeroSection />
                    <div className='flex flex-col gap-4 mt-6 lg:mt-10'>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={visualMode}
                                initial={{ x: (visualMode === 'withSimbian' ? 1 : -1) * 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: (visualMode === 'withSimbian' ? 1 : -1) * -100, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                                className="flex flex-col gap-4 mt-6 lg:mt-10"
                            >
                                {alertSummaryCards.map((card, index) => (
                                    <AlertSummaryCard
                                        key={index}
                                        title={card.title}
                                        initialCount={card.initialCount}
                                        icon={card.icon}
                                        variant={card.variant}
                                        threatLevel={visualMode === 'withSimbian' ? 0 : card.threatLevel}
                                        alerts={visualMode === 'withSimbian' ? undefined : card.alerts}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>


                    </div>
                </div>

                <div className={`gap-6 lg:gap-14 col-span-1 lg:col-span-3 ${visualMode === 'withSimbian' ? 'order-2' : 'order-2 lg:order-1'} justify-between flex`}>
                    {visualMode === 'withSimbian' ? (
                        <div className="col-span-1 mt-6 lg:mt-19 lg:flex hidden flex-col justify-start items-center gap-6 lg:gap-6">
                            <Toolbar />
                            <FadingArrowIcon />
                        </div>
                    ) : null}
                    <div className="grid grid-cols-1 lg:grid-cols-20 justify-between w-full h-full">
                        <div className="col-span-1 lg:col-span-19 mt-6 lg:mt-45 relative">
                            <div className="relative h-[100px] overflow-hidden">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={currentStatusIndex}
                                        className="absolute w-full h-full"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{
                                            duration: 0.1,
                                            ease: [0.4, 0, 0.2, 1],
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                        }}
                                    >
                                        <div className="relative grid grid-cols-4 gap-0 w-full">
                                            {visualMode === 'withSimbian' ? (
                                                <>
                                                    <div className="absolute hidden rotate-90 top-1/2 left-0 right-[100%] -translate-y-1/2 z-20 lg:flex items-center justify-between pr-4">
                                                        <div className="relative min-w-[12px]">
                                                            <div className="h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
                                                            <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 opacity-75"></div>
                                                        </div>
                                                        <ConnectingArrow bgColor="bg-[#58db3d]/30" className="w-full h-auto rotate-90" />
                                                    </div>
                                                    <Card className="relative z-10 col-span-3">
                                                        <AlertCard
                                                            title={withSimbianSteps[0].title}
                                                            icon={withSimbianSteps[0].icon}
                                                            subTitle={withSimbianSteps[0].description}
                                                        />
                                                    </Card>
                                                </>
                                            ) : (
                                                <>
                                                    <Card className="relative z-10 col-span-3">
                                                        <AlertCard
                                                            title={STATUS_MESSAGES[currentStatusIndex].title}
                                                            icon={STATUS_MESSAGES[currentStatusIndex].icon}
                                                            subTitle={STATUS_MESSAGES[currentStatusIndex].description}
                                                        />
                                                    </Card>
                                                    <div className="absolute hidden top-1/2 left-[75%] right-0 -translate-y-1/2 z-20 lg:flex items-center justify-between pr-4">
                                                        <div className="relative min-w-[12px]">
                                                            <div className="h-3 w-3 rounded-full bg-blue-500 animate-ping"></div>
                                                            <div className="absolute inset-0 h-3 w-3 rounded-full bg-blue-500 opacity-75"></div>
                                                        </div>
                                                        <ConnectingArrow className="w-full h-auto" />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col gap-3">
                                {visualMode === 'withSimbian' ? (
                                    withSimbianSteps.slice(1).map((step, index) => (
                                        <Card key={index} className="w-full lg:w-sm">
                                            <AlertCard
                                                title={step.title}
                                                subTitle={step.description}
                                                icon={step.icon}
                                                variant="success"
                                            />
                                        </Card>
                                    ))
                                ) : (
                                    withoutSimbianCards.map((card, index) => (
                                        <Card key={index} className="w-full lg:w-sm">
                                            <AlertCard
                                                subTitle={card.subTitle}
                                                icon={card.icon}
                                                variant="error"
                                            />
                                        </Card>
                                    ))
                                )}
                            </div>
                        </div>

                        {visualMode === 'withoutSimbian' ? (
                            <div className="col-span-1 mt-6 lg:mt-19 lg:flex hidden flex-col justify-start items-center gap-6 lg:gap-20">
                                <Toolbar />
                                <FadingArrowIcon />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SimbianComparison; 