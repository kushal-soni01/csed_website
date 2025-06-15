import React from "react";

export default function Footer() {
	return (
		<div className="footer">
			<div className="headName">
				<h3>CSED - GLA University</h3>
			</div>
			<div className="email">
				<a className="links" href="mailto:csed.club@gla.ac.in">
					Email: csed.club@gla.ac.in
				</a>
			</div>
			<div className="sociolinks">
				<div className="links" id="link1">
					<a href="https://www.instagram.com/csed_club_glau/">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</div>
				<div className="links" id="link2">
					<a href="https://www.linkedin.com/company/csed-club-glau/posts/?feedView=all">
						<i className="fa-brands fa-linkedin fa- l"></i>
					</a>
				</div>
				<div className="links" id="link3">
					<a href="/">
						<i className="fa-brands fa-discord"></i>
					</a>
				</div>
				<div className="links" id="link4">
					<a href="/">
						<i className="fa-brands fa-square-x-twitter"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
