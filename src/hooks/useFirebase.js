import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from "../pages/Authentication/Firebase/firebaseInitialize";


// initialize firebase app
firebaseInitialize();
// ---------------------------------

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history, method) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                history.push('/')
                const newUser = {email, displayName:name}
                setUser(newUser);

                // Save user to DB 
                saveUser(email, name, "POST");
                
                // Send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setAuthError('')
                }).catch((error) => {
                    setAuthError(error.message);   
                });  
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginWithGoogle = (location, history) =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('')
          saveUser(user.email, user.displayName, 'PUT')
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
      
      }


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    // User save to DB 
    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName}

        fetch('http://localhost:5000/users',{
          method: method,
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        loginWithGoogle,
        logOut,
    }
}

export default useFirebase;