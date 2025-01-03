import React, { useState } from 'react';
import { Activity } from 'lucide-react';

export function LatencyTest() {
  const [latency, setLatency] = useState<number | null>(null);
  const [testing, setTesting] = useState(false);

  const testLatency = () => {
    setTesting(true);
    const start = performance.now();
    
    // Simulate a network request
    fetch('https://api.github.com/zen')
      .then(() => {
        const end = performance.now();
        setLatency(Math.round(end - start));
        setTesting(false);
      })
      .catch(() => {
        setTesting(false);
      });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Latency Test</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={testLatency}
          disabled={testing}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
        >
          <Activity size={18} />
          {testing ? 'Testing...' : 'Test Latency'}
        </button>
        {latency !== null && (
          <span className="text-white">
            Latency: <strong>{latency}ms</strong>
          </span>
        )}
      </div>
    </div>
  );
}