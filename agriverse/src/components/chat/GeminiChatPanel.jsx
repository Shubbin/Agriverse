import React, { useState, useEffect } from 'react';

export default function GeminiChatPanel({ onClose, chatMessages, onSendMessage }) {
  const [inputMsg, setInputMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    onSendMessage(inputMsg);
    setInputMsg('');
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-box');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300">
        {/* Chat Header */}
        <div className="bg-[#2F80ED] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <div>
              <h3 className="font-bold text-sm">Gemini AI Farm Guard</h3>
              <p className="text-[10px] opacity-80">Multilingual: Hausa, Yoruba, Igbo, Pidgin, English</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Chat Info Banner */}
        <div className="bg-[#2F80ED]/5 px-4 py-2 border-b border-[#2F80ED]/10 flex items-center gap-2 text-xs text-[#2F80ED]">
          <span className="material-symbols-outlined text-sm">info</span>
          <span>Ask about weather tips, Maize disease diagnosis, or loan status.</span>
        </div>

        {/* Chat Box Messages */}
        <div id="chat-box" className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-[#2F80ED] text-white rounded-tr-none' : 'bg-white border border-outline-variant text-on-surface rounded-tl-none shadow-sm'}`}>
                <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                <span className="text-[9px] block text-right mt-1 opacity-60">
                  {msg.sender === 'user' ? 'You' : 'Gemini AI'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions Panel */}
        <div className="p-2 border-t border-slate-100 flex gap-2 overflow-x-auto bg-white">
          <button 
            onClick={() => setInputMsg("How is the weather forecast for my Maize crop?")}
            className="bg-slate-100 hover:bg-slate-200 text-xs px-3 py-1.5 rounded-full text-on-surface-variant font-medium whitespace-nowrap cursor-pointer"
          >
            ⛅ Weather for Maize
          </button>
          <button 
            onClick={() => setInputMsg("Am I qualified for the OPay startup loan?")}
            className="bg-slate-100 hover:bg-slate-200 text-xs px-3 py-1.5 rounded-full text-on-surface-variant font-medium whitespace-nowrap cursor-pointer"
          >
            ₦ Loan Status
          </button>
          <button 
            onClick={() => setInputMsg("What is the current price of White Maize?")}
            className="bg-slate-100 hover:bg-slate-200 text-xs px-3 py-1.5 rounded-full text-on-surface-variant font-medium whitespace-nowrap cursor-pointer"
          >
            📊 Maize Prices
          </button>
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-outline-variant bg-white flex gap-2">
          <input 
            type="text" 
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Ask Gemini AI in English or local language..."
            className="flex-grow bg-slate-50 border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2F80ED] focus:border-[#2F80ED]"
          />
          <button 
            type="submit"
            className="bg-[#2F80ED] text-white p-3 rounded-xl hover:bg-[#2F80ED]/95 active:scale-95 transition-transform flex items-center justify-center shadow cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
