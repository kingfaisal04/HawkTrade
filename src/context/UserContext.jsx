import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock state: false = Free Tier, true = Pro Tier
  const [isPro, setIsPro] = useState(false);
  
  // Mock Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState(null);

  const togglePro = () => {
    setIsPro((prev) => !prev);
  };
  
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasCompletedOnboarding(false);
    setExperienceLevel(null);
  };

  const completeOnboarding = (level) => {
    setExperienceLevel(level);
    setHasCompletedOnboarding(true);
  };

  return (
    <UserContext.Provider value={{ 
      isPro, togglePro, 
      isAuthenticated, login, logout,
      hasCompletedOnboarding, experienceLevel, completeOnboarding
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
