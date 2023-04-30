import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx"
import Charity from './screens/Charity';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charity" element={<Charity />} />
      </Routes>
    </div>
  );
}

export default App;
