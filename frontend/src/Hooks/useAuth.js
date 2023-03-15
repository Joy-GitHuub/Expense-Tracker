import React from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
    const auth = React.useContext(AuthContext);
    return auth;
};

export default useAuth;