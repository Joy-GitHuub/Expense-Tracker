import React from 'react';

const useFetch = () => {
    const [isFetch, setIsFetch] = React.useState(true);
    return { isFetch, setIsFetch };
};

export default useFetch;