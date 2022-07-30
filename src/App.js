import './App.css';
import React, { useState } from 'react';
import RGBfield from './components/RGBfield';
import Hexfield from './components/Hexfield';

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [err, setErr] = useState(false);
  const styles = {
    backgroundColor: color
  }
  const handleChange = evt => {
    evt.preventDefault();
    let input = evt.target.value;
    if (input.length === 7) {
      if (/^#[a-fA-F0-9]*$/.test(input)) {
        setColor(input);
        setErr(false);
      }
      else {
        setColor("#e5423c");
        setErr(true);
      }
    }
  }

  return (
    <div className="App" style={styles}>
      <div className="Wrapper">
        <Hexfield onChange={handleChange} value={color} />
        <RGBfield hex={color} error={err} />
      </div>
    </div>
  );
}

export default App;
