import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import {AuthContext} from './AuthContext';
import {auth} from '../firebase/firebase.config';
import { useEffect, useState } from "react";


const provider = new GoogleAuthProvider();
provider.addScope('email');

function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

     // register with gmail   
     const signWithGmail = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
     }


     // register with email and password
     const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
     }


     // updating user info
     const updateUserInfo = (updates) => {
        if (!auth.currentUser) return;
        return updateProfile(auth.currentUser, updates);
     }



     // sending email verification
     const verifyUserViaEmail = () => {
        return sendEmailVerification(auth.currentUser);
     } 


     // login with email and password
     const loginUserManually = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }


     // sending email for resetting password
     const resetPasswordViaEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
     }


     // logging out user
     const signOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
     }



     // getting user info
     useEffect(function(){
        // on mount
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(createUser){
                setUser(currentUser);
                setIsLoading(false);
            }
        })

        // on unmount
        return () => {
            unsubscribe();
        }
     },[])


     // passed values
     const authInfo = {
        signWithGmail,
        createUser,
        verifyUserViaEmail,
        updateUserInfo,
        loginUserManually,
        resetPasswordViaEmail,
        signOutUser,
        user,
        isLoading,
     }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;