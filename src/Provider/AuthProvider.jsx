import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,   signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase-init/firebase.init";





export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singInWithGoogle = () => {
        setLoading(true)
       
        return signInWithPopup(auth, googleProvider);
        
    }
    
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        });
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)

            } else {
                setUser(null)
                setLoading(false)
            }
            return () => {
                unSubscribe();
            }
        })
    }, [])

    const logOut = () => {
       
        return signOut(auth )
        
    }

    const providerInfo = {
        user,
        loading,
        createUser,
        singinUser,
        singInWithGoogle,
        logOut,
        updateUserProfile
        
    }
    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;