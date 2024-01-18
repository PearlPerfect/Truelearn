import {useContext, useState, UseEffect, createContext} from 'react';
import {auth} from '../config/_config';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Auth({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/');
      }else{
        router.push('/dashboard')
      }
    });

    return () => unsubscribe();
  }, [router]);

  return children;
}

const AuthContext = createContext();
export const AuthContextProvider = ({children}) =>{
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() =>{
    return useContext(AuthContext)
}