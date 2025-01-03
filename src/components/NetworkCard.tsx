import React from 'react';
import { CopyButton } from './CopyButton';

interface NetworkCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
  copyable?: boolean;
}

export function NetworkCard({ icon, title, value, className = '', copyable = false }: NetworkCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-500/20 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-white mt-1">{value}</p>
            {copyable && <CopyButton text={value.toString()} />}
          </div>
        </div>
      </div>
    </div>
  );
}