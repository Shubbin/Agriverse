import React, { useState } from 'react';

export default function RegistrationPage({ onNavigate, onRegisterSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onRegisterSuccess(name);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column Design Details */}
      <div className="hidden md:flex md:w-[50%] bg-primary relative p-12 flex-col justify-between text-on-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClQDRQr-7t3ROk5OtCdl72QeW5DahAsJjfb7AgQzrXbjBOonyITqj9UCsvFTnBeXoyX1xTW66cXlKe_-XXx3aREuuFrY9bPU6JcUsjWsxDrsdKoY6TleXneNCi-VaytRTB0RIhxpkduf94yHCr2qrCwdgk_7VWbLkYAjE0oDIgnoRYJ7ZRxLM-kI2i1JdMxoLPcBiPnvTpGF-0-yOv4rrKNoUXhn6nSxXN1VEmsq96CuyGjWQJ1PjHW_6kqgJSp2Ek8ryYz3YlcaA" 
            alt="Greenhouse crops"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-primary/60"></div>
        </div>

        <div className="relative z-10 flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <span className="material-symbols-outlined text-3xl text-white">agriculture</span>
          <span className="text-2xl font-bold text-white">AgriVerse</span>
        </div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Join the Digital Agriculture Pipeline.</h2>
          <p className="opacity-90 leading-relaxed mb-8">
            Build a digital profile trusted by financial institutions. Sync with 3MTT, trade securely, and access startup and expansion credit via OPay.
          </p>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span className="text-sm font-semibold">3MTT Course Integration & Badges</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-xl">payments</span>
              <span className="text-sm font-semibold">OPay Wallet Disbursements</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-xl">shield</span>
              <span className="text-sm font-semibold">Bank-grade data encryption & privacy</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs opacity-60">
          © 2026 AgriVerse. All rights reserved.
        </div>
      </div>

      {/* Right Column Form */}
      <div className="flex-1 bg-surface-container-lowest flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="md:hidden flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('landing')}>
            <span className="material-symbols-outlined text-primary text-3xl font-bold">agriculture</span>
            <span className="text-2xl font-bold text-primary">AgriVerse</span>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-on-surface mb-2">Create Account</h2>
            <p className="text-outline">Start your path to a verified, bankable agropreneur.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-on-surface-variant block mb-1">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">person</span>
                <input 
                  required
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Samuel Olamide"
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-on-surface-variant block mb-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="samuel@agriverse.com"
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-on-surface-variant block mb-1">Phone Number (linked to OPay)</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">call</span>
                <input 
                  required
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 800 000 0000"
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <p className="text-[10px] text-tertiary mt-1 font-semibold">Your phone number will be verified with your OPay wallet for secure payments.</p>
            </div>

            <div>
              <label className="text-xs font-bold text-on-surface-variant block mb-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30 flex items-start gap-2">
              <span className="material-symbols-outlined text-tertiary-container mt-0.5">info</span>
              <div className="text-xs text-on-surface-variant leading-relaxed">
                <p className="font-semibold text-on-surface">Verification Info</p>
                Verification via 3MTT automatically pulls your current course credits and credentials.
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-md hover:bg-primary/95 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                <>
                  Create Free Account
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-outline">
            Already have an account?{' '}
            <button onClick={() => onNavigate('login')} className="text-primary font-bold hover:underline cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
