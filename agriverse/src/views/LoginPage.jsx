import React, { useState } from 'react';

export default function LoginPage({ onNavigate, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess(email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Decorative Sidebar */}
      <div className="hidden md:flex md:w-[45%] bg-primary relative p-12 flex-col justify-between text-on-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKeaQszqbMbzaoX9Vcg6h-fs1k3pfhjqMG5ve5Q4hIS8c49I0-YHD0876pmkiZCs-pBWp89yR54_LB9Gt4-3hpUNviYafHWvFdGYoDlrPCpiL6_kDaiFMyc96m9Nn2GrDxVS4VVDXoHI5vWvx6M-xkb9dXGT6lQw1r1ImOO0HR0QzEg_7pLahYImsqZ1T1dWQmu48MIefc5LetjDpsVT16WxwynecWZOm1W2wRRtwagU_bedfgva3culjCWImD0GueslHMbC00E1Y" 
            alt="Greenhouse farmer using tablet"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/40"></div>
        </div>
        
        <div className="relative z-10 flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <span className="material-symbols-outlined text-3xl text-white">agriculture</span>
          <span className="text-2xl font-bold text-white">AgriVerse</span>
        </div>
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl font-black mb-4">Empowering Productivity</h2>
          <p className="opacity-90 leading-relaxed mb-6">
            Log in to consult your Gemini Farm Guard, track your active market sales, and check your credit status with OPay.
          </p>
          <div className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <p className="text-sm font-semibold italic">"94% of AgriVerse partners reported faster credit approval using our verified smart contracts."</p>
          </div>
        </div>
        <div className="relative z-10 text-xs opacity-60">
          © 2026 AgriVerse. Bank-grade security standards.
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 bg-surface-container-lowest flex items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-md">
          <div className="md:hidden flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('landing')}>
            <span className="material-symbols-outlined text-primary text-3xl font-bold">agriculture</span>
            <span className="text-2xl font-bold text-primary">AgriVerse</span>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-on-surface mb-2">Welcome Back</h2>
            <p className="text-outline">Access your smart agricultural pipeline account.</p>
          </div>

          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-secondary-container/20 px-4 py-1.5 rounded-full border border-secondary-container/40">
                <span className="material-symbols-outlined text-secondary text-base">verified_user</span>
                <span className="text-on-secondary-container text-xs font-semibold uppercase tracking-wider">Secure Portal</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-on-surface-variant block mb-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farmer@agriverse.com"
                    className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-on-surface-variant block">Password</label>
                  <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                  <input 
                    required
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="rem" className="rounded text-primary focus:ring-primary/20" />
                <label htmlFor="rem" className="text-xs text-outline cursor-pointer select-none">Remember this device</label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-md hover:bg-primary/95 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying details...
                  </span>
                ) : (
                  <>
                    Sign In
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-outline">
            Don't have an account?{' '}
            <button onClick={() => onNavigate('register')} className="text-primary font-bold hover:underline cursor-pointer">
              Apply for Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
