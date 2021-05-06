import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

const CounterProvider =  ({children}) => {
    const [count, setCount] = useState(0);

    return(
        <CountContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </CountContext.Provider>
    );
}

const useCount = () => {
    const context = useContext(CountContext);

    const {count, setCount} = context;

    return {count, setCount};
}

export default CounterProvider;

export {useCount};