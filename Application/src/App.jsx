import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="app">
      <h2>Dynamic List Manager</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter item..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-text">first item</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
        </div>
  );
}

export default App;
