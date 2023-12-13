import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const setLoggedInUser = (user) => {
    setUsername(user);
  };

  return (
    <UserContext.Provider value={{ username, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
