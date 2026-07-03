import React from 'react';

export default function OnboardingPage({ onSelectPath, onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white border border-outline-variant p-8 rounded-3xl shadow-lg relative overflow-hidden">
        {/* Shimmers */}
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-secondary-container/10 blur-[60px]"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-4xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>agriculture</span>
            <span className="text-3xl font-black text-primary tracking-tight">AgriVerse</span>
          </div>
          <h2 className="text-3xl font-bold text-on-surface mb-2">Choose Your Pathway</h2>
          <p className="text-outline">
            Select a personalized agricultural pipeline track matching your current expertise level to tailor your dashboard and learning programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Beginner Track */}
          <div className="bg-slate-50 border border-outline-variant hover:border-primary p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-4xl">school</span>
                </div>
                <span className="bg-primary-container/20 text-on-primary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Beginner
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Beginner Track</h3>
              <p className="text-sm text-outline leading-relaxed mb-6">
                Designed for new crop growers. Focuses on soil health, irrigation basics, agricultural equipment handling, and initial startup loan qualifications.
              </p>
              <ul className="space-y-2 text-xs text-on-surface-variant font-medium mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Intro to Modern Agriculture
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Initial Loan Pre-approval (₦250k)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Basic Crop Disease Diagnosis
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onSelectPath('Beginner')}
              className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold hover:bg-primary/95 transition-all group-hover:scale-[1.02] cursor-pointer"
            >
              Select Beginner Path
            </button>
          </div>

          {/* Established Track */}
          <div className="bg-slate-50 border border-outline-variant hover:border-tertiary p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-tertiary/10 rounded-xl text-tertiary">
                  <span className="material-symbols-outlined text-4xl">trending_up</span>
                </div>
                <span className="bg-tertiary-container/20 text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Established
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Established Track</h3>
              <p className="text-sm text-outline leading-relaxed mb-6">
                Designed for commercial farmers seeking scaling. Focuses on climate-resilient farming, international export rules, advanced financial credit scores, and mechanical tools.
              </p>
              <ul className="space-y-2 text-xs text-on-surface-variant font-medium mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                  Climate-Smart Farming & Yield Maximizer
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                  OPay Expansion Credits (₦1M+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                  B2B Wholesale Produce Contracts
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onSelectPath('Established')}
              className="w-full bg-tertiary text-on-tertiary py-3.5 rounded-xl font-bold hover:bg-tertiary/95 transition-all group-hover:scale-[1.02] cursor-pointer"
            >
              Select Established Path
            </button>
          </div>
        </div>

        <div className="text-center mt-8 relative z-10 text-xs text-outline">
          Wrong account?{' '}
          <button onClick={() => onNavigate('landing')} className="text-primary font-bold hover:underline cursor-pointer">
            Logout and start over
          </button>
        </div>
      </div>
    </div>
  );
}
