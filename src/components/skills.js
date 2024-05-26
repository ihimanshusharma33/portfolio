import React from 'react';
import data from './data.json'; 
function Skills() {
    return (
      <div  id='skills'>
        <h1 className='headings'><i className="fa-solid fa-award"></i> Skills</h1>
        <div className='skill-section'>
        <div >
          <div className='skill-container'>
            {data.skills.map((skill, index) => (
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
  