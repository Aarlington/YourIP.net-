import { useState, useEffect } from 'react';

interface SystemInfo {
  browser: string;
  os: string;
  ip: string;
}

export function useSystemInfo() {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>({
    browser: 'Loading...',
    os: 'Loading...',
    ip: 'Loading...',
  });

  useEffect(() => {
    // Get browser and OS info
    const userAgent = window.navigator.userAgent;
    const browser = getBrowserInfo(userAgent);
    const os = getOSInfo(userAgent);

    // Get IP address
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        setSystemInfo({
          browser,
          os,
          ip: data.ip,
        });
      })
      .catch(() => {
        setSystemInfo({
          browser,
          os,
          ip: 'Failed to load',
        });
      });
  }, []);

  return systemInfo;
}

function getBrowserInfo(userAgent: string): string {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Unknown Browser';
}

function getOSInfo(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Unknown OS';
}