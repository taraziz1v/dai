import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'أهلاً بك! أنا مساعدك الصحي الشخصي. كيف يمكنني مساعدتك في نظامك الغذائي اليوم؟', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, text: 'هذا سؤال رائع! يمكنني اقتراح بعض الوجبات الخفيفة والصحية لك بناءً على هدفك.', sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-gray-100 shadow-sm z-10 flex items-center gap-4 rounded-b-[32px]">
        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
          <Bot size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">المساعد الذكي</h1>
          <p className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            متصل الآن
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.sender === 'user' ? 'bg-gray-900 text-white' : 'bg-orange-100 text-orange-500'
            }`}>
              {msg.sender === 'user' ? <User size={16} /> : <Sparkles size={16} />}
            </div>
            <div
              className={`max-w-[75%] p-4 rounded-[24px] text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-gray-900 text-white rounded-br-none'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-end gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
              <Sparkles size={16} />
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-[24px] rounded-bl-none shadow-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-100 rounded-t-[32px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <form onSubmit={handleSend} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اسألني عن أي شيء يخص الدايت..."
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-full py-4 pr-6 pl-14 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute left-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
          >
            <Send size={18} className="rtl:-scale-x-100" />
          </button>
        </form>
      </div>
    </div>
  );
}
