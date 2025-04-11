import React from 'react';
import { analyticsData } from '../data/mockData';

const AnalyticsTab = () => {
  const { districtGrowthRate } = analyticsData;
  const topDistricts = Object.entries(districtGrowthRate)
    .sort(([, rateA], [, rateB]) => rateB - rateA)
    .slice(0, 3)
    .map(([district]) => district);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Анализ рынка недвижимости</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-3">Динамика цен по районам</h3>
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">График динамики цен по районам</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-3">Рейтинг районов</h3>
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Рейтинг районов по соотношению цена/качество</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-3">Прогноз цен на 2025</h3>
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">График прогноза цен на недвижимость</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Инвестиционная привлекательность районов</h3>
        <p className="mb-4 text-gray-700">
          Согласно нашему анализу, в ближайшие 2-3 года наиболее перспективными для инвестиций 
          в недвижимость являются следующие районы Ташкента:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topDistricts.map((district, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">{district}</h4>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Потенциал роста цен:</span>
                  <span className="font-medium text-green-600">+{districtGrowthRate[district]}-{districtGrowthRate[district] + 5}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Рекомендация AI:</span>
                  <span className="font-medium text-blue-600">Покупать</span>
                </div>
              </div>
              <button className="w-full btn-primary py-1 text-sm">
                Подробный анализ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;