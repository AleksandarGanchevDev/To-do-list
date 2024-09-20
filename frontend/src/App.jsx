import React, { useState, useEffect } from 'react';
import { load, sendAddElement, sendDelElement } from './components/sendData';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]); 

  useEffect(() => {
    load(setList);
  }, []);

  function handleClick() {
    if (inputValue.trim() !== '') {
      setList([...list, inputValue]); 
      sendAddElement(inputValue);
      setInputValue('');
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleDelete(index) {
    setList(list.filter((_, i) => i !== index)); 
    sendDelElement(index);
  }

  return (
    <div className="box">
      <ul className="list">
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <input className = 'checkBox' type="checkbox"></input>
            <button className = 'delBtn' onClick={() => handleDelete(index)}>Delete</button> 
          </li>
        ))}
      </ul>
      <input 
        className="inputField"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="addBtn" onClick={handleClick}></button> 
    </div>
  );
}

export default App;
