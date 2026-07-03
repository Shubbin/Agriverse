import React from 'react';

export default function DashboardPage({ userName, onNavigate, onOpenAi }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-outline-variant w-full sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div onClick={() => onNavigate('landing')} className="relative cursor-pointer active:scale-95 transition-transform">
              <img 
                className="w-10 h-10 rounded-full border-2 border-primary-fixed" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF4Wt3LyC-JYlHCElzPGcwQxs8N4h88i4Bsm1nxRysL6KgYQBlWXRRPTL-36OHhmsufyZHWFnGfC1ZyEQvAk0PHQiYOwV_TbBkdNBqXxCrhK7Q8y16YRaL0uedlliWZzDL5wSdT2pZAerKjrZXzK4YTOhNZvAsH6zLV2922xX6Jd0Hlt4QxpC67-JZHodmIcFulHYDFj2IQ8CKxB-y46ilega2q9gmUS--Hz8XUAlS4vU497XvFua3hGZtomnTF6z-UwNImV41qtw" 
                alt="Farmer profile avatar"
              />
              <div className="absolute -bottom-1 -right-1 bg-tertiary-fixed rounded-full p-0.5 shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <h1 className="text-xl font-black text-primary">AgriVerse Portal</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-on-surface-variant hover:bg-slate-100 p-2 rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button 
              onClick={() => onNavigate('landing')}
              className="hidden md:flex items-center gap-1 px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-lg transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 max-w-7xl mx-auto w-full flex-grow space-y-6">
        {/* Greeting */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Hello, {userName}</h2>
              <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified Farmer
              </span>
            </div>
            <p className="text-sm text-outline mt-1">Here is what's happening at your farm in Kaduna today.</p>
          </div>
          <button 
            onClick={onOpenAi}
            className="bg-[#2F80ED] text-white px-4 py-2.5 rounded-xl font-bold shadow-md hover:bg-[#2F80ED]/95 flex items-center gap-2 text-sm active:scale-95 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Ask Gemini AI Guard
          </button>
        </section>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Progress Card */}
          <div className="bento-card p-6 rounded-2xl flex items-center justify-between">
            <div className="space-y-2 flex-grow pr-4">
              <p className="text-xs font-bold text-outline uppercase tracking-wider">3MTT Course Progress</p>
              <p className="text-2xl font-black text-on-surface">80% Completed</p>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[80%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-outline">Complete 1 more module to qualify for loan upgrades.</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
          </div>

          {/* Credit Score Card */}
          <div className="bento-card p-6 rounded-2xl flex items-center justify-between border-l-4 border-l-tertiary">
            <div className="space-y-1">
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Credit Readiness Score</p>
              <p className="text-3xl font-black text-tertiary">720</p>
              <div className="inline-block px-2 py-0.5 bg-tertiary/10 text-tertiary text-xs font-bold rounded-full">
                Gold status
              </div>
              <p className="text-[10px] text-outline mt-2">Active loan limit: ₦250,000 via OPay.</p>
            </div>
            <div className="bg-tertiary-container/10 p-4 rounded-xl text-tertiary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
          </div>

          {/* Active Orders Card */}
          <div className="bento-card p-6 rounded-2xl flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-outline uppercase tracking-wider">Active Produce Orders</p>
              <p className="text-3xl font-black text-secondary">2 Orders</p>
              <div className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                In Escrow transit
              </div>
              <p className="text-[10px] text-outline mt-2">₦85,000 locked in OPay Escrow.</p>
            </div>
            <div className="bg-secondary-container/20 p-4 rounded-xl text-secondary">
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            </div>
          </div>
        </section>

        {/* Main Dashboard Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Feed & Market */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Weather Advisory Card */}
            <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute right-4 top-4 text-[#2F80ED]/10">
                <span className="material-symbols-outlined text-[100px]">rainy</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200">
                  Weather Advisory
                </span>
                <span className="text-xs text-outline font-semibold">Updated 10m ago</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Heavy Rainfall Forecasted</h3>
              <p className="text-sm text-outline leading-relaxed max-w-xl mb-4">
                Expect 25mm precipation in Kaduna area over the next 48 hours. Maize crops at silage stage are at risk of root rot. Inspect field drainage blocks.
              </p>
              <div className="flex gap-4 pt-4 border-t border-slate-100 text-sm">
                <div className="flex items-center gap-1 text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-base">thermostat</span>
                  24°C Average
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-base">water_drop</span>
                  82% Humidity
                </div>
              </div>
            </div>

            {/* Live Market Prices */}
            <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-on-surface">Wholesale Commodity Market</h3>
                <span className="text-primary font-semibold text-xs flex items-center gap-1 bg-primary/5 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  OPay Escrow Live Data
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">grass</span>
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">White Maize (100kg bag)</p>
                      <p className="text-xs text-outline">Kaduna Central Market</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-on-surface text-sm">₦38,500</p>
                    <p className="text-xs text-primary font-bold flex items-center justify-end gap-0.5">
                      <span className="material-symbols-outlined text-xs">trending_up</span> +2.4%
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">Long Grain Rice (50kg bag)</p>
                      <p className="text-xs text-outline">Kano Market</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-on-surface text-sm">₦54,000</p>
                    <p className="text-xs text-red-600 font-bold flex items-center justify-end gap-0.5">
                      <span className="material-symbols-outlined text-xs">trending_down</span> -0.8%
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">nutrition</span>
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">Cassava Tuber (per ton)</p>
                      <p className="text-xs text-outline">Ogun Market</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-on-surface text-sm">₦120,000</p>
                    <p className="text-xs text-primary font-bold flex items-center justify-end gap-0.5">
                      <span className="material-symbols-outlined text-xs">trending_up</span> +1.7%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Quick Panel & Loans */}
          <div className="space-y-6">
            
            {/* Loan Offer Banner */}
            <div className="bg-gradient-to-br from-tertiary to-tertiary-container text-white p-6 rounded-2xl shadow-md border border-amber-500/20 relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-20px] opacity-10">
                <span className="material-symbols-outlined text-[120px]">account_balance</span>
              </div>
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                Exclusive Offer
              </span>
              <h3 className="text-lg font-bold mb-1">₦250,000 Expansion Loan</h3>
              <p className="text-xs opacity-90 mb-4">
                Based on your 3MTT score & OPay consistency. Pre-approved for instant disbursement.
              </p>
              <button 
                onClick={() => alert("Expansion loan application submitted via OPay secure portal.")}
                className="w-full bg-white text-tertiary py-2.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition-colors active:scale-95 cursor-pointer"
              >
                Apply in 1-Click via OPay
              </button>
            </div>

            {/* Gemini AI Farm Guard Widget */}
            <div className="bg-white border border-[#2F80ED]/30 p-6 rounded-2xl shadow-sm hover:border-[#2F80ED] transition-colors relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#2F80ED] mb-3">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="font-bold text-sm uppercase tracking-wider">Gemini Farm Guard</span>
              </div>
              <h4 className="font-bold text-on-surface text-sm mb-1">Need help diagnosing a crop disease?</h4>
              <p className="text-xs text-outline mb-4">
                Upload a leaf photo or type a question about crop spacing, fertilizer, or rainfall forecasts.
              </p>
              <button 
                onClick={onOpenAi}
                className="w-full bg-[#2F80ED]/10 text-[#2F80ED] hover:bg-[#2F80ED]/15 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Open AI Chat Assistant
                <span className="material-symbols-outlined text-sm">chat</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile Native feel) */}
      <nav className="bg-white fixed bottom-0 w-full z-45 rounded-t-xl border-t border-outline-variant shadow-lg md:max-w-md md:left-1/2 md:-translate-x-1/2 md:bottom-2">
        <div className="flex justify-around items-center py-2">
          <a href="#" className="flex flex-col items-center text-primary font-semibold px-4 py-1.5 rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="text-[10px] mt-0.5">Home</span>
          </a>
          <a href="#" onClick={() => { alert("3MTT Modules loaded. Starting course 'Maize Precision Sowing'.") }} className="flex flex-col items-center text-outline hover:text-primary px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-xl">school</span>
            <span className="text-[10px] mt-0.5">Learning</span>
          </a>
          <a href="#" onClick={() => { alert("Opening Marketplace. Browse pesticide inputs & fertilizers.") }} className="flex flex-col items-center text-outline hover:text-primary px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-xl">storefront</span>
            <span className="text-[10px] mt-0.5">Market</span>
          </a>
          <a href="#" onClick={() => { alert("OPay Wallet: Balance ₦24,800. Active Credit score: 720.") }} className="flex flex-col items-center text-outline hover:text-primary px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
            <span className="text-[10px] mt-0.5">Wallet</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
