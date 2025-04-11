import React from 'react';

const SearchResults = ({ properties, handlePropertySelect, favoriteProperties, toggleFavorite }) => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">Найдено {properties.length} объекта</h3>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Сортировать:</span>
          <select className="p-1 border rounded-md">
            <option>По дате добавления</option>
            <option>Сначала дешевые</option>
            <option>Сначала дорогие</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="card">
            <div className="relative">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(property.id);
                  }}
                  className={`p-2 rounded-full ${favoriteProperties.includes(property.id) ? 'bg-rose-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  ❤
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-1 text-gray-800">{property.title}</h4>
              <p className="text-gray-600 mb-2">{property.district}, {property.address}</p>
              <div className="flex justify-between items-center mb-3">
                <div className="text-xl font-bold text-indigo-600">{property.price} сум</div>
                <div className="text-sm text-gray-500">{property.pricePerSqm} сум/м²</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">{property.rooms} комн.</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">{property.area} м²</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">{property.floor}/{property.totalFloors} этаж</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">{property.built} г.</span>
              </div>
              <button 
                onClick={() => handlePropertySelect(property)}
                className="w-full btn-primary"
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;