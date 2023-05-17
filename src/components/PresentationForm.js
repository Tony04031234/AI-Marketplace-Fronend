// frontend/src/components/PresentationForm.js

import React, { useState } from 'react';
import '../styles/PresentationForm.css';

function PresentationForm({ onSubmit }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputText);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="presentation-form">
      <button type="submit" className="submit-button">
        Generate
      </button>
      <div className="input-container">
        <textarea
          className="input-box"
          id="inputText"
          name="inputText"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter your text here"
          rows="10"
          cols="70"
        />
      </div>
    </form>
  );
}

export default PresentationForm;
