// api.js

const API_URL = 'http://localhost:8000/api';

async function fetchWithJson(url, options) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export function generatePresentation(inputText) {
  return fetchWithJson(`${API_URL}/generate_presentation`, {
    method: 'POST',
    body: JSON.stringify({ inputText }),
  });
}

export function generateSummary(inputText) {
  return fetchWithJson(`${API_URL}/generate_summary`, {
    method: 'POST',
    body: JSON.stringify({ inputText }),
  });
}

export function generateCode(prompt) {
  return fetchWithJson(`${API_URL}/generate_code`, {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  });
}

export function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  return fetch(`${API_URL}/process_image`, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}

// add the rest of your API calls here
