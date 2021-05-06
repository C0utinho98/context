import React from 'react';
import { useCount } from '../../context/Count';


const Counter =() => {
    const {count} = useCount();

    return(
        <div>
            <h1>{`Contador: ${count}`}</h1>
        </div>
    );
};

export {Counter};