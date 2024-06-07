// src/components/Skills.js
import React from 'react';
import SkillBar from './SkillBar.js'; // A hypothetical component for skill bars
import './css/Skills.css'; 

const Skills = () => (
  <section className="skills" id="skills">
    <div className="skillbox">
      <h2 className="title">My Skills</h2>
      <div className="skills-content">
        {/* List of skills using a reusable 'SkillBar' component */}
        <SkillBar skill="HTML" percentage="50%" />
        <SkillBar skill="CSS" percentage="50%" />
        <SkillBar skill="JavaScript" percentage="50%" />
        <SkillBar skill="React" percentage="50%" />
        <SkillBar skill="Java" percentage="50%" />
        <SkillBar skill="PHP" percentage="50%" />
        <SkillBar skill="Linux" percentage="50%" />
      </div>
    </div>
  </section>
);

export default Skills;
