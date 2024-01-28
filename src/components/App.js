import React, { Component, useState } from "react";
import './../styles/App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div id="main">
   
      {isClicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
        
      <button id="click" onClick={() => {setIsClicked(true);}}>
        Click me
      </button>
    </div>
  );
}

export default App