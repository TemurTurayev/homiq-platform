import React from 'react';

const Hero = ({ handleTabChange }) => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-purple-900 text-white py-16 px-4 shadow-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">HomiQ</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">Инновационная платформа для поиска и анализа жилья в Узбекистане</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => handleTabChange('search')}
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-purple-900 px-8 py-4 rounded-md font-bold hover:from-amber-500 hover:to-amber-600 shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Найти жильё
          </button>
          <button 
            onClick={() => handleTabChange('analytics')}
            className="bg-white text-purple-800 px-8 py-4 rounded-md font-bold hover:bg-gray-100 shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Анализ рынка с помощью ИИ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;