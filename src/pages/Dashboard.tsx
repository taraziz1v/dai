import React from 'react';
import { Activity, Droplets, Flame, Moon, Footprints, ChevronLeft } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'السبت', calories: 1800 },
  { name: 'الأحد', calories: 2100 },
  { name: 'الاثنين', calories: 1950 },
  { name: 'الثلاثاء', calories: 2400 },
  { name: 'الأربعاء', calories: 1700 },
  { name: 'الخميس', calories: 2200 },
  { name: 'الجمعة', calories: 2000 },
];

export default function Dashboard() {
  return (
    <div className="h-full overflow-y-auto pb-32 px-6 pt-12 bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مرحباً، أحمد</h1>
          <p className="text-sm text-gray-500 mt-1">كيف تشعر اليوم؟</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
          <img src="https://picsum.photos/seed/avatar/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Date Selector */}
      <div className="flex justify-between items-center mb-8 overflow-x-auto gap-3 pb-2 no-scrollbar">
        {['15', '16', '17', '18', '19'].map((day, i) => (
          <div
            key={day}
            className={`flex flex-col items-center justify-center min-w-[60px] h-[80px] rounded-[24px] ${
              i === 1 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-white text-gray-400 border border-gray-100'
            }`}
          >
            <span className="text-xs font-medium mb-1">
              {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء'][i]}
            </span>
            <span className={`text-xl font-bold ${i === 1 ? 'text-white' : 'text-gray-800'}`}>{day}</span>
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Calories / Steps */}
        <div className="bg-orange-500 rounded-[32px] p-6 text-white shadow-lg shadow-orange-500/20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="flex items-center gap-2 mb-4">
            <Footprints size={20} className="text-orange-100" />
            <span className="font-medium">المشي</span>
          </div>
          <div className="relative w-24 h-24 mx-auto mb-2">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-orange-400"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-white"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">3214</span>
              <span className="text-[10px] text-orange-100">خطوة</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Sleep */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Moon size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-500">النوم</span>
              </div>
              <div className="text-xl font-bold text-gray-800">8.0<span className="text-xs text-gray-400 font-normal ml-1">ساعات</span></div>
            </div>
          </div>

          {/* Water */}
          <div className="bg-blue-500 rounded-[24px] p-5 text-white shadow-lg shadow-blue-500/20 flex-1 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-3">
              <Droplets size={16} className="text-blue-100" />
              <span className="text-sm font-medium">الماء</span>
            </div>
            <div className="text-2xl font-bold mb-1">1.6<span className="text-xs text-blue-100 font-normal ml-1">لتر</span></div>
            <div className="w-full bg-blue-400 h-1.5 rounded-full mt-auto">
              <div className="bg-white h-full rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">السعرات الحرارية</p>
            <h3 className="text-2xl font-bold text-gray-900">1,132 <span className="text-sm font-normal text-gray-400">kcal</span></h3>
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-500 mb-1">الوقت</p>
            <h3 className="text-2xl font-bold text-gray-900">641 <span className="text-sm font-normal text-gray-400">min</span></h3>
          </div>
        </div>
        
        <div className="h-40 w-full" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#1F2937' }}
              />
              <Area 
                type="monotone" 
                dataKey="calories" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCalories)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Macros */}
      <div className="bg-orange-500 rounded-[24px] p-6 text-white shadow-lg shadow-orange-500/20 mb-8 flex justify-between items-center">
        <div className="text-center">
          <p className="text-xs text-orange-100 mb-1">بروتين</p>
          <p className="font-bold text-lg">40.5 g</p>
        </div>
        <div className="w-px h-8 bg-orange-400/50"></div>
        <div className="text-center">
          <p className="text-xs text-orange-100 mb-1">دهون</p>
          <p className="font-bold text-lg">18 g</p>
        </div>
        <div className="w-px h-8 bg-orange-400/50"></div>
        <div className="text-center">
          <p className="text-xs text-orange-100 mb-1">كاربوهيدرات</p>
          <p className="font-bold text-lg">71 g</p>
        </div>
      </div>

      {/* Exercises */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">التمارين المقترحة</h3>
      <div className="space-y-4">
        {[
          { name: 'تمارين الإطالة', time: '15 دقيقة', color: 'bg-purple-50', iconColor: 'text-purple-500' },
          { name: 'تمارين القوة', time: '30 دقيقة', color: 'bg-orange-50', iconColor: 'text-orange-500' }
        ].map((ex, i) => (
          <div key={i} className="bg-white rounded-[24px] p-4 flex items-center justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl ${ex.color} flex items-center justify-center`}>
                <Activity size={24} className={ex.iconColor} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{ex.name}</h4>
                <p className="text-xs text-gray-500">{ex.time}</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">
              <ChevronLeft size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
