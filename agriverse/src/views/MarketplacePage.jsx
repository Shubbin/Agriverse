import React, { useState } from 'react';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState('inputs'); // 'inputs' | 'produce' | 'escrow'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [escrowOrders, setEscrowOrders] = useState([
    { id: 'TX-9041', item: 'White Maize (100kg bag)', amount: '₦38,500', status: 'Locked in Escrow', date: '03 July 2026', seller: 'Samuel Olamide' },
    { id: 'TX-8832', item: 'NPK 15:15:15 Fertilizer', amount: '₦46,500', status: 'Delivered', date: '28 June 2026', seller: 'AgroChemical Kaduna' }
  ]);

  const inputs = [
    { id: 1, name: 'Premium Hybrid Maize Seeds (10kg)', category: 'Seeds', price: '₦12,500', seller: 'Kaduna Seed Co.', rating: 4.8, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'NPK 15:15:15 Fertilizer (50kg bag)', category: 'Fertilizers', price: '₦46,500', seller: 'AgroChemical Kaduna', rating: 4.6, image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Organic Compost Fertilizer (25kg)', category: 'Fertilizers', price: '₦8,000', seller: 'EcoSoil Nigeria', rating: 4.5, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=300&q=80' }
  ];

  const produce = [
    { id: 11, name: 'Dry White Maize (100kg bag)', category: 'Grains', price: '₦38,500', seller: 'Samuel Olamide', rating: 4.9, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d20f6?auto=format&fit=crop&w=300&q=80' },
    { id: 12, name: 'Long Grain Parboiled Rice (50kg)', category: 'Grains', price: '₦54,000', seller: 'Mrs. Okoro Farms', rating: 4.7, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80' },
    { id: 13, name: 'Fresh Cassava Tubers (per Ton)', category: 'Tubers', price: '₦120,000', seller: 'Ogun Cooperatives', rating: 4.4, image: 'https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=300&q=80' }
  ];

  const activeList = activeTab === 'inputs' ? inputs : produce;

  const filteredList = activeList.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.seller.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  const handleConfirmPurchase = () => {
    if (!selectedProduct) return;

    // Create new Escrow Order
    const newOrder = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      item: selectedProduct.name,
      amount: selectedProduct.price,
      status: 'Locked in Escrow',
      date: '03 July 2026',
      seller: selectedProduct.seller
    };

    setEscrowOrders([newOrder, ...escrowOrders]);
    setSelectedProduct(null);
    setActiveTab('escrow');
    alert(`Purchase Successful! Funds of ${selectedProduct.price} locked in OPay Escrow protection.`);
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface">AgriVerse Marketplace</h2>
          <p className="text-sm text-outline mt-1">Secure escrow trades for inputs and agricultural harvests.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-outline-variant shadow-sm self-stretch md:self-auto">
          <button 
            onClick={() => setActiveTab('inputs')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'inputs' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-slate-50'}`}
          >
            Buy Inputs
          </button>
          <button 
            onClick={() => setActiveTab('produce')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'produce' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-slate-50'}`}
          >
            Browse Produce
          </button>
          <button 
            onClick={() => setActiveTab('escrow')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'escrow' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-slate-50'}`}
          >
            OPay Escrow Ledgers
          </button>
        </div>
      </section>

      {/* Main Panel Content */}
      {activeTab !== 'escrow' ? (
        <div className="space-y-6">
          {/* Search Box */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              type="text" 
              placeholder={`Search ${activeTab === 'inputs' ? 'seeds, fertilizers...' : 'maize, rice, grain harvests...'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-2xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none shadow-sm"
            />
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((product) => (
              <div key={product.id} className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover border-b border-slate-100" />
                  <div className="p-4 space-y-2">
                    <span className="inline-block px-2 py-0.5 bg-slate-100 text-outline text-[10px] font-bold rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-on-surface text-sm leading-snug">{product.name}</h3>
                    <p className="text-xs text-outline flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">store</span>
                      {product.seller}
                    </p>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      {product.rating}
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-lg font-black text-primary">{product.price}</span>
                  <button 
                    onClick={() => handleBuyClick(product)}
                    className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold text-xs shadow-sm hover:bg-primary/95 transition-all cursor-pointer"
                  >
                    Buy Securely
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Escrow Tab */
        <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-on-surface">Active Escrow Ledgers</h3>
            <span className="text-xs font-bold text-[#2F80ED] flex items-center gap-1 bg-[#2F80ED]/5 px-2.5 py-1 rounded-full border border-[#2F80ED]/10">
              <span className="material-symbols-outlined text-sm">shield</span>
              OPay Secure Escrow Protection
            </span>
          </div>

          {/* Card list for mobile screens */}
          <div className="block md:hidden space-y-4">
            {escrowOrders.map((order) => (
              <div key={order.id} className="p-4 border border-outline-variant rounded-xl space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] text-outline">{order.id}</span>
                    <h4 className="font-bold text-on-surface text-sm leading-snug mt-0.5">{order.item}</h4>
                  </div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${order.status === 'Locked in Escrow' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs pt-2 border-t border-slate-100 items-center">
                  <span className="text-outline">Seller: {order.seller}</span>
                  <span className="font-black text-primary">{order.amount}</span>
                </div>
                <p className="text-[9px] text-outline text-right">{order.date}</p>
              </div>
            ))}
          </div>

          {/* Table for desktop screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant text-outline font-bold">
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Harvest/Input</th>
                  <th className="py-3 px-4">Locked Sum</th>
                  <th className="py-3 px-4">Partner</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {escrowOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-mono text-xs text-on-surface font-semibold">{order.id}</td>
                    <td className="py-3.5 px-4 font-semibold text-on-surface">{order.item}</td>
                    <td className="py-3.5 px-4 font-black text-primary">{order.amount}</td>
                    <td className="py-3.5 px-4 text-outline">{order.seller}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${order.status === 'Locked in Escrow' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-outline">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Escrow Terms Dialog / Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 border border-outline-variant shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-on-surface">Escrow Purchase Check</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-outline hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-outline-variant rounded-xl space-y-1">
                <p className="text-xs text-outline">Selected Item:</p>
                <p className="font-bold text-on-surface text-sm">{selectedProduct.name}</p>
                <p className="text-xs text-outline mt-2">Price:</p>
                <p className="text-lg font-black text-primary">{selectedProduct.price}</p>
              </div>

              {/* OPay Escrow Info */}
              <div className="p-4 bg-[#2F80ED]/5 border border-[#2F80ED]/20 rounded-xl flex gap-3">
                <span className="material-symbols-outlined text-[#2F80ED]">verified_user</span>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  <p className="font-bold text-[#2F80ED]">OPay Escrow Protection</p>
                  Your funds are locked safely in escrow. They will not be disbursed to <strong>{selectedProduct.seller}</strong> until you confirm delivery of items in the portal.
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 border border-outline-variant rounded-xl text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirmPurchase}
                  className="flex-1 py-3 bg-primary text-on-primary font-bold rounded-xl text-xs shadow-md hover:bg-primary/95 active:scale-95 cursor-pointer"
                >
                  Confirm & Lock Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
