import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/dashboard/ConnectionSummary",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "AddConnection",
		path: "/dashboard/Addconnection",
		icon: <AiIcons.AiFillEdit />,
		cName: "nav-text",
	},
	{
		title: "Create User",
		path: "/",
		icon: <AiIcons.AiFillEdit />,
		cName: "nav-text",
	},
	{
		title: "Create Group",
		path: "/",
		icon: <AiIcons.AiOutlineUsergroupAdd />,
		cName: "nav-text",
	},
	{
		title: "Services",
		path: "/dashboard/Services",
		icon: <AiIcons.AiOutlineUsergroupAdd />,
		cName: "nav-text",
	},
];
