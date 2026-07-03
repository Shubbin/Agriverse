import React from 'react';

export default function Header({ onNavigate }) {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-outline-variant">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <span className="material-symbols-outlined text-primary text-3xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>agriculture</span>
          <span className="text-2xl font-bold text-primary tracking-tight">AgriVerse</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('login')}
            className="px-4 py-2 text-primary font-semibold hover:bg-surface-container-low rounded-lg transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
          <button 
            onClick={() => onNavigate('register')}
            className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-primary/95 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
