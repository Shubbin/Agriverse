import { useState } from 'react';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import DashboardPage from './views/DashboardPage';
import GeminiChatPanel from './components/chat/GeminiChatPanel';

function App() {
  const [view, setView] = useState('landing');
  const [userName, setUserName] = useState('Samuel');
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'gemini', text: "Hello Samuel! I am your Gemini AI Farm Guard. How can I help you with your crops, weather, or loans today?" }
  ]);

  const handleSendMessage = (userMsg) => {
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);

    setTimeout(() => {
      let botResponse = "I am processing your query. Could you please specify which crops you are referring to?";
      const lowercaseMsg = userMsg.toLowerCase();

      if (lowercaseMsg.includes('maize') || lowercaseMsg.includes('corn')) {
        botResponse = "Samuel, for your Maize plot: Heavy rainfall is expected in the next 48 hours. Ensure your drainage channels are clear to prevent waterlogging. If you notice yellow spots on leaves, Southern Corn Leaf Blight is suspected—neem oil spray is recommended.";
      } else if (lowercaseMsg.includes('rain') || lowercaseMsg.includes('weather')) {
        botResponse = "Weather Alert: Heavy rain (25mm) is forecasted for Kaduna in the next 2 days. The humidity will rise to 85%. Good time for liquid fertilizer application has passed; wait until the heavy rain subsides.";
      } else if (lowercaseMsg.includes('loan') || lowercaseMsg.includes('credit')) {
        botResponse = "Your current Credit Readiness Score is 720 (Gold Status). You qualify for the Phase 2 Startup Loan of ₦250,000 via OPay. Would you like me to guide you through the application?";
      } else if (lowercaseMsg.includes('market') || lowercaseMsg.includes('price')) {
        botResponse = "Current wholesale market rates in Kaduna: Maize is trading at ₦38,500 per bag (+2.4%), Rice (long grain) is at ₦54,000 per bag (-0.8%). Wholesalers are active today.";
      } else {
        botResponse = "Aah Samuel, I dey hear you. As your Farm Guard, I fit help you check crop disease (just type maize/rice/disease) or check weather alerts and OPay loan progress. Wetin you wan do next?";
      }

      setChatMessages((prev) => [...prev, { sender: 'gemini', text: botResponse }]);
    }, 1000);
  };

  const handleLoginSuccess = (email) => {
    if (email) {
      const namePart = email.split('@')[0];
      setUserName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
    } else {
      setUserName('Samuel');
    }
    setView('dashboard');
  };

  const handleRegisterSuccess = (name) => {
    setUserName(name || 'Samuel');
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary/20">
      {view === 'landing' && <LandingPage onNavigate={setView} />}
      {view === 'login' && <LoginPage onNavigate={setView} onLoginSuccess={handleLoginSuccess} />}
      {view === 'register' && <RegistrationPage onNavigate={setView} onRegisterSuccess={handleRegisterSuccess} />}
      {view === 'dashboard' && (
        <DashboardPage 
          userName={userName} 
          onNavigate={setView} 
          onOpenAi={() => setIsAiOpen(true)} 
        />
      )}

      {isAiOpen && (
        <GeminiChatPanel 
          chatMessages={chatMessages} 
          onClose={() => setIsAiOpen(false)} 
          onSendMessage={handleSendMessage} 
        />
      )}
    </div>
  );
}

export default App;
