import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from './../services/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            const loggedUser = { email: currentUser?.email }
            if (currentUser) {
                axios.post('https://car-doctor-server-lyart-nine.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            axios.post('https://car-doctor-server-lyart-nine.vercel.app/logout', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })

            // console.log(currentUser)
        })
        return () => unsubscribe()
    })
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}