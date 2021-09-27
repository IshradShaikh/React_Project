import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import mainbuilder from "./containers/mainbuilder/mainbuilder";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
	render() {
		let layout = null;
		console.log("TopBar " + this.props.topbar);
		console.log("loginpage " + this.props.loginpage);
		console.log("islight " + this.props.islight);
		console.log("dashboard " + this.props.dashboard);

		layout = (
			<Layout
				topbar={this.props.topbar}
				islight={this.props.islight}
				loginpage={this.props.loginpage}
				dashboard={this.props.dashboard}
			>
				<Switch>
					<Route path="/" component={mainbuilder} />
				</Switch>
			</Layout>
		);

		return <div className="App">{layout}</div>;
	}
}
const mapStatetoProps = (state) => {
	console.log("state", state);
	return {
		topbar: state.ui_red.topbar,
		loginpage: state.ui_red.loginpage,
		islight: state.ui_red.islight,
		dashboard: state.ui_red.dashboard,
	};
};

export default withRouter(connect(mapStatetoProps)(App));
