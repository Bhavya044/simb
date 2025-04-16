"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../UI/Card';
import AlertCard from '../alerts/AlertCard';
import { ClockIcon } from '../UI/Icons/ClockIcon';
import { CrossIcon } from '../UI/Icons/CrossIcon';
import { MonitorIcon } from '../UI/Icons/MonitorIcon';
import { TerminalIcon } from '../UI/Icons/TerminalIcon';
import { ChatGPTIcon } from '../UI/Icons/ChatGPTIcon';
import { UserIcon } from '../UI/Icons/UserIcon';
import HeroSection from '../HeroSection';
import Toolbar from '../Toolbar';
import ConnectingArrow from '../UI/Icons/ConnectingArrow';



const DUMMY_ALERTS = [
  'Suspicious login attempt from 192.168.1.100',
  'Potential phishing email detected',
  'Multiple failed authentication attempts',
  'Unusual network traffic pattern detected',
  'Suspicious file download from external source',
  'Unauthorized access attempt blocked',
  'Malware signature detected in email attachment',
  'Abnormal user behavior detected',
];

type AlertType = 'ignored' | 'wrongly' | 'active';




const WithoutSimbAlertCards = [
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
]



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

const WithoutSimbian = () => {
  const [ignoredAlerts, setIgnoredAlerts] = useState(200);
  const [wronglyClosed, setWronglyClosed] = useState(35);
  const [activeThreats, setActiveThreats] = useState(5);
  const [alerts, setAlerts] = useState<Record<AlertType, string[]>>({
    ignored: [],
    wrongly: [],
    active: [],
  });
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase counts
      setIgnoredAlerts(prev => prev + Math.floor(Math.random() * 3));
      setWronglyClosed(prev => prev + Math.floor(Math.random() * 2));
      setActiveThreats(prev => prev + (Math.random() > 0.7 ? 1 : 0));

      // Add new random alerts
      const newAlert = DUMMY_ALERTS[Math.floor(Math.random() * DUMMY_ALERTS.length)];
      const targetSection = ['ignored', 'wrongly', 'active'][Math.floor(Math.random() * 3)] as AlertType;

      setAlerts(prev => ({
        ...prev,
        [targetSection]: [newAlert, ...prev[targetSection]].slice(0, 3)
      }));

      setCurrentStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-screen">


      <div className="grid grid-cols-5 gap-16 relative">
        <div className='gap-14 col-span-3 h-full'>
          <div className="grid grid-cols-20  justify-between w-full h-full">

            <div className="col-span-19 mt-45 relative">
              <div className="relative h-[150px] overflow-hidden">
                <AnimatePresence mode="popLayout" initial={true}>
                  <motion.div
                    key={currentStatusIndex}
                    className="absolute w-full h-full"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="relative grid grid-cols-4 gap-0 w-full">
                      <Card className="relative z-10 col-span-3">
                        <AlertCard
                          title={STATUS_MESSAGES[currentStatusIndex].title}
                          icon={STATUS_MESSAGES[currentStatusIndex].icon}
                          subTitle={STATUS_MESSAGES[currentStatusIndex].description}
                        />
                      </Card>

                      <div className="absolute top-1/2 left-[75%] right-0 -translate-y-1/2 z-20 flex items-center justify-between pr-4">
                        <div className="relative min-w-[12px]">
                          <div className="h-3 w-3 rounded-full bg-blue-500 animate-ping"></div>
                          <div className="absolute inset-0 h-3 w-3 rounded-full bg-blue-500 opacity-75"></div>
                        </div>
                        <ConnectingArrow className="w-full h-auto" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-3">
                {WithoutSimbAlertCards.map((card, index) => (
                  <Card key={index} className="w-sm">
                    <AlertCard subTitle={card.subTitle} icon={card.icon} variant="error" />
                  </Card>
                ))}
              </div>
            </div>

            {/* Toolbar Section */}
            <div className="col-span-1    mt-19 flex justify-start items-start">
              <Toolbar />
            </div>
          </div>


        </div>

        <div className='col-span-2'>
          <HeroSection />
        </div>
      </div >


    </div >
  );
};



// interface IconStripProps {
//   count: number;
// }

// const IconStrip: React.FC<IconStripProps> = ({ count }) => (
//   <div className="bg-[#1D1F2E] rounded-lg p-1.5 flex gap-1.5">
//     {[...Array(count)].map((_, i) => {
//       const icons = [<WindowIcon key="window" />, <PlaneIcon key="plane" />, <BoltIcon key="bolt" />, <UserIcon key="user" />];
//       const iconIndex = i % icons.length;
//       return (
//         <div
//           key={i}
//           className="w-7 h-7 bg-[#282B3A] rounded-lg flex items-center justify-center"
//         >
//           {icons[iconIndex]}
//         </div>
//       );
//     })}
//   </div>
// );

// const CubeIcon = () => (
//   <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );


// const AlertIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const WrongIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ThreatIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M10.29 3.86L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9961 3.53002 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5318 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );





// // New icon components for the toolbar
// const WindowIcon = () => (
//   <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
//     <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
//     <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
//   </svg>
// );

// const PlaneIcon = () => (
//   <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const BoltIcon = () => (
//   <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

export default WithoutSimbian; 