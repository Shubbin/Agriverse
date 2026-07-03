import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function LandingPage({ onNavigate }) {
  return (
    <>
      <Header onNavigate={onNavigate} />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-end items-start px-6 md:px-12 pb-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAr0tNm3O97HzjCY4dbNkmqZy9tTAX4bCqyc0EK-kvpGEEXnDaSXbsSnSU-xjiAIGbF6kbY3MVoZax4tL8X9Ai9UXq3TIEnDWecyZnQwsqXyaeKrgtU7OXH8KQUdLZLk2ol0JwH-xDogqH1q1RCGDS6E7wewivIPBYemLvgsckEurBY0Iyd4m91-piKL4QDAIz2NIsbwm61W3pvtzifUkpIEUWIAIbN7aXBBCXOgcQLMN_WMWoBuy2dpqfKDvaqYx67c0yWcrCmU" 
              alt="Proud African farmer standing in a lush field"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-outline-variant shadow-xl">
            <span className="inline-block px-3 py-1 mb-4 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
              Bankable Agriculture
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface mb-4 leading-tight">
              Transform Your Farming into a <span className="text-primary">Bankable Business.</span>
            </h1>
            <p className="text-base md:text-lg text-outline mb-6 leading-relaxed">
              The digital pipeline for the modern African farmer. Learn 3MTT modules, monitor crop health with Gemini AI, secure trade with OPay Escrow, and access expansion credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button 
                onClick={() => onNavigate('register')}
                className="flex-1 bg-primary text-on-primary py-4 rounded-xl font-bold shadow-lg hover:bg-primary/95 active:scale-95 transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer"
              >
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={() => onNavigate('login')}
                className="flex-1 bg-white border border-outline-variant py-4 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container-low active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Go to Portal Dashboard
              </button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-surface-container-low px-6 py-8 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-primary">50,000+</div>
              <div className="text-xs text-outline font-semibold uppercase tracking-widest mt-1">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-tertiary">₦2.4 Billion</div>
              <div className="text-xs text-outline font-semibold uppercase tracking-widest mt-1">Credit Disbursed</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">98%</div>
              <div className="text-xs text-outline font-semibold uppercase tracking-widest mt-1">Repayment Rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-secondary">3MTT</div>
              <div className="text-xs text-outline font-semibold uppercase tracking-widest mt-1">Academic Partner</div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-2">A Complete Ecosystem</h2>
            <p className="text-outline">Empowering every stage of your agricultural entrepreneurship pipeline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Learning Hub Card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-primary transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <span className="bg-primary-fixed/20 text-on-primary-fixed-variant text-xs font-bold px-2 py-1 rounded">3MTT Aligned</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">Learning Hub</h3>
                <p className="text-sm text-outline leading-relaxed">
                  Master precision farming, crop health, soil preparation, and financial management with localized micro-courses under 5 minutes.
                </p>
              </div>
              <div onClick={() => onNavigate('register')} className="mt-6 text-primary font-bold flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform">
                Start Learning <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>

            {/* Gemini AI Card */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              <div className="absolute -right-10 -top-10 opacity-5">
                <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary-fixed-dim/20 rounded-xl text-primary-fixed-dim">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <span className="bg-[#2F80ED]/20 text-white text-xs font-bold px-2 py-1 rounded border border-[#2F80ED]/30">GEMINI POWERED</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gemini AI Farm Guard</h3>
                <p className="text-sm text-inverse-on-surface/80 leading-relaxed">
                  Instant crop disease diagnosis via photo upload. Get actionable recommendations in local languages like Yoruba, Hausa, Igbo, or Pidgin.
                </p>
              </div>
              <div onClick={() => onNavigate('login')} className="mt-6 text-primary-fixed-dim font-bold flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform">
                Consult Gemini <span className="material-symbols-outlined text-sm">spark</span>
              </div>
            </div>

            {/* Secure Marketplace */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-secondary transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary-container/20 rounded-xl text-secondary">
                    <span className="material-symbols-outlined text-3xl">storefront</span>
                  </div>
                  <span className="bg-secondary-fixed/30 text-on-secondary-fixed-variant text-xs font-bold px-2 py-1 rounded">OPay Escrow</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">Secure Marketplace</h3>
                <p className="text-sm text-outline leading-relaxed">
                  Buy premium seeds or sell your harvests directly to enterprise buyers. OPay escrow protection keeps funds secure until delivery is verified.
                </p>
              </div>
              <div onClick={() => onNavigate('register')} className="mt-6 text-secondary font-bold flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform">
                Explore Marketplace <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="px-6 py-20 bg-primary text-on-primary text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to scale your agricultural business?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join over 50,000 farmers who are securing their financial future with data-driven precision farming.
            </p>
            <div className="inline-block w-full max-w-md">
              <button 
                onClick={() => onNavigate('register')}
                className="w-full bg-white text-primary py-4 px-8 rounded-xl font-bold text-lg shadow-2xl hover:bg-surface-container-low transition-all duration-200 cursor-pointer"
              >
                Create Free Account
              </button>
              <p className="mt-3 text-xs opacity-75">No setup fees. Free access to basic learning modules.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
