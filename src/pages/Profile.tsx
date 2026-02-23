import React from 'react';
import { User, Settings, Bell, Shield, HelpCircle, LogOut, ChevronLeft } from 'lucide-react';

export default function Profile() {
  return (
    <div className="h-full overflow-y-auto pb-32 px-6 pt-12 bg-[#F8F9FA]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
          <User size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">الملف الشخصي</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة حسابك وإعداداتك</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-8 flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md shrink-0">
          <img src="https://picsum.photos/seed/avatar/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">أحمد محمد</h2>
          <p className="text-sm text-gray-500 mb-2">ahmed@example.com</p>
          <div className="bg-orange-50 text-orange-600 text-xs font-bold py-1 px-3 rounded-full inline-block">
            عضو مميز
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="space-y-4 mb-8">
        {[
          { icon: <User size={20} />, label: 'تعديل الملف الشخصي', color: 'text-blue-500', bg: 'bg-blue-50' },
          { icon: <Bell size={20} />, label: 'الإشعارات', color: 'text-orange-500', bg: 'bg-orange-50' },
          { icon: <Shield size={20} />, label: 'الخصوصية والأمان', color: 'text-green-500', bg: 'bg-green-50' },
          { icon: <HelpCircle size={20} />, label: 'المساعدة والدعم', color: 'text-purple-500', bg: 'bg-purple-50' },
          { icon: <Settings size={20} />, label: 'الإعدادات العامة', color: 'text-gray-600', bg: 'bg-gray-100' },
        ].map((item, i) => (
          <button key={i} className="w-full bg-white rounded-[24px] p-4 flex items-center justify-between shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-medium text-gray-900">{item.label}</span>
            </div>
            <ChevronLeft size={20} className="text-gray-400" />
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <button className="w-full bg-red-50 text-red-600 rounded-[24px] py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
        <LogOut size={20} />
        تسجيل الخروج
      </button>
    </div>
  );
}
