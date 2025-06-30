import React, { useState } from "react";
import "./HorizontalProjectCard.css";

export default function HorizontalProjectCard(props) {
	const [flipped, setFlipped] = useState(false);
	const [hovered, setHovered] = useState(false);

	const handleClick = () => setFlipped(true);
	const handleMouseLeave = () => {
		setFlipped(false);
		setHovered(false);
	};

	// Default values for optional props
	const {
		source,
		error = "Project image",
		title = "Project Title",
		short = "Short description",
		long = "Detailed description",
		progress = 0,
		progressLabel = "Progress",
		progressColor = "#4CAF50",
		showProgress = true,
	} = props;

	return (
		<div
			className={`horizontal-card-container ${hovered ? "hovered" : ""} ${
				flipped ? "flipped" : ""
			}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<div className={`horizontal-card ${flipped ? "flipped" : ""}`}>
				<div className="horizontal-card-front" onClick={handleClick}>
					<img
						src={source}
						alt={error}
						className="horizontal-card-image"
					/>
					<div className="horizontal-card-content">
						<div className="horizontal-card-text">
							<h3 className="horizontal-card-title">{title}</h3>
							<p className="horizontal-card-description">
								{short}
							</p>
						</div>

						{showProgress && (
							<div className="progress-section">
								<div className="progress-label">
									<span>{progressLabel}</span>
									<span>{progress}%</span>
								</div>
								<div className="progress-bar-container">
									<div
										className="progress-bar"
										style={{
											width: `${Math.min(
												Math.max(progress, 0),
												100
											)}%`,
											background: `linear-gradient(90deg, ${progressColor}, ${progressColor}dd)`,
										}}
									></div>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className="horizontal-card-back" onClick={handleClick}>
					<h3 className="horizontal-card-title">{title}</h3>
					<p className="horizontal-card-description">{long}</p>
				</div>
			</div>
		</div>
	);
}
