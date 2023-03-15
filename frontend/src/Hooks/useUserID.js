import React from 'react';

const useUserID = () => {
    const [userID, setUserID] = React.useState('');

    return { userID, setUserID };
};

export default useUserID;