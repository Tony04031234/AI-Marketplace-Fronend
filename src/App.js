import React, { useEffect, useContext } from 'react';
import { AppContext } from './state/context';
import './styles/App.css';
import { initHeaderScrollListener } from './components/utils/scrollListener';
import PresentationForm from './components/PresentationForm';
import ImageUploading from './components/ImageUploading';
import PresentationPreview from './components/PresentationPreview';
import SummaryPreview from './components/SummaryPreview';
import CodePreview from './components/CodePreview';
import useGeneratePresentation from './hooks/useGeneratePresentation';
import useGenerateSummary from './hooks/useGenerateSummary';
import useGenerateCode from './hooks/useGenerateCode';
import useUploadImage from './hooks/useUploadImage';

import options from './data/selectOptions';

function App() {
  const { selectedOption, setSelectedOption } = useContext(AppContext);
  const [presentationData, presentationLoading, generatePresentation] = useGeneratePresentation();
  const [summaryData, summaryLoading, generateSummary] = useGenerateSummary();
  const [generatedCode, codeLoading, generateCode] = useGenerateCode();
  const [uploadedImageData, imageLoading, uploadImage] = useUploadImage();

  useEffect(() => {
    initHeaderScrollListener();
  }, []);

  const handleGeneratePresentation = async (inputText) => {
    switch (selectedOption) {
      case 'Generate Post':
        await generatePresentation(inputText);
        break;
      case 'Summarise Text':
        await generateSummary(inputText);
        break;
      case 'Generate Code':
        await generateCode(inputText);
        break;
      default:
        alert('This option is not yet available. Please try again later.');
    }
  };

  const isLoading = presentationLoading || summaryLoading || codeLoading || imageLoading;

  return (
    <div className="App">
      <div className="select-container">
        <select
          className="select"
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="form-submit-effect">
        <PresentationForm onSubmit={handleGeneratePresentation} />
      </div>

      {isLoading ? (
        <div className="loading">
          <div className="loading-spinner" />
        </div>
      ) : presentationData ? (
        <PresentationPreview presentationData={presentationData} />
      ) : summaryData ? (
        <SummaryPreview summaryData={summaryData} />
      ) : generatedCode ? (
        <CodePreview generatedCode={generatedCode} />
      ) : uploadedImageData ? (
        <ImageUploading onImageUpload={uploadImage} />
      ) : null}
    </div>
  );
}
export default App;
