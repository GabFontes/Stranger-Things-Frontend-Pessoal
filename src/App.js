import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  console.log(process.env.REACT_APP_CHANGE);
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
