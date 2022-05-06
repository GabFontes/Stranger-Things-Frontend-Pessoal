import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  console.log(process.env.REACT_APP_CHANGE);
  return (
    <div className="App">
      {process.env.REACT_APP_CHANGE === 'true'
        ? <h1>Em desenvolvimento</h1> : <StrangerThings />}
    </div>
  );
}

export default App;
