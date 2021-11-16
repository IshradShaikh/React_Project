import './App.css';
import SowDetail from './components/SowDetail';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Admin from './components/crud';
import NavBar from './components/NavBar';
import Analytics from './components/Analytics'


function App() {
  return (
    <div className="App">
     <Router>
     <NavBar/>
        <Routes>
          <Route path='/' element={<div className="App-body"><Login /></div>} />
          <Route path='/Landing' element={<div className="App-body"><Landing /></div>} />
          <Route path='/SowDetail' element={<SowDetail />} />
           <Route path='/Admin' element={<Admin />} /> 
           <Route path='/Analytics' element={<Analytics />} /> 
        </Routes>
      
    </Router>
   {/* <SowDetails/> */}
    </div>
  );
}

export default App;
