import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function WhoisSearch() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // fix/setup
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">WHOIS Lookup</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name..."
          className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
        >
          <Search size={18} />
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
}
