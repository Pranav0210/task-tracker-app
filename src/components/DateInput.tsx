import React, { useState } from 'react';
import '../styles/dateInput.css'; // Import the CSS file

interface DateInputProps {
  onChange: (date: Date | null) => void;
  value: Date | null;
}

const DateInput: React.FC<DateInputProps> = ({ onChange, value }) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value ? new Date(e.target.value) : null;
    onChange(selectedDate);
  };

  return (
    <input
      type="date"
      className="date-input"
      value={value ? value.toISOString().slice(0, 10) : ''}
      onChange={handleDateChange}
    />
  );
};

export default DateInput;
