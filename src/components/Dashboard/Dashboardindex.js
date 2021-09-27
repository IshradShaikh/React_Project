import React, { Fragment, useEffect, useState, Component } from "react";
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import Navbar from "./Navbar";
class Dashboardindex extends Component {
	componentDidMount() {
		if (this.props.dashboard === false) {
			this.props.UpdateDashboard();
		}
		window.onpopstate = (e) => {
			this.props.UpdateDashboardAgain();
		};
	}

	render() {
		return <Navbar />;
	}
}

const mapStatetoProps = (state) => {
	return {
		dashboard: state.ui_red.dashboard,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		UpdateDashboard: () =>
			dispatch({ type: actionTypes.DASHBOARD, value: true }),
		UpdateDashboardAgain: () =>
			dispatch({ type: actionTypes.DASHBOARD, value: false }),
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(Dashboardindex);
