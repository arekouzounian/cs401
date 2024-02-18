import { Dropdown } from './components/Dropdown';
import { SchoolTerm } from './components/SchoolTerm'
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [<SchoolTerm name={'Term 1'}/>, <SchoolTerm name={'Term 2'}/>, <SchoolTerm name={'Term 3'}/>];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Dropdown Menu Example</h1>
      <Dropdown options={options} onSelect={handleSelect} />
      {(selectedOption && <p>{selectedOption}</p>) || <p>Select a term</p>}
    </div>
  );
}

export default App;
