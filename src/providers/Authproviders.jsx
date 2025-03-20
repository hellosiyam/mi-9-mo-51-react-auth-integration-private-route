import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import React, { createContext,  useEffect,  useState,  } from 'react';
import auth from '../firebase.init';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Unsubscribe user', currentUser);
            setUser(currentUser)
        })
        return()=> {
            unSubscribe() 
        }
    }, [])
    

    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}   
        </AuthContext.Provider>
    );
};

export default AuthProviders;