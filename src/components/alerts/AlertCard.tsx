import React from 'react';
import clsx from 'clsx';

interface AlertCardProps {
  title?: string;
  icon: React.ReactNode;
  subTitle: string;
  variant?: "error" | "success" | "default";
}

const AlertCard: React.FC<AlertCardProps> = ({ title, icon, subTitle, variant = "default" }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          'p-2 rounded-md backdrop-blur-md ring-1 ring-black/5',
          {
            'bg-red-500/5': variant === "error",
            'bg-green-500/5': variant === "success",
            'bg-white/5': variant === "default",
          }
        )}
      >
        {icon}
      </div>
      <div className={`flex flex-col gap-0.5  text-white/70`}>
        {title && <div className="font-semibold text-xs">{title}</div>}
        <div className={clsx(title ? 'text-[10px] font-light' : 'text-xs font-medium')}>
          {subTitle}
        </div>
      </div>
    </div >
  );
};

export default AlertCard;
