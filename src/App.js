import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import PropertyDetails from './components/PropertyDetails';
import AnalyticsTab from './components/AnalyticsTab';
import AboutTab from './components/AboutTab';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { properties } from './data/mockData';

function App() {
  // Состояния для хранения данных форм и пользовательского взаимодействия
  const [activeTab, setActiveTab] = useState('search');
  const [searchParams, setSearchParams] = useState({
    district: '',
    rooms: '',
    priceMin: '',
    priceMax: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  // Обработчики событий
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
    setSelectedProperty(null);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  const handleBackToResults = () => {
    setSelectedProperty(null);
  };

  const toggleFavorite = (propertyId) => {
    if (favoriteProperties.includes(propertyId)) {
      setFavoriteProperties(favoriteProperties.filter(id => id !== propertyId));
    } else {
      setFavoriteProperties([...favoriteProperties, propertyId]);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowResults(false);
    setSelectedProperty(null);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header 
        activeTab={activeTab} 
        handleTabChange={handleTabChange} 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout} 
        handleLoginClick={handleLoginClick} 
      />
      
      <LoginModal 
        showLoginModal={showLoginModal} 
        setShowLoginModal={setShowLoginModal} 
        handleLogin={handleLogin} 
      />
      
      <main className="flex-grow">
        {activeTab === 'search' && (
          <div className="container mx-auto py-6 px-4">
            {!showResults ? (
              <>
                <Hero handleTabChange={handleTabChange} />
                <div className="mt-8">
                  <SearchForm 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams} 
                    handleSearchSubmit={handleSearchSubmit} 
                  />
                </div>
              </>
            ) : (
              selectedProperty ? (
                <PropertyDetails 
                  property={selectedProperty} 
                  handleBackToResults={handleBackToResults}
                  favoriteProperties={favoriteProperties}
                  toggleFavorite={toggleFavorite}
                />
              ) : (
                <SearchResults 
                  properties={properties}
                  handlePropertySelect={handlePropertySelect}
                  favoriteProperties={favoriteProperties}
                  toggleFavorite={toggleFavorite}
                />
              )
            )}
          </div>
        )}
        
        {activeTab === 'analytics' && (
          <div className="container mx-auto py-6 px-4">
            <AnalyticsTab />
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="container mx-auto py-6 px-4">
            <AboutTab />
          </div>
        )}
      </main>
      
      <Footer handleTabChange={handleTabChange} />
    </div>
  );
}

export default App;