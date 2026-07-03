import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface px-6 pt-16 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-outline/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white text-3xl">agriculture</span>
            <span className="text-2xl font-extrabold text-white tracking-tight">AgriVerse</span>
          </div>
          <p className="text-sm opacity-60">Verified, Credit-Ready, and Bankable Entrepreneurs.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-white">Platform</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><span className="hover:underline cursor-pointer" onClick={() => onNavigate('register')}>Learning Hub</span></li>
              <li><span className="hover:underline cursor-pointer" onClick={() => onNavigate('login')}>Marketplace</span></li>
              <li><span className="hover:underline cursor-pointer" onClick={() => onNavigate('login')}>Credit Readiness</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Partners</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>3MTT Program</li>
              <li>OPay Payment Services</li>
              <li>Federal Ministry of Communications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>About Us</li>
              <li>Support Desk</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <p className="text-sm opacity-70">info@agriverse.ng</p>
            <p className="text-sm opacity-70 mt-2">Kaduna & Lagos, Nigeria</p>
          </div>
        </div>
        <div className="text-center text-xs opacity-50 pt-4">
          © 2026 AgriVerse. All rights reserved. Secure transactions powered by OPay Escrow.
        </div>
      </div>
    </footer>
  );
}
