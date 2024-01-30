
import React, { useState, useCallback } from 'react';
import '../styles/App.css';

function App() {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = useCallback(() => {
    if (inputValue.trim() !== '' && !skills.includes(inputValue)) {
      setSkills((prevSkills) => [...prevSkills, inputValue]);
      setInputValue('');
    }
  }, [inputValue, skills]);

  const handleDeleteSkill = useCallback((index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="App">
      <h1 id="heading">Use Callback Hook</h1>
      <div>
        <label htmlFor="skill-input">Skill:</label>
        <input
          type="text"
          id="skill-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="skill-add-btn" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} id={`skill-number-${index}`} onClick={() => handleDeleteSkill(index)}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
