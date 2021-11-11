import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from './components/Landing';
import Admin from './components/Admin';
import SowDetails from './components/SowDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Landing' element={<Landing />} />
          <Route path='/SowDetails' element={<SowDetails />} />
          <Route path='/Admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
