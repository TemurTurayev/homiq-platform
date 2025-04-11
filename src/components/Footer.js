import React from 'react';

const Footer = ({ handleTabChange }) => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-950 text-white py-12 px-4 shadow-inner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">HomiQ</h3>
            <p className="text-gray-300 mb-4">
              Инновационная AI-платформа для поиска и анализа доступного жилья в Узбекистане
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Telegram</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#search" 
                  className="text-gray-300 hover:text-white" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange('search');
                  }}
                >
                  Поиск жилья
                </a>
              </li>
              <li>
                <a 
                  href="#analytics" 
                  className="text-gray-300 hover:text-white" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange('analytics');
                  }}
                >
                  Анализ рынка
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange('about');
                  }}
                >
                  О проекте
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Для партнеров</h3>
            <ul className="space-y-2">
              <li><a href="#partners" className="text-gray-300 hover:text-white">Застройщикам</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white">Агентствам недвижимости</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white">Банкам</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">г. Ташкент, ул. Шота Руставели, 15А</p>
              <p className="mb-2">info@homiq.uz</p>
              <p>+998 71 123-45-67</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomiQ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;