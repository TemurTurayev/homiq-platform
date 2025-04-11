import React from 'react';

const Header = ({ activeTab, handleTabChange, isLoggedIn, handleLogout, handleLoginClick }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => {
            handleTabChange('search');
          }}
        >
          <h1 className="text-2xl font-bold">HomiQ</h1>
          <span className="bg-amber-400 text-purple-900 text-xs px-2 py-1 rounded-md font-bold">BETA</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a 
            href="#search" 
            className={`hover:text-amber-300 transition-colors duration-200 ${activeTab === 'search' ? 'text-amber-300' : ''}`} 
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('search');
            }}
          >
            Поиск жилья
          </a>
          <a 
            href="#analytics" 
            className={`hover:text-amber-300 transition-colors duration-200 ${activeTab === 'analytics' ? 'text-amber-300' : ''}`} 
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('analytics');
            }}
          >
            Анализ рынка
          </a>
          <a 
            href="#about" 
            className={`hover:text-amber-300 transition-colors duration-200 ${activeTab === 'about' ? 'text-amber-300' : ''}`} 
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('about');
            }}
          >
            О проекте
          </a>
        </nav>
        <div>
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm">Добро пожаловать, Темур</span>
              <button 
                onClick={handleLogout}
                className="bg-white text-purple-800 px-3 py-1 rounded-md text-sm hover:bg-gray-100 shadow-md transition-all duration-200"
              >
                Выйти
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLoginClick}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-purple-900 px-4 py-2 rounded-md hover:from-amber-500 hover:to-amber-600 font-medium shadow-md transition-all duration-200"
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;