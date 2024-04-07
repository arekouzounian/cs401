import React, { useState } from 'react';
import { Dropdown } from './Dropdown'; // Adjust the import paths as needed
import { SchoolTerm } from './SchoolTerm';
import { scheduleData } from '../scheduleData'; // Adjust the import path as needed

const TermSelect = () => {
  const [selectedTermIndex, setSelectedTermIndex] = useState(null); // Was 0 before

  const termOptions = scheduleData.terms.map((term, index) => ({
    props: {
      value: index, // Using index as value for simplicity
      name: term.name, // Assuming each term has a name property
    }
  }));

  const handleSelectTerm = (option) => {
    const index = Number(option.value);
    console.log("selected term index: ", index);
    setSelectedTermIndex(index);
  };

  return (
    <div>
      <Dropdown options={termOptions} onSelect={handleSelectTerm} />
      <SchoolTerm termIndex={selectedTermIndex} />
    </div>
  );
};

export default TermSelect;
