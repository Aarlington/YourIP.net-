import React from 'react';
import { Globe2, Monitor } from 'lucide-react';
import { NetworkCard } from './components/NetworkCard';
import { WhoisSearch } from './components/WhoisSearch';
import { LatencyTest } from './components/LatencyTest';
import { useSystemInfo } from './hooks/useSystemInfo';

export default function App() {
  const { ip, browser, os } = useSystemInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Network Tools</h1>
          <p className="text-gray-400">Your complete network information dashboard</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <NetworkCard
            icon={<Globe2 className="w-6 h-6 text-indigo-400" />}
            title="Your IP Address"
            value={ip}
            copyable={true}
          />
          <NetworkCard
            icon={<Monitor className="w-6 h-6 text-indigo-400" />}
            title="Browser"
            value={browser}
          />
          <NetworkCard
            icon={<Monitor className="w-6 h-6 text-indigo-400" />}
            title="Operating System"
            value={os}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WhoisSearch />
          <LatencyTest />
        </div>
      </div>
    </div>
  );
}