import React from 'react';
import {Counter} from './componentes/counter';
import {CounterButton} from './componentes/counterButton';

import ContextProvider from './context/Count';


function App() {
   
  return (
     <ContextProvider>
        <CounterButton />
        <Counter />
      </ContextProvider>
  );
}

export default App;
