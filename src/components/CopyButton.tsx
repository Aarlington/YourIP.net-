import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <button
      onClick={() => copyToClipboard(text)}
      className={`p-2 hover:bg-white/10 rounded-lg transition-colors ${className}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
}