// Snippet 14 from Chapter 5
// Section: Forms and Controlled Components
// Subsection: Handling Various Input Types
// Language: typescript
// Description: import React, { useState, ChangeEvent, FormEvent }...
// 
import React, { useState, ChangeEvent, FormEvent } from 'react';

function ComprehensiveForm(): JSX.Element {
  const [textValue, setTextValue] = useState<string>('');
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('option2'); // Default select value
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>('A'); // Default radio value

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value);
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextAreaValue(e.target.value);
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked);
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => setRadioValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      textValue,
      textAreaValue,
      selectValue,
      isChecked,
      radioValue,
    });
    alert('Form data logged to console!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text Input */}
      <input type="text" value={textValue} onChange={handleTextChange} placeholder="Text Input" />
      <br />

      {/* Textarea */}
      <textarea value={textAreaValue} onChange={handleTextAreaChange} placeholder="Textarea" />
      <br />

      {/* Select Dropdown */}
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />

      {/* Checkbox */}
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Agree to terms
      </label>
      <br />

      {/* Radio Buttons */}
      <fieldset>
        <legend>Choose One:</legend>
        <label>
          <input type="radio" name="choice" value="A" checked={radioValue === 'A'} onChange={handleRadioChange} /> A
        </label>
        <label>
          <input type="radio" name="choice" value="B" checked={radioValue === 'B'} onChange={handleRadioChange} /> B
        </label>
      </fieldset>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
export default ComprehensiveForm;