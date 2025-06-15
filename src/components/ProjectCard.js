import React from "react";

export default function ProjectCard(props) {
	return (
		<div className="project-card">
			<div className="card-inner">
				<div className="card-front">
					<img
						src={props.source}
						alt={props.error}
						className="card-img"
					/>
					<h3>{props.title}</h3>
					<p>{props.short}</p>
				</div>
				<div className="card-back">
					<h3>{props.title}</h3>
					<p>{props.long}</p>
				</div>
			</div>
		</div>
	);
}
