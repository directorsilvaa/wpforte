import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalDuration = 1000; // 1 second in milliseconds
    const intervalDuration = totalDuration / 100; // Time for each 1% progress

    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
        }, 200);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center px-4 sm:hidden">
      {/* Logo Animation */}
      <div className="relative mb-8">
        <Shield className="h-12 w-12 text-brand-red animate-pulse" />
        <div className="absolute inset-0 bg-brand-red/20 rounded-full blur animate-pulse" />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs bg-gray-900 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-red to-red-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(213,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(213,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          mask: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-red/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`,
            opacity: 0.1 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
}