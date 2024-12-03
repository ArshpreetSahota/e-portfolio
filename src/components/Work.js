import React from 'react';
import projectImage from '../images/p2.jpg';
import projectImages from '../images/p1.jpg'; 

const Work = () => {
  return (
    <div>
      <h2>Work/Projects</h2>
      <ul>
        <li>
          <h3>Brar grocery Store</h3>
          <p>
            Developed a dynamic grocery website utilizing HTML, CSS, and JavaScript.<br />
            Implemented interactive features including search functionality, category filters, and responsive design to enhance user experience.<br />
            Utilized modern web development techniques to create an intuitive and visually appealing interface, resulting in improved accessibility and user engagement.
          </p>
          <img src={projectImages} alt="Project 1" style={{ width: '200px', height: '200px' }} />
          <a href="https://www.brars.com/">Project Link</a>
        </li>
        {/* Add more projects here */}
      </ul>
    </div>
  );
};

export default Work;
