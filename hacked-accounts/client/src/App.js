import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import VisualizePage from './pages/VisualizePage';

function App() {
  return (
    <div className="App">
      <VisualizePage />

      {/* <Routes> */}
        {/* <Route path="/" element={ <HomePage/> } /> */}
        {/* <Route path="/Attendance" element={ <AttendancePage /> } /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
