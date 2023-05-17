// useGeneratePresentation.js

import { useState } from 'react';
import * as api from '../api';

function useGeneratePresentation() {
  const [isLoading, setIsLoading] = useState(false);
  const [presentationData, setPresentationData] = useState(null);

  const generatePresentation = async (inputText) => {
    setIsLoading(true);
    try {
      const data = await api.generatePresentation(inputText);
      setPresentationData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return [presentationData, isLoading, generatePresentation];
}

export default useGeneratePresentation;
