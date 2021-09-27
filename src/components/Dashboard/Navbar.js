import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Popover from "react-bootstrap/Popover";
import * as BsIcons from "react-icons/bs";
function Navbar() {
	const [sidebar, setSidebar] = useState(true);

	const showSideBar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSideBar} />
						<Link to="#" style={{ color: "White", marginLeft: "3rem" }}>
							<b>Candent</b>
						</Link>
					</Link>
					<Link to="#" className="menu-bars">
						<FaIcons.FaUserCircle
							onClick={() => {
								alert("LogOut");
							}}
							style={{ size: "10px", marginRight: "1rem" }}
						/>
					</Link>
				</div>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSideBar}>
						<li className="navbar-toggle" style={{ marginBottom: "3rem" }}>
							<Link to="#" className="menu-bars">
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
