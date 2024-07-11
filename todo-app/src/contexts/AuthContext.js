import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext()


const AuthContextProvider = ({ children }) => {
    
    const [isAuth, setIsAuth] = useState()
        onAuthStateChanged(auth, (user) => {
            if (user)
                setIsAuth(true)
            else
                setIsAuth(false)
        });
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuthContext = () => {
    return useContext(AuthContext)
}
export default AuthContextProvider