import React from "react";
import { Link } from "react-router-dom";
import logo from "../content/Logo.png";

export default function Navbar(props) {
	return (
		<nav>
			<div className="left">
				<Link to="/" className="logo" id="page-1">
					<img src={logo} alt="CSED Logo" />
					<span>{props.title}</span>
				</Link>
			</div>
			<div className="right">
				<Link to="/" className="pages" id="page-2">
					<span>Home</span>
				</Link>
				<Link to="/team" className="pages" id="page-3">
					<span>Team</span>
				</Link>
				<Link to="/projects" className="pages" id="page-4">
					<span>Projects</span>
				</Link>
				<Link to="/events" className="pages" id="page-5">
					<span>Events</span>
				</Link>
				<Link to="/newsletter" className="pages" id="page-6">
					<span>Newletter</span>
				</Link>
				<Link to="/joinus" className="pages" id="page-7">
					<span>Join Us</span>
				</Link>
			</div>
		</nav>
	);
}
