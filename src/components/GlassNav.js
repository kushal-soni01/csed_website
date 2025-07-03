import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GlassNav.css";

const GlassNav = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ name: "About Us", to: "/about" },
		{ name: "Team", to: "/team" },
		{ name: "Events", to: "/events" },
		{ name: "Projects", to: "/projects" },
		{ name: "Newsletter", to: "/newsletter" },
		{ name: "Join Us", to: "/join" },
	];

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	// const toggleMobileMenu = () => {
	// 	setIsMobileMenuOpen(!isMobileMenuOpen);
	// };

	return (
		<div
			className={`navbar-container ${
				isDarkMode ? "dark-mode" : "light-mode"
			}`}
		>
			{/* SVG Filter for Glass Distortion */}
			<svg style={{ display: "none" }}>
				<filter id="glass-distortion">
					<feTurbulence
						type="turbulence"
						baseFrequency="0.008"
						numOctaves="2"
						result="noise"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="77"
					/>
				</filter>
			</svg>

			<nav className="glass-nav">
				<div className="glass-filter"></div>
				<div className="glass-overlay"></div>
				<div className="glass-specular"></div>

				<div className="glass-content">
					{/* Desktop Layout */}
					<div className="desktop-nav">
						{/* Logo */}
						<div className="logo-section">
							<Link to="/" className="logo" onClick={closeMenu}>
								CSED
							</Link>
						</div>

						{/* Navigation Items */}
						<ul className="nav-list">
							{navItems.map((item) => (
								<li key={item.name}>
									<Link
										to={item.to}
										className={`nav-item`}
										onClick={closeMenu}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>

						{/* Theme Switch */}
						<div className="theme-switch-section">
							<button
								className="theme-switch"
								onClick={toggleTheme}
							>
								{isDarkMode ? (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<circle cx="12" cy="12" r="5" />
										<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
									</svg>
								) : (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* Mobile Layout */}
					<div className="mobile-nav">
						{/* Mobile Menu Button */}
						<button
							className="mobile-menu-button"
							onClick={toggleMenu}
						>
							<div
								className={`hamburger ${
									isMobileMenuOpen ? "active" : ""
								}`}
							>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>

						{/* Logo */}
						<div className="logo-section">
							<Link
								to="#home"
								className="logo"
								onClick={closeMenu}
							>
								CSED
							</Link>
						</div>

						{/* Theme Switch */}
						<div className="theme-switch-section">
							<button
								className="theme-switch"
								onClick={toggleTheme}
							>
								{isDarkMode ? (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<circle cx="12" cy="12" r="5" />
										<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
									</svg>
								) : (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* Mobile Slide Menu */}
					<div
						className={`mobile-slide-menu ${
							isMobileMenuOpen ? "open" : ""
						}`}
					>
						<ul className="mobile-nav-list">
							{navItems.map((item) => (
								<li key={item.name}>
									<Link
										to={item.to}
										className={`nav-item`}
										onClick={closeMenu}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default GlassNav;
