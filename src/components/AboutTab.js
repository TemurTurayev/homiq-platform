import React from 'react';
import { teamMembers } from '../data/mockData';

const AboutTab = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">О проекте "HomiQ"</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Наша миссия</h3>
        <p className="text-gray-700 mb-6">
          Мы стремимся сделать рынок недвижимости Узбекистана более прозрачным, эффективным и доступным для всех.
          Наша платформа помогает покупателям принимать обоснованные решения с учетом их реальных потребностей и возможностей,
          а продавцам — находить своих клиентов быстрее и с меньшими затратами.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg">
            <div className="text-indigo-600 text-xl mb-2">🔍</div>
            <h4 className="font-semibold mb-2">Прозрачность</h4>
            <p className="text-sm text-gray-700">
              Объективная информация о рынке недвижимости, основанная на анализе данных
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="text-indigo-600 text-xl mb-2">👤</div>
            <h4 className="font-semibold mb-2">Персонализация</h4>
            <p className="text-sm text-gray-700">
              Индивидуальный подход к каждому пользователю с учетом его уникальных потребностей
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="text-indigo-600 text-xl mb-2">📈</div>
            <h4 className="font-semibold mb-2">Развитие рынка</h4>
            <p className="text-sm text-gray-700">
              Содействие цифровизации рынка недвижимости Узбекистана и внедрению инноваций
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Наша команда</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-3" />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <h4 className="font-semibold mb-2">Присоединяйтесь к нам!</h4>
          <p className="text-gray-700 mb-4">
            Мы всегда ищем талантливых специалистов, которые хотят изменить рынок недвижимости к лучшему.
          </p>
          <button className="btn-primary">
            Открытые вакансии
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;