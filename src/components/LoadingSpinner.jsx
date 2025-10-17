import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>Buscando ofertas... ¡Esto puede tardar un momento!</p>
    </div>
  );
};

export default LoadingSpinner;