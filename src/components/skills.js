import React from 'react';
import skillsData from './skillLog.json'; 
function Skills() {
    return (
      <div>
        <div className='skill-section'>
        <div>
        <h1>Skills And Abilities</h1>
          <div className='skill-container'>
            {skillsData.map((skill, index) => (
              <div className="grid-item" key={index}>
                <img src={skill.icon} alt={skill.name} />
                <div className='skill-name'>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
  