import React, { useState } from 'react';
import { Home, ShoppingCart, MessageCircle, User } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Groceries from './pages/Groceries';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'groceries':
        return <Groceries />;
      case 'chatbot':
        return <Chatbot />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 text-gray-900 font-sans flex justify-center" dir="rtl">
      <main className="w-full max-w-md h-full relative bg-white shadow-xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-hidden">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          <NavItem
            icon={<Home size={24} />}
            label="الرئيسية"
            isActive={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <NavItem
            icon={<ShoppingCart size={24} />}
            label="المقاضي"
            isActive={activeTab === 'groceries'}
            onClick={() => setActiveTab('groceries')}
          />
          <NavItem
            icon={<MessageCircle size={24} />}
            label="المساعد"
            isActive={activeTab === 'chatbot'}
            onClick={() => setActiveTab('chatbot')}
          />
          <NavItem
            icon={<User size={24} />}
            label="حسابي"
            isActive={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
        </nav>
      </main>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
        isActive ? 'text-orange-500' : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <div className={`p-2 rounded-2xl ${isActive ? 'bg-orange-50' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
