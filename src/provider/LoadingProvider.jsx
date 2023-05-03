import React, { createContext, useState } from 'react';

export const LoadingContext = createContext(false);

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const loadingValue = {
        loading,
        setLoading
    }

    return (
        <LoadingContext.Provider value={loadingValue}>
            { children }
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;