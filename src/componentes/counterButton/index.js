import React from 'react';
import { useCount } from '../../context/Count';


const CounterButton = () => {
    const {count, setCount} = useCount();

    return(
        <div>
            <span>{`Contador: ${count}`}</span>
            <button onClick={() => setCount(count + 1)}>Adicionar</button>
        </div>
    );
};

export {CounterButton};