import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
	const [flipped, setFlipped] = useState(false);
	const [hovered, setHovered] = useState(false);

	const handleClick = () => setFlipped(true);
	const handleMouseLeave = () => {
		setFlipped(false);
		setHovered(false);
	};

	return (
		<div
			className={`card-container ${hovered ? "hovered" : ""} ${
				flipped ? "flipped" : ""
			}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<div className={`card ${flipped ? "flipped" : ""}`}>
				<div className="card-front" onClick={handleClick}>
					<img
						src={props.source}
						alt={props.error}
						className="card-image"
					/>
					<h3>{props.title}</h3>
					<p>{props.short}</p>
				</div>
				<div className="card-back" onClick={handleClick}>
					<h3>{props.title}</h3>
					<p>{props.long}</p>
				</div>
			</div>
		</div>
	);
}
