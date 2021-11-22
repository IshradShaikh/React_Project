import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Login from './components/Login';
import Landing from './components/Landing';
import Admin from './components/Admin';
import SowDetails from './components/SowDetails';
import ResetPassword from './components/ResetPassword';
import Analytics from './components/Analytics';
import Listofsow from './components/Listofsow';
import Header from "./components/Header"

function App() {

  const [user, setUser] = React.useState({ username: "", isLoggedIn: false })
  const callback = (username, isLoggedIn) => {
    setUser({ username: username, isLoggedIn: isLoggedIn })
  }

  return (
    <>
      <Router>
        <div>
          {user.isLoggedIn && <Header user={user} callback={callback} />}
          <Routes>
            {/* <Redirect to='/' /> */}

            {user.isLoggedIn ?
              <>
                {/* <Route path='/ResetPassword' element={<ResetPassword />} /> */}
                <Route path='/Landing' element={<Landing user={user} />} />
                <Route path='/SowDetails' element={<SowDetails />} />
                <Route path='/Admin' element={<Admin />} />
                <Route path='/Analytics' element={<Analytics />} />
                <Route path='/Listofsow' element={<Listofsow />} />
              </> :
              <>
                <Route exact path='/Login' element={<Login callback={callback} />} />
                <Route exact path='/ResetPassword' element={<ResetPassword />} />
                {/* <Route exact path='/' element={()=>window.location.replace('/')}/> */}
                {/* <Route exact path='/Landing' element={()=>window.location.replace('/')}/>
                <Route exact path='/SowDetails' element={()=>window.location.replace('/')}/>
                <Route exact path='/Admin' element={()=>window.location.replace('/')}/>
                <Route exact path='/Analytics' element={()=>window.location.replace('/')}/>
                <Route exact path='/Listofsow' element={()=>window.location.replace('/')}/> */}
              </>
            }
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
