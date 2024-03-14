import React, { useState } from 'react';

const Checkbox = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

// Example usage
const checkbox = () => {
  const handleCheckboxChange = (isChecked) => {
    console.log('Checkbox checked:', isChecked);
  };

  return (
    <div>
      <h1>Checkbox Example</h1>
      <Checkbox label="Check me" onChange={handleCheckboxChange} />
    </div>
  );
};

export default checkbox;
