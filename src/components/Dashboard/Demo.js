import React from 'react'
import AddConnection from "./Pages/AddConnections";
import Services from "./Pages/Services";
import ConnectionSummary from "./Pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
function Demo() {
    return (
        <div>
            <Router>
        <Navbar/>
        <div>
          <Switch>
           
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/dashboard/Addconnection`}
					component={AddConnection}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/dashboard/Services`}
					component={Services}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/dashboard/ConnectionSummary`}
					component={ConnectionSummary}
				/>

          </Switch>
        </div>
      </Router>

        </div>
    )
}

export default Demo
