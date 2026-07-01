import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock state: false = Free Tier, true = Pro Tier
  const [isPro, setIsPro] = useState(false);

  const togglePro = () => {
    setIsPro((prev) => !prev);
  };

  return (
    <UserContext.Provider value={{ isPro, togglePro }}>
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
