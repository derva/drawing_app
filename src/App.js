import React, { useState } from 'react';
import Canvas from './Components/Canvas'
import './App.css';

function App() {
  const [brushColor, setBrushColor] = useState('#000000')
  function setColor(){
    setBrushColor('#654987')
    alert("brush color");
  }
  return (
    <div className="App">
      <button onClick={setColor}>Set brush</button>
      <div className='canvas-container'>
        <Canvas width={700} height={750} color={brushColor} />
      </div>
    </div>
  );
}

export default App;