import React, { useState } from 'react';

const LoginModal = ({ showLoginModal, setShowLoginModal, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!showLoginModal) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    // В реальном приложении здесь была бы валидация и отправка данных на сервер
    handleLogin(e);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Вход в систему</h3>
          <button 
            onClick={() => setShowLoginModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Электронная почта</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded-md"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Пароль</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded-md"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full btn-primary py-2 mb-4"
          >
            Войти
          </button>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Или войдите через</p>
            <div className="flex justify-center space-x-4">
              <button type="button" className="border p-2 rounded-md hover:bg-gray-50">Google</button>
              <button type="button" className="border p-2 rounded-md hover:bg-gray-50">Facebook</button>
              <button type="button" className="border p-2 rounded-md hover:bg-gray-50">Telegram</button>
            </div>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Еще нет аккаунта? <a href="#register" className="text-indigo-600 hover:underline">Зарегистрироваться</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;