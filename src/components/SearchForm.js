import React from 'react';
import { districts } from '../data/mockData';

const SearchForm = ({ searchParams, setSearchParams, handleSearchSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Параметры поиска</h3>
      <form onSubmit={handleSearchSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Район</label>
            <select 
              className="w-full p-2 border rounded-md"
              value={searchParams.district}
              onChange={(e) => setSearchParams({...searchParams, district: e.target.value})}
            >
              <option value="">Все районы</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Количество комнат</label>
            <select 
              className="w-full p-2 border rounded-md"
              value={searchParams.rooms}
              onChange={(e) => setSearchParams({...searchParams, rooms: e.target.value})}
            >
              <option value="">Любое</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Цена от (сум)</label>
            <input 
              type="number" 
              placeholder="Минимальная цена" 
              className="w-full p-2 border rounded-md"
              value={searchParams.priceMin}
              onChange={(e) => setSearchParams({...searchParams, priceMin: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Цена до (сум)</label>
            <input 
              type="number" 
              placeholder="Максимальная цена" 
              className="w-full p-2 border rounded-md"
              value={searchParams.priceMax}
              onChange={(e) => setSearchParams({...searchParams, priceMax: e.target.value})}
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="btn-primary"
          >
            Найти
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;