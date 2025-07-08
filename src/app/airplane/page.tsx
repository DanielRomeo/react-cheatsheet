"use client";
import React, { useState, useRef } from 'react';

const AirplaneDetector = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file?.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setError("Please upload a valid image.");
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError('');

    try {
      const blob = await (await fetch(selectedImage)).blob();
      const formData = new FormData();
      formData.append('image', blob, 'uploaded.jpg');

      const response = await fetch('http://localhost:5000/api/detect', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Failed to process');

      const resultBlob = await response.blob();
      setProcessedImage(URL.createObjectURL(resultBlob));
    } catch (err) {
      setError('Failed to process image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Airplane Detection</h1>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />

      <div className="my-3">
        {selectedImage && <img src={selectedImage} alt="Selected" width="300" />}
        {processedImage && <img src={processedImage} alt="Detected" width="300" />}
      </div>

      <div>
        <button onClick={handleSubmit} disabled={loading} className="btn btn-primary">
          {loading ? 'Processing...' : 'Detect Airplanes'}
        </button>
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default AirplaneDetector;
