import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import AUX from "../../../hoc/Aux_";
import * as actionTypes from "../../../store/action";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { NotificationManager } from "react-notifications";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			apiState: "",
			success: false,
			error: false,
			errors: [],
		};
	}
	componentDidMount() {
		if (this.props.loginpage === false) {
			this.props.UpdateLogin();
		}
		window.onpopstate = (e) => {
			this.props.UpdateLoginAgain();
		};
	}
	handleSubmitClick = (event) => {
		event.preventDefault();
		this.setState({
			success: false,
			error: false,
			errors: null,
		});

		// Submit the email and password to the server
		const url = "/api/login";

		fetch(url, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
			method: "POST",
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					return response.json().then((err) => {
						throw err;
					});
				}
				return response.json();
			})
			.then((results) => {
				console.log("results ", results);
				const token = results.token;

				Cookies.set("token", token, {
					expires: 7,
				});
				NotificationManager.success(
					"You have successfully logged in",
					"Login Success"
				);
				setTimeout(() => {
					window.location.href = "/dashboard";
				}, 2000);
			})
			.catch((error) => {
				console.log("error ", error);
				this.state = {
					success: false,
					error: true,
					errors: error.errors,
				};
			});
	};

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value,
		});
	};

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value,
		});
	};
	render() {
		return (
			<AUX>
				<div className="bg-custom1">
					<section className="">
						<div className="container-fluid">
							<div className="col-lg-12">
								<div className="home-icon">
									<Link
										to="index_1"
										onClick={() => this.props.UpdateLoginAgain()}
										className="text-white"
									>
										<i id="my_icon" className="mdi mdi-home" />
									</Link>
								</div>
							</div>
						</div>
					</section>

					<section className="bg-custom section" align="center">
						<div className="login-table">
							<div className="login-table-cell">
								<div className="container">
									<div className="row justify-content-center mt-4">
										<div className="col-lg-4">
											<div className="text-center">
												<h1 className="text-white">Candent</h1>
												<p className="text-white-50 text-center">
													Sign in to continue to Candent.
												</p>
											</div>
											<div className="bg-white p-4 mt-4 rounded">
												<form className="login-form">
													<div className="row">
														<div className="col-lg-12 mt-4">
															<input
																type="email"
																className="form-control"
																placeholder="Email"
																required=""
																onChange={this.handleEmailChange}
															/>
														</div>
														<div className="col-lg-12 mt-4">
															<input
																type="password"
																className="form-control"
																placeholder="Password"
																required=""
																onChange={this.handlePasswordChange}
															/>
														</div>
														<div className="col-lg-12 mt-4">
															<div
																id="my_icon"
																className="custom-control custom-checkbox"
															>
																<input
																	type="checkbox"
																	className="custom-control-input"
																	id="customCheck1"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="customCheck1"
																>
																	Remember me
																</label>
															</div>
														</div>
														<div className="col-lg-12 mt-4 mb-3">
															<button
																className="btn btn-custom w-100"
																onClick={(event) =>
																	this.handleSubmitClick(event)
																}
															>
																Sign in
															</button>
														</div>
													</div>
												</form>
											</div>
											<div className="text-center mt-3">
												<p>
													<Link
														to="password_forget"
														className="text-white text-center text-capitalize font-weight-bold"
													>
														Forgot Your password ?
													</Link>
												</p>
												<p>
													<small className="text-white mr-2">
														Don't have an account ?
													</small>{" "}
													<Link
														to="signup"
														className="text-white text-capitalize font-weight-bold"
													>
														create an account
													</Link>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</AUX>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		loginpage: state.ui_red.loginpage,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
		UpdateLoginAgain: () =>
			dispatch({ type: actionTypes.LOGINPAGE, value: false }),
	};
};

//const { errors } = this.apiState;

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(Login);
