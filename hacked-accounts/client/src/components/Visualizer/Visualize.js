import React from "react";
import "./Style.css";
import Data from "./Data";

const calculateAttendence = (attendence) => {
  let attendanceCount = 0;

  for (let i = 0; i < attendence.length; i++)
    if (attendence[i] === 'p') attendanceCount++;

  return attendanceCount;
}

const Bar = ({ _attendence_, rollno, name }) => {
  let color = "rgb(40, 250, 150)";
  let fcolor = "rgb(0, 0, 0)";
  let paddingLeft = 10;

  const attendence = calculateAttendence(_attendence_);
  const attendencePercentage = (attendence / _attendence_.length) * 100;

  if (attendencePercentage < 50) {
    color = "rgb(250, 40, 40)";
    fcolor = "rgb(250, 250, 250)";

  } else if (attendencePercentage < 75) {
    color = "rgb(250, 120, 50)";
    fcolor = "rgb(250, 250, 250)";
  }

  if (parseInt(attendencePercentage) == 0) {
    paddingLeft = 0;
  }

  const style = {
    height: `${attendencePercentage}%`,
    backgroundColor: color,
    paddingLeft: `${paddingLeft}px`,
    width: '20px',
    color: fcolor
  }

  return <li className="indi-plot" style={style}>
  </li>
}

const Visualize = () => {
  return <div id="graph">
    <ul className="plot-graph">

      {Data.map((studentData, index) => {
        return <Bar
          key={index}
          rollno={studentData[0].split(':')[0]}
          name={studentData[0].split(':')[1]}
          _attendence_={studentData[1]}
        />
      })}
    </ul>

    <ul className="listing-attendance">{
      Data.map((studentData, index) => {
        return (
        <li className="listing-attendance-names" key={index}>
          <div className="rollno-listing">{studentData[0].split(':')[0]}</div>
          <div className="name-listing">{studentData[0].split(':')[1]}</div>
        </li>
        )
      })}
    </ul>
  </div>
}

export default Visualize;