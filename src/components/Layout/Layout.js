import React, { Component } from "react";
import AUX from "../../hoc/Aux_";
import TopBar from "../Topbar/Topbar";
import Header from "../Header/Header";
import HeaderLight from "../Header/HeaderLight";
import TopbarLight from "../Header/TopbarLight";
import Footer from "../Footer/Footer";

class Layout extends Component {
	render() {
		let layout = null;
		if (this.props.loginpage || this.props.dashboard) {
			layout = <AUX>{this.props.children}</AUX>;
		} else {
			layout = (
				<main>
					{this.props.islight ? <TopbarLight /> : <TopBar />}
					{this.props.islight ? <HeaderLight /> : <Header />}
					{this.props.children}
					<Footer />
				</main>
			);
		}
		return <div className="App" >{layout}</div>;
		// console.log("dashboard in layout", this.props.dashboard);
		// return (
		// 	<AUX>
		// 		{this.props.loginpage ? (
		// 			this.props.children
		// 		) : (
		// 			<main>
		// 				{this.props.islight ? <TopbarLight /> : <TopBar />}
		// 				{this.props.islight ? <HeaderLight /> : <Header />}
		// 				{this.props.children}
		// 				<Footer />
		// 			</main>
		// 		)}
		// 	</AUX>
		//);
	}
}

export default Layout;
