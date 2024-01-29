// TimeInput.tsx
import React from 'react';
import "../styles/timeInput.css";

interface TimeInputProps {
  onChange: (time: string) => void;
  value: string;
}

const TimeInput: React.FC<TimeInputProps> = ({ onChange, value }) => {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="time"
      className="time-input"
      value={value}
      onChange={handleTimeChange}
    />
  );
};

export default TimeInput;
