import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeOne from "../MainContent/Pages/HomeOne";
import Login from "../MainContent/Pages/Login";
import PasswordForget from "../MainContent/Pages/PasswordForget";
import SignUp from "../MainContent/Pages/SignUp";
import DashboradIndex from "../../components/NewDashboard/App/App";
import AddConnection from "../../components/Dashboard/Pages/AddConnections";
import Services from "../../components/Dashboard/Pages/Services";
import ConnectionSummary from "../../components/Dashboard/Pages/Dashboard";

class mainbuilder extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomeOne} />
				<Route exact path="/index_1" component={HomeOne} />

				<Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
				<Route
					path={`${process.env.PUBLIC_URL}/password_forget`}
					component={PasswordForget}
				/>
				<Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/dashboard`}
					component={DashboradIndex}
				/>

				{/* <Route
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
				/> */}
			</Switch>
		);
	}
}

export default mainbuilder;
