import React, { useState } from 'react';

interface ArrayInputsProps {
  initialValues: string[];
}

const ArrayInputs: React.FC<ArrayInputsProps> = ({ initialValues }) => {
  const [values, setValues] = useState<string[]>(initialValues);

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  const renderInputs = () => {
    return values.map((value, index) => (
      <input
        key={index}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    ));
  };

  return (
    <div>
      <h2>Array Inputs Example</h2>
      {renderInputs()}
    </div>
  );
};

export default ArrayInputs;
