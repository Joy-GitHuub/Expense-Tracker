import React from 'react';
import useUserID from './../Hooks/useUserID';
import useFetch from './../Hooks/useFetch';

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const { userID, setUserID } = useUserID();

    const { isFetch, setIsFetch } = useFetch();

    return (
        <AuthContext.Provider value={{ user: { userID, setUserID }, fetchAgain: { isFetch, setIsFetch } }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;