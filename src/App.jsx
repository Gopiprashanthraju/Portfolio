import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./assets/Components/Nav";
import Projects from "./assets/Components/Projects";
import "./App.css";
import Experience_Education from "./assets/Components/Experience_Education";
import About from "./assets/Components/About";
const educationDetails = [
  {
    degree: "Bachelor of Engineering (GPA: 9.18 / 10)",
    institution: "Chaitanya Bharathi Institute of Technology",
    duration: "Nov 2021 - May 2025",
    coursework:
      "Data Structures and Algorithms (Java), Probability & Statistics in CS (Python), Machine Learning, Data Analysis, SQL, HTML, CSS, JavaScript, MERN Stack, Numpy, Pandas",
  },
];

const experienceDetails = [
  {
    role: "Software Development Engineer Intern",
    company: "Providence",
    duration: "June 2024 – Aug 2024",
    description:
      "Managed automation of network devices, generating automatic output ZIP files and implementing rule-checking UI using Django. Developed scripts for network device configuration and event logging, improving efficiency by 30%.",
  },
];

const ExperienceEducationPage = () => {
  return (
    <div>
      <Experience_Education title="Education" details={educationDetails} />
      <Experience_Education title="Experience" details={experienceDetails} />
    </div>
  );
};

// Projects Component for the Projects page
const Proj = () => {
  return (
    <>
      <Projects
        link="https://www.example.com/voyagemate"
        image="/Train.jpeg" // Replace with actual image URL
        title="VoyageMate - MERN Stack Website"
        description="Developed a full-stack web application with user authentication and personalized travel suggestions. Integrated live tracking and PNR status checks, leveraging MongoDB for data management."
        technologies="MongoDB, Express.js, React, Node.js"
      />
      <Projects
        link="https://www.example.com/class-attendance"
        image="Attendance.jpeg" // Replace with actual image URL
        title="Automatic Class Attendance Tkinter App"
        description="Created a Tkinter app for automating attendance using face recognition and CSV for data storage. Designed interfaces for both students and teachers to manage and view attendance records."
        technologies="Python, Tkinter, Face Recognition, CSV"
      />
      <Projects
        link="https://www.example.com/clothing-data"
        image="shopping.webp" // Replace with actual image URL
        title="Clothing Website Data Scraping and CNN Model Development"
        description="Scraped data from a clothing website and developed a CNN model to predict garment prices and ratings. Preprocessed data for model training, enhancing accuracy through normalization and handling missing values."
        technologies="Python, Selenium, CNN, NumPy, Pandas, TensorFlow"
      />
      <Projects
        link="https://www.example.com/silentvox"
        image="silent.png" // Replace with actual image URL
        title="SilentVox - Video Sharing Platform"
        description="Developed a dynamic web application for secure video uploading, sharing, and viewing. Implemented efficient search functionality to help users navigate vast online content."
        technologies="MongoDB, Express.js, React, Node.js"
      />
      <Projects
        link="https://www.example.com/cric-analysis"
        image="cricket.avif" // Replace with actual image URL
        title="Cric Analysis Using R"
        description="Analyzed cricket matches between India and Australia, visualized data, and identified key players. Utilized data analysis techniques to determine the best playing 11 based on match data."
        technologies="R, Data Analysis"
      />
    </>
  );
};

// Experience Component for the Experience page
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/project" element={<Proj />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperienceEducationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
