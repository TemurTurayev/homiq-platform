import React from 'react';

const PropertyDetails = ({ property, handleBackToResults, favoriteProperties, toggleFavorite }) => {
  if (!property) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <button 
          onClick={handleBackToResults}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
        >
          ← Назад
        </button>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
            <p className="text-gray-600">{property.district}, {property.address}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">{property.price} сум</div>
            <div className="text-gray-500">{property.pricePerSqm} сум/м²</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">{property.rooms} комнаты</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">{property.area} м²</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">{property.floor}/{property.totalFloors} этаж</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">{property.built} год постройки</span>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Описание объекта</h3>
          <p className="text-gray-700 mb-6">
            {property.description || 'Современная квартира в новостройке с качественным ремонтом. Удобная планировка, просторные комнаты с большими окнами, обеспечивающими хорошее естественное освещение. Кухня оборудована современной техникой.'}
          </p>
          
          <h3 className="text-lg font-semibold mb-3">Инфраструктура рядом</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {property.nearbyFacilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-indigo-600">✓</span>
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 btn-primary py-3">
              Связаться с продавцом
            </button>
            <button 
              onClick={() => toggleFavorite(property.id)}
              className={`px-4 py-3 rounded-md border shadow-md transform hover:-translate-y-0.5 transition-all duration-200 ${favoriteProperties.includes(property.id) ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-500' : 'text-gray-700 border-gray-300 hover:border-gray-400'}`}
            >
              {favoriteProperties.includes(property.id) ? 'В избранном' : 'В избранное'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;