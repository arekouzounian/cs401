import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu" style={{listStyleType: 'none'}}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export {Dropdown};