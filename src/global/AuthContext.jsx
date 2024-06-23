

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { auth } from '../Config/firebaseConfig';
// import { onAuthStateChanged, signOut } from 'firebase/auth';

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         localStorage.setItem('userToken', currentUser.uid); // Store user UID in localStorage
//       } else {
//         localStorage.removeItem('userToken');
//       }
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem('userToken');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { auth } from '../Config/firebaseConfig';
// import { onAuthStateChanged, signOut } from 'firebase/auth';

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('userToken');
//     if (storedToken) {
//       // Assume the stored token is the UID
//       setUser({ uid: storedToken });
//     }

//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         localStorage.setItem('userToken', currentUser.uid); // Store user UID in localStorage
//         setUser(currentUser);
//       } else {
//         localStorage.removeItem('userToken'); // Remove token only on explicit logout
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       // localStorage.removeItem('userToken'); // Do not remove token on explicit logout
//       setUser(null);
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../Config/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // State to hold accessToken

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setAccessToken(storedToken); // Set accessToken from localStorage if available
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Store the new accessToken in localStorage and state
        currentUser.getIdToken().then((token) => {
          localStorage.setItem('accessToken', token);
          setAccessToken(token);
        });
        setUser(currentUser);
      } else {
        localStorage.removeItem('accessToken'); // Remove accessToken only on explicit logout
        setAccessToken(null);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('accessToken'); // Remove accessToken on logout
      setAccessToken(null);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
