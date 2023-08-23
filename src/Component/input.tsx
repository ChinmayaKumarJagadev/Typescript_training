import React, { useState } from 'react';

const InputWithButton: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue) {
      alert(`You entered: ${inputValue}`);
    } else {
      alert('Input value is empty.');
    }
  };

  return (
    <div>
      <h2>Input with Button Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <button onClick={handleButtonClick}>Show Alert</button>
    </div>
  );
};

export default InputWithButton;
