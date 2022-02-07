import { Routes, Route } from "react-router-dom";
import Locations from "./containers/Locations"
import Residents from "./containers/Residents"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="residents" element={<Residents />} />
      </Routes>
    </div>
  );
}

export default App;
