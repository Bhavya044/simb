import React from 'react';
import AlertCard from '../alerts/AlertCard';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Triaged & Reported',
    description: 'SOC Agent handled investigation and reporting',
    icon: '✓',
  },
  {
    title: 'Less noise',
    description: '90% of alerts resolved automatically, 24/7',
    icon: '🔇',
  },
  {
    title: 'Holistic insight',
    description: 'Correlate alerts and your environment into the big picture',
    icon: '🔍',
  },
  {
    title: 'Adapts automatically',
    description: 'No SOAR needed. Investigate every alert.',
    icon: '🤖',
  },
];

const WithSimbian = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <h2 className="text-4xl font-bold text-white mb-8">With Simbian</h2>

      {/* Step Flow */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-900/30 p-6 rounded-lg relative"
            >
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-blue-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  →
                </motion.div>
              )}
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AlertCard
          title="Ignored Alerts"
          count={0}
          icon={<CheckIcon />}
          alerts={[]}
          variant="with"
        />
        <AlertCard
          title="Wrongly Closed"
          count={0}
          icon={<CheckIcon />}
          alerts={[]}
          variant="with"
        />
        <AlertCard
          title="Active Threats"
          count={0}
          icon={<CheckIcon />}
          alerts={[]}
          variant="with"
        />
      </div>
    </motion.div>
  );
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default WithSimbian; 