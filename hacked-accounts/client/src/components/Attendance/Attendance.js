import React, { useState, useEffect } from 'react';
import './Style.css';

const StudentMark = ({ Name, RollNo }) => {

  function markPresent() {
  }

  return <li className='student-mark'>
    <div className='student-rollno'> {RollNo} ({Name}) </div>
    <div className='student-mark-btns'>
      <button className='mark-present' onClick={() => markPresent()} > Present </button>
      <button className='mark-absent'> Absent </button>
    </div>
  </li>
}

const Attendence = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("./Students.json")
      .then(res => res.json())
      .then(data => {
        setStudent(Object.values(data));
      })
  }, []);

  return (
    <React.Fragment>

      <h1 id='attendance-page-heading'>Mark Attendance</h1>

      <ul id='attendance-list'> {
        student.map((item, index) => {
          return <StudentMark key={index} RollNo={index + 1} Name={item} />
        })
      }
        <button id='submit-attendance'>Submit</button>
      </ul>

    </React.Fragment>
  )
}

export default Attendence;