// useGenerateSummary.js

import { useState } from 'react';
import * as api from '../api';

const useGenerateSummary = () => {
  const [summaryData, setSummaryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateSummary = async (inputText) => {
    setIsLoading(true);
    setSummaryData(null);
    try {
      const summary = await api.generateSummary(inputText);
      setSummaryData(summary);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return [summaryData, isLoading, generateSummary];
};

export default useGenerateSummary;
