import React from 'react';

interface StyledBoxProps {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  children: React.ReactNode;
}

const StyledBox: React.FC<StyledBoxProps> = ({
  backgroundColor = 'lightgray',
  color = 'black',
  padding = '10px',
  children,
}) => {
  const boxStyle: React.CSSProperties = {
    backgroundColor,
    color,
    padding,
  };

  return <div style={boxStyle}>{children}</div>;
};

export default StyledBox;
