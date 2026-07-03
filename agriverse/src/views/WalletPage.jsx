import React, { useState } from 'react';

export default function WalletPage({ currentPath }) {
  const [activeLoanTab, setActiveLoanTab] = useState('status'); // 'status' | 'apply'
  const [requestedAmount, setRequestedAmount] = useState('150000');
  const [loanPurpose, setLoanPurpose] = useState('seeds');
  const [loans, setLoans] = useState([
    { id: 'LN-01', amount: '₦100,000', rate: '5% interest', status: 'Fully Paid', date: 'March 2026', type: 'Startup Loan' }
  ]);

  const transactions = [
    { id: 'TX-4521', desc: 'NPK 15:15:15 Fertilizer purchase', type: 'debit', amount: '-₦46,500', date: '28 June 2026' },
    { id: 'TX-4402', desc: 'White Maize wholesale payout', type: 'credit', amount: '+₦185,000', date: '24 June 2026' },
    { id: 'TX-4310', desc: 'OPay Startup Loan Disbursement', type: 'credit', amount: '+₦100,000', date: '01 March 2026' }
  ];

  const crsDetails = {
    totalScore: 720,
    status: 'Gold Status',
    breakdown: [
      { name: 'Professional Score (3MTT Module Progression)', weight: '30%', score: '92/100', color: 'bg-primary' },
      { name: 'Financial Consistency (OPay Transaction Habits)', weight: '30%', score: '88/100', color: 'bg-primary' },
      { name: 'Reputation Score (Buyer Ratings & Fulfillment)', weight: '20%', score: '95/100', color: 'bg-primary' },
      { name: 'AI Engagement (Gemini Consultations for Yield)', weight: '20%', score: '80/100', color: 'bg-primary' }
    ]
  };

  const handleApplyLoan = (e) => {
    e.preventDefault();
    const parsedAmount = parseInt(requestedAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return;

    const newLoan = {
      id: `LN-${Math.floor(10 + Math.random() * 90)}`,
      amount: `₦${parsedAmount.toLocaleString()}`,
      rate: '5% interest',
      status: 'Awaiting Disbursement',
      date: '03 July 2026',
      type: currentPath === 'Established' ? 'Expansion Loan' : 'Startup Loan'
    };

    setLoans([newLoan, ...loans]);
    setActiveLoanTab('status');
    alert(`Loan request of ₦${parsedAmount.toLocaleString()} submitted via OPay gateway. Processing Credit Readiness Score...`);
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface">OPay Wallet & Financial Services</h2>
          <p className="text-sm text-outline mt-1">Check OPay ledger balances, review your Credit Score, and manage loans.</p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Wallet Ledger & Transactions */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Wallet Balance Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg border border-slate-800">
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <span className="material-symbols-outlined text-[150px]">account_balance_wallet</span>
            </div>
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest font-semibold">Wallet Balance</p>
                <h3 className="text-3xl font-black mt-1">₦24,800.00</h3>
              </div>
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                OPay Live
              </span>
            </div>

            <div className="relative z-10 flex justify-between items-center text-xs opacity-80 pt-4 border-t border-white/10">
              <div>
                <p className="font-semibold text-white/50">OPay Account Number</p>
                <p className="font-mono text-sm mt-0.5">810 234 5678</p>
              </div>
              <button 
                onClick={() => alert("Redirecting to OPay top-up portal...")}
                className="bg-white text-slate-900 font-bold px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
              >
                Deposit Funds
              </button>
            </div>
          </div>

          {/* Credit Score Details */}
          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-on-surface">Credit Readiness Score (CRS)</h3>
                <p className="text-xs text-outline mt-0.5">Calculated using 3MTT and OPay activity logs.</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-tertiary">{crsDetails.totalScore}</span>
                <span className="block text-[10px] font-bold text-tertiary uppercase tracking-wider">{crsDetails.status}</span>
              </div>
            </div>

            {/* Score Breakdown List */}
            <div className="space-y-4">
              {crsDetails.breakdown.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                    <span>{item.name}</span>
                    <span className="text-on-surface font-bold">{item.score} <span className="text-outline font-normal">({item.weight} wt)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.score.split('/')[0]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions Ledger */}
          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-on-surface mb-4">OPay Transaction History</h3>
            
            <div className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <div key={tx.id} className="py-3.5 flex justify-between items-start hover:bg-slate-50 transition-colors gap-2">
                  <div className="space-y-1 min-w-0 flex-1">
                    <p className="text-sm font-semibold text-on-surface leading-tight truncate">{tx.desc}</p>
                    <div className="flex flex-wrap items-center gap-x-2 text-[10px] text-outline font-medium">
                      <span>{tx.date}</span>
                      <span>•</span>
                      <span className="font-mono">{tx.id}</span>
                    </div>
                  </div>
                  <span className={`font-mono text-sm font-bold shrink-0 ${tx.type === 'credit' ? 'text-primary' : 'text-red-600'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Loan Application Panel */}
        <div className="space-y-6">
          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm space-y-6">
            <div className="flex bg-slate-100 p-1 rounded-xl border border-outline-variant">
              <button 
                onClick={() => setActiveLoanTab('status')}
                className={`flex-1 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeLoanTab === 'status' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-slate-50'}`}
              >
                Active Loans
              </button>
              <button 
                onClick={() => setActiveLoanTab('apply')}
                className={`flex-1 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeLoanTab === 'apply' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-slate-50'}`}
              >
                Apply for Loan
              </button>
            </div>

            {activeLoanTab === 'status' ? (
              <div className="space-y-4">
                <h4 className="font-bold text-sm text-on-surface">Your Loan Portfolio</h4>

                <div className="space-y-3">
                  {loans.map((loan) => (
                    <div key={loan.id} className="p-4 border border-outline-variant rounded-xl space-y-2 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full mb-1">
                            {loan.type}
                          </span>
                          <h5 className="font-bold text-on-surface text-base">{loan.amount}</h5>
                        </div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${loan.status === 'Fully Paid' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                          {loan.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-[10px] text-outline pt-2 border-t border-slate-100">
                        <span>Rate: {loan.rate}</span>
                        <span>Date: {loan.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Apply Form */
              <form onSubmit={handleApplyLoan} className="space-y-4">
                <h4 className="font-bold text-sm text-on-surface">Request New Credit</h4>
                <p className="text-xs text-outline leading-relaxed">
                  Your pre-approved limit is based on your CRS tier. Startup loans represent seed/fertilizer setups; Expansion loans represent machinery.
                </p>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant block">Requested Sum (₦)</label>
                  <input 
                    required
                    type="number"
                    value={requestedAmount}
                    onChange={(e) => setRequestedAmount(e.target.value)}
                    max={currentPath === 'Established' ? '1000000' : '250000'}
                    className="w-full p-3 bg-slate-50 border border-outline-variant rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  />
                  <p className="text-[10px] text-outline">
                    Max pre-approved limit: {currentPath === 'Established' ? '₦1,000,000' : '₦250,000'}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant block">Loan Purpose</label>
                  <select 
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-outline-variant rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="seeds">Seeds & Inputs purchase</option>
                    <option value="equipment">Farming machinery / Tractor rental</option>
                    <option value="drainage">Field drainage optimization</option>
                    <option value="logistics">Produce transport logistics</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-xs shadow-md hover:bg-primary/95 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Submit Application via OPay
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
