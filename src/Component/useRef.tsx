import React, { useRef, useEffect } from 'react';

const RefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleButtonClick = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  return (
    <div className="container">
      <h2>Ref Example</h2>
      <input ref={inputRef} type="text" placeholder="Enter something..." />
      <button onClick={handleButtonClick}>Show Input Value</button>
    </div>
  );
};

export default RefExample;
