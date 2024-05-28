import React from 'react';
import './About.css'; // Import your CSS file
const About = () => {
  return (
    <div className="contant">
      <h1>About Employee Management System</h1>
      <p>
        The Employee Management System is a comprehensive solution designed to streamline and simplify the management of employees within an organization. It aims to improve the efficiency of HR and administrative processes while ensuring that employee information is securely and accurately maintained.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Employee Information Management: Maintain detailed records of all employees, including personal and professional details.</li>
        <li>Attendance Tracking: Keep track of employee attendance and leave requests.</li>
        <li>Salary and Benefits Management: Manage salary structures, benefits, and payroll processing.</li>
        <li>Performance Evaluation: Conduct employee performance reviews and assessments.</li>
        <li>Reports and Analytics: Generate reports and analytics to gain insights into workforce trends.</li>
      </ul>

      <h2>Our Team</h2>
      <p>
        The Employee Management System project is developed and maintained by a dedicated team of software engineers and designers. Our mission is to provide organizations with a reliable and user-friendly tool to manage their workforce effectively.
      </p>
      <ul>
        <li>John Smith - Project Manager</li>
        <li>Jane Doe - Lead Developer</li>
        <li>Emily Johnson - UI/UX Designer</li>
        <li>David Wilson - Backend Developer</li>
        <li>Sarah Martinez - Quality Assurance</li>
      </ul>
      <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback regarding the Employee Management System, please don't hesitate to contact us:</p>
      <p><b>Email:</b> contact@company.com</p>
      <p><b>Phone:</b> (123) 456-7890</p>
      <p><b>Address:</b> 123 Main St, City, Country</p>
      </div>
    </div>
  );
};

export default About;
