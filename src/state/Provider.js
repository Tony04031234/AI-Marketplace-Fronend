// state/Provider.js

import React, { useState } from 'react';
import { AppContext } from './context';

export function Provider({ children }) {
  const [presentationData, setPresentationData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Generate Post');

  return (
    <AppContext.Provider
      value={{
        presentationData,
        setPresentationData,
        summaryData,
        setSummaryData,
        generatedCode,
        setGeneratedCode,
        isLoading,
        setIsLoading,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
