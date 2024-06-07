import React from 'react';
import './css/Skills.css'; 
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-container">
      <div className="skill-name">{skill}</div>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width: percentage }}>
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
