import React, { useState } from 'react';
import { Plus, Trash2, ChefHat, Search, Sparkles, ShoppingCart } from 'lucide-react';

export default function Groceries() {
  const [groceries, setGroceries] = useState([
    'دجاج', 'طماطم', 'بصل', 'أرز بني', 'بروكلي'
  ]);
  const [newItem, setNewItem] = useState('');
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestedMeals, setSuggestedMeals] = useState<{name: string, cals: number, time: string}[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim() && !groceries.includes(newItem.trim())) {
      setGroceries([...groceries, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemove = (item: string) => {
    setGroceries(groceries.filter(g => g !== item));
  };

  const handleSuggestMeals = () => {
    setIsSuggesting(true);
    // Simulate API call
    setTimeout(() => {
      setSuggestedMeals([
        { name: 'دجاج مشوي مع البروكلي والأرز', cals: 450, time: '30 دقيقة' },
        { name: 'سلطة دجاج بالطماطم والبصل', cals: 320, time: '15 دقيقة' },
      ]);
      setIsSuggesting(false);
    }, 1500);
  };

  return (
    <div className="h-full overflow-y-auto pb-32 px-6 pt-12 bg-[#F8F9FA]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
          <ShoppingCart size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">المقاضي</h1>
          <p className="text-sm text-gray-500 mt-1">أضف مكوناتك لاقتراح وجبات صحية</p>
        </div>
      </div>

      {/* Add Item Form */}
      <form onSubmit={handleAdd} className="relative mb-8">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="أضف مكون جديد (مثال: بيض، شوفان...)"
          className="w-full bg-white border border-gray-200 rounded-[24px] py-4 pr-12 pl-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <button
          type="submit"
          disabled={!newItem.trim()}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full disabled:opacity-50 hover:bg-orange-600 transition-colors"
        >
          <Plus size={20} />
        </button>
      </form>

      {/* Groceries List */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          المكونات المتوفرة
          <span className="bg-orange-100 text-orange-600 text-xs py-1 px-2 rounded-full">{groceries.length}</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {groceries.map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-full py-2 px-4 flex items-center gap-2 shadow-sm animate-in fade-in zoom-in duration-200"
            >
              <span className="text-sm font-medium text-gray-700">{item}</span>
              <button
                onClick={() => handleRemove(item)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          {groceries.length === 0 && (
            <p className="text-sm text-gray-500 text-center w-full py-8 border-2 border-dashed border-gray-200 rounded-[24px]">
              لا توجد مكونات مضافة حالياً
            </p>
          )}
        </div>
      </div>

      {/* Suggest Meals Button */}
      <button
        onClick={handleSuggestMeals}
        disabled={groceries.length === 0 || isSuggesting}
        className="w-full bg-gray-900 text-white rounded-[24px] py-4 font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-gray-900/20 hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-8 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 flex items-center gap-2">
          {isSuggesting ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Sparkles size={24} className="text-orange-400 group-hover:text-white transition-colors" />
              اقترح لي وجبات
            </>
          )}
        </span>
      </button>

      {/* Suggested Meals */}
      {suggestedMeals.length > 0 && (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ChefHat size={20} className="text-orange-500" />
            الوجبات المقترحة
          </h3>
          <div className="space-y-4">
            {suggestedMeals.map((meal, i) => (
              <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
                <h4 className="font-bold text-gray-900 text-lg">{meal.name}</h4>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-50 text-orange-600 text-xs font-bold py-1.5 px-3 rounded-full">
                    {meal.cals} سعرة حرارية
                  </div>
                  <div className="bg-gray-50 text-gray-600 text-xs font-medium py-1.5 px-3 rounded-full">
                    {meal.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


