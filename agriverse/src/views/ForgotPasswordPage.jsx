import React, { useState } from 'react';

export default function ForgotPasswordPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
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
          <h2 className="text-3xl font-black mb-4">Reset Your Access</h2>
          <p className="opacity-90 leading-relaxed mb-6">
            Input your registered email address and we'll dispatch password recovery instructions right to your inbox.
          </p>
        </div>
        <div className="relative z-10 text-xs opacity-60">
          © 2026 AgriVerse. Security protocols active.
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-grow bg-surface-container-lowest flex items-center justify-center py-12 px-6 md:p-16 overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="md:hidden flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('landing')}>
            <span className="material-symbols-outlined text-primary text-3xl font-bold">agriculture</span>
            <span className="text-2xl font-bold text-primary">AgriVerse</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-on-surface mb-2">Recover Password</h2>
            <p className="text-outline">Verify your identity to choose a new password.</p>
          </div>

          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm relative overflow-hidden">
            {isSuccess ? (
              <div className="text-center py-6 space-y-4">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="text-lg font-bold text-on-surface">Instructions Dispatched</h3>
                <p className="text-xs text-outline leading-relaxed">
                  We sent a recovery link to <strong>{email}</strong>. Check your inbox and spam folders to reset your password.
                </p>
                <button 
                  onClick={() => onNavigate('login')}
                  className="w-full py-3 bg-primary text-on-primary font-bold rounded-xl text-xs hover:bg-primary/95 transition-all cursor-pointer"
                >
                  Return to Sign In
                </button>
              </div>
            ) : (
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

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-md hover:bg-primary/95 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Requesting link...' : 'Send Recovery Instructions'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-outline">
            Remembered details?{' '}
            <button onClick={() => onNavigate('login')} className="text-primary font-bold hover:underline cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
