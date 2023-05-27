import './App.css';
import { Routes, Route } from "react-router-dom";

import JoinPage from './pages/JoinPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
