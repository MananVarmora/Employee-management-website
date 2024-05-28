import React, { useState } from 'react';
import './EmployeeProfile.css'; // Import your CSS file

const EmployeeProfile = () => {
  const [employees, setEmployees] = useState([
    {
      employeeID: 'E12345',
      name: 'John Doe',
      address: '123 Main St, City, Country',
      education: "Bachelor's Degree",
      experience: '5 years',
      phoneNumber: '(123) 456-7890',
      salary: '$60,000',
      image: '/images/employeelogo.png', // Replace with actual image path
    },
    {
      employeeID: 'E23456',
      name: 'Jane Smith',
      address: '456 Elm St, Town, Country',
      education: "Master's Degree",
      experience: '8 years',
      phoneNumber: '(234) 567-8901',
      salary: '$75,000',
      image: '/images/employeelogo.png', // Replace with actual image path
    },
    {
      employeeID: 'E34567',
      name: 'Alice Johnson',
      address: '789 Oak St, Village, Country',
      education: "Bachelor's Degree",
      experience: '3 years',
      phoneNumber: '(345) 678-9012',
      salary: '$50,000',
      image: '/images/employeelogo.png', // Replace with actual image path
    },
    {
      employeeID: 'E45678',
      name: 'Bob Wilson',
      address: '101 Pine St, Hamlet, Country',
      education: "Doctorate Degree",
      experience: '12 years',
      phoneNumber: '(456) 789-0123',
      salary: '$90,000',
      image: '/images/employeelogo.png', // Replace with actual image path
    },
    {
      employeeID: 'E56789',
      name: 'Eva Martinez',
      address: '202 Maple St, Suburb, Country',
      education: "Bachelor's Degree",
      experience: '6 years',
      phoneNumber: '(567) 890-1234',
      salary: '$70,000',
      image: '/images/employeelogo.png', // Replace with actual image path
    },
  ]);

  const handleAddEmployee = () => {
    // Add your logic to add a new employee here
    const newEmployee = {
      employeeID: 'E67890',
      name: 'New Employee',
      address: 'New Address',
      education: 'New Education',
      experience: 'New Experience',
      phoneNumber: 'New Phone',
      salary: 'New Salary',
      image: 'employee6.jpg', // Replace with actual image path
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleUpdateEmployee = (index) => {
    // Add your logic to update an employee here
    const updatedEmployees = [...employees];
    updatedEmployees[index].name = 'Updated Name';
    // Update other properties as needed
    setEmployees(updatedEmployees);
  };

  const handleDeleteEmployee = (index) => {
    // Add your logic to delete an employee here
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container">
      <h1>Employee Details</h1>
      
      <table className="table">
        <thead className="th">
          <tr>
            <th>Image</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Education</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="td">
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <img className="employee-image"
                  src={employee.image}
                  alt={employee.name}
                  
                />
              </td>
              <td>{employee.employeeID}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.salary}</td>
              <td>{employee.experience}</td>
              <td>{employee.education}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <button className="update-button" onClick={() => handleUpdateEmployee(index)}>Update</button>
                <button className="delete-button" onClick={() => handleDeleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-employee-button" onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default EmployeeProfile;
