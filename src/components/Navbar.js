import React from "react";
import logo from "D:/CSED/csed_website/src/content/Logo.png";

export default function Navbar(props) {
	return (
		<nav>
			<div className="left">
				<a href="/" className="logo" id="page-1">
					<img src={logo} alt="CSED Logo" />
					<span>{props.title}</span>
				</a>
			</div>
			<div className="right">
				<a href="/" className="pages" id="page-2">
					<span>Home</span>
				</a>
				<a href="/" className="pages" id="page-3">
					<span>Team</span>
				</a>
				<a href="/" className="pages" id="page-4">
					<span>Projects</span>
				</a>
				<a href="/" className="pages" id="page-5">
					<span>Events</span>
				</a>
				<a href="/" className="pages" id="page-6">
					<span>Newletter</span>
				</a>
				<a href="/" className="pages" id="page-7">
					<span>Join Us</span>
				</a>
			</div>
		</nav>
	);
}
