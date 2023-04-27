import React, { useState } from 'react';
import './App.css';
import PresentationForm from './components/PresentationForm';

function App() {
  const [presentationData, setPresentationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Generate Post");

  const handleGeneratePresentation = async (inputText) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/generate_presentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const presentationData = await response.json();
      setPresentationData(presentationData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setPresentationData(null);
      alert('An error occurred while generating the presentation. Please try again later.');
    }
  };

  const formatSlideContent = (content) => {
    return content
      .split('. ')
      .map((sentence, index) => (
        <p key={index}>
          {sentence.charAt(0).toUpperCase() + sentence.slice(1)}
        </p>
      ));
  };

  return (
    <div className="App">
      <div className="select-container">
        <select className="select">
          <option value="generate-post">Generate Post</option>
          <option value="generate-image">Generate Image</option>
          <option value="generate-audio">Generate Audio</option>
          <option value="generate-video">Generate Video</option>
          <option value="summarise-text">Summarise Text</option>
        </select>
      </div>
      <PresentationForm onSubmit={handleGeneratePresentation} />
      {isLoading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : presentationData ? (
        <div className="presentation-preview">
          {Object.entries(presentationData.slides).map(([key, slide], index) => (
            <div className="slide-card" key={index}>
              <img src={presentationData.header_image} alt={`Header for ${slide.title}`} />
              <h2 className="slide-title">{slide.title}</h2>
              {formatSlideContent(slide.content)}

            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}


export default App;
