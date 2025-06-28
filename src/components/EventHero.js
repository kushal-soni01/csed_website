// components/EventHero.js
import React from "react";
import { CalendarDays } from "lucide-react";
import "../pages/Events.css";

function EventHero({
	name,
	slogan,
	description,
	date,
	fee,
	videoUrl,
	gifUrl,
	onRegisterClick,
}) {
	return (
		<div className="event-hero">
			<video className="event-video" autoPlay muted loop>
				<source src={videoUrl} type="video/mp4" />
			</video>

			<div className="event-overlay" />

			<div className="event-content">
				<div className="event-left">
					<h1 className="event-name">{name}</h1>
					<h3 className="event-slogan">{slogan}</h3>
					<p className="event-desc">{description}</p>

					<div className="event-info">
						<div className="event-date">
							<CalendarDays className="calendar-icon" />
							<span>{date}</span>
						</div>
						<div className="event-fee">Fee: ₹{fee}</div>
					</div>

					<button className="register-btn" onClick={onRegisterClick}>
						Register Now
					</button>
				</div>

				<div className="event-right">
					<img src={gifUrl} alt="event gif" className="event-gif" />
				</div>
			</div>
		</div>
	);
}

export default EventHero;
