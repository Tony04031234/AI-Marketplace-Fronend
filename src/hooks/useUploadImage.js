// useUploadImage.js
import { useState } from 'react';
import * as api from '../api';

const useUploadImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageData, setUploadedImageData] = useState(null);

  const uploadImage = async (file) => {
    setIsLoading(true);
    try {
      const data = await api.uploadImage(file);
      setUploadedImageData(data);
    } catch (error) {
      console.error('Error:', error);
      alert(
        'An error occurred while processing the image. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return [uploadedImageData, isLoading, uploadImage];
};

export default useUploadImage;
