import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [cleanedText, setCleanedText] = useState('');

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
  };

  function cleanText(text) {
    // Replace newline characters with line breaks
    const cleanedText = text.replace(/\n/g, '<br>');

    return cleanedText;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:8000/api/process_image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const Text = cleanText(data.text);
      setCleanedText(Text); // Save the cleaned text in the state
      console.log(Text);
    } catch (error) {
      console.error('Error:', error);
      alert(
        'An error occurred while processing the image. Please try again later.',
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      <div
        className="cleaned-text-output"
        dangerouslySetInnerHTML={{ __html: cleanedText }}
      />
    </>
  );
}

export default ImageUpload;
