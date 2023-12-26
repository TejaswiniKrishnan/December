import React, { useState } from "react";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Form</h2>
      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && (
        <div>
          <h3>User selected {selectedOption}</h3>
          {selectedOption === "option1" && <p>HELLO USER</p>}
          {selectedOption === "option2" && <p>WELCOME USER</p>}
          {selectedOption === "option3" && <p>GOODBYE USER</p>}
        </div>
      )}
    </div>
  );
};

export default Form;
