import React from 'react';
import './ProgressBar.css';

const ProgressBarComponent = ({ currentStep }) => {
  return (
    <>
    <div className="progress-container">
      <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
        <div className="circle">1</div>
        <span>Customer Details</span>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
        <div className="circle">2</div>
        <span>Payment Method</span>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 3 ? 'completed' : ''}`}>
        <div className="circle">3</div>
        <span>Confirmation</span>
      </div>
    </div>
    </>
  );
};

export default ProgressBarComponent;
