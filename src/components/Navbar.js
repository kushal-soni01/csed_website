import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../content/Logo.png";

export default function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	// ✅ Auto-close drawer on window resize above 768px
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	return (
		<nav>
			<div className="left">
				<Link to="/" className="logo" onClick={closeMenu}>
					<img src={logo} alt="CSED Logo" />
					<span>{props.title}</span>
				</Link>
			</div>

			<div className={`right ${isOpen ? "show" : ""}`}>
				<Link to="/team" className="pages" onClick={closeMenu}>
					Team
				</Link>
				<Link to="/projects" className="pages" onClick={closeMenu}>
					Projects
				</Link>
				<Link to="/events" className="pages" onClick={closeMenu}>
					Events
				</Link>
				<Link to="/newsletter" className="pages" onClick={closeMenu}>
					Newsletter
				</Link>
				<Link to="/joinus" className="pages" onClick={closeMenu}>
					Join Us
				</Link>
			</div>

			<div className="hamburger" onClick={toggleMenu}>
				<div className={`bar ${isOpen ? "open" : ""}`}></div>
				<div className={`bar ${isOpen ? "open" : ""}`}></div>
				<div className={`bar ${isOpen ? "open" : ""}`}></div>
			</div>

			{isOpen && <div className="overlay" onClick={closeMenu}></div>}
		</nav>
	);
}
