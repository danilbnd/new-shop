import React from 'react';
import './main.scss';
import './App.css';
import Popup from './components/popup/Popup'

function App() {
  return (
    <div className="App">
        <div className="block-btn">
            <button className="button-open">start button click</button>
        </div>
        <Popup/>
    </div>
  );
}

export default App;
