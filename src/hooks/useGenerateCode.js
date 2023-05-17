import { useState } from 'react';
import * as api from '../api';

const useGenerateCode = () => {
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateCode = async (inputText) => {
    setIsLoading(true);
    setGeneratedCode(null);
    try {
      const code = await api.generateCode(inputText);
      setGeneratedCode(code.code);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return [generatedCode, isLoading, generateCode];
};

export default useGenerateCode;
