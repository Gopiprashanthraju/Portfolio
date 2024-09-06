import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-block name-block">
        <h1 className="about-greeting">Hey, I'm Gopi Prashanth Raju</h1>
      </div>

      <div className="about-block">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <strong>Gopi Prashanth Raju</strong>, currently pursuing a
          Bachelor of Engineering at
          <strong> Chaitanya Bharathi Institute of Technology</strong> in
          Hyderabad, Telangana, with a GPA of 9.18/10. I'm passionate about
          technology, software development, and AI, and I have hands-on
          experience working with a variety of tools and frameworks across both
          front-end and back-end development.
        </p>
      </div>

      <div className="about-block">
        <h2 className="about-title">Technical Skills</h2>
        <p className="about-text">
          <strong>Languages:</strong> R, Python, Java, JavaScript, C/C++
          <br />
          <strong>Frameworks/Libraries:</strong> React.js, Express.js, Flask,
          Django, TensorFlow, PyTorch, jQuery, Bootstrap, Node.js, NumPy,
          Pandas, Matplotlib
          <br />
          <strong>Databases/Tools:</strong> MySQL, MongoDB, Git
          <br />
          <strong>Concepts:</strong> Operating Systems, Computer Networks, Data
          Structures and Algorithms, AI, Machine Learning, Deep Learning, Data
          Analysis
        </p>
      </div>

      <div className="about-block">
        <h2 className="about-title">Certifications & Achievements</h2>
        <ul className="about-list">
          <li>Python Certifications: Google, Michigan University</li>
          <li>
            Java Programming (Duke University): Problem-solving with Software
          </li>
          <li>Full Stack Development (Udemy)</li>
          <li>
            Competitive Programming: HackerRank 5-star, LeetCode 1881, CodeChef
            3-star
          </li>
          <li>Hackathons: COSC HacktoberFest, Flipr WebD, TechGig ML</li>
          <li>Google Cloud Computing Certification</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
