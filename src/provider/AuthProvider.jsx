import React, {createContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
} from "firebase/auth";
import auth from "../firebase/firebase.config.js";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const githubAuth = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (currentUser, name, photoUrl) => {
        updateProfile(currentUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(() => {
            console.log('Profile updated!');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
        });
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        updateUserProfile,
        registerUser,
        userLogin,
        googleAuth,
        githubAuth,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;