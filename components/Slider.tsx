import React, { ReactNode, useState } from 'react';

export interface SliderProps {
  className?: string;
  verbose?: boolean;
}

export function Slider({ className, verbose }: SliderProps) {
  const [value, setValue] = useState('50');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={className} style={{ padding: '10px' }}>
      <input
        name="slider"
        style={{ margin: '0 0.6125rem' }}
        type="range"
        onChange={handleInputChange}
        value={value}
        min="0"
        max="100"
      />
      {value}
    </div>
  );
}
