import React, { useState } from 'react';
import "./css/About.css";

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <div key="bio">
      <ul className="clearfix">
        <li>Name: Minju Jang</li>
        <li>Age: 21</li>
        <li>Education: Ewha Womans University (2022 - Present)</li>
        <li>First Major: Cyber Security</li>
        <li>Second Major: North Korean Studies</li>
      </ul>
    </div>,
    <div key="volunteer">
      <article>
        <h3>Mentoring Experience</h3>
        <p>2018.03~2023.12</p>
        <p>I have been involved in various mentoring programs...</p>
      </article>
    </div>,
    <div key="work">
      <article>
        <h3>Tutoring</h3>
        <p>22.11.03~23.12</p>
        <p>Tutored elementary to high school students in Korean, English, and Mathematics...</p>
      </article>
    </div>,
  ];

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <section className="about" id="about">
      <div className="max-width">
        <div className="about-content">
          <div className="profile">
            <div className="minpic">
              <img src='./img/minju.jpg' alt="minju" />
            </div>
            {sections[currentSection]}
          </div>
          <div className="navigation-buttons">
            <button className="prev-on" onClick={prevSection}>Previous</button>
            <button className="next-on" onClick={nextSection}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
