import React, { useState } from 'react';
import "./Events.css";
import SplitHeading from "../components/SplitHeading";
import EventCard from '../components/RegistrationEventCard';

const events = [
	{
	  id: 1,
	  title: "Tech Innovation Summit 2025",
	  venue: "Convention Center, Downtown Mumbai",
	  date: "July 15, 2025",
	  time: "9:00 AM - 6:00 PM",
	  fee: "₹2,999",
	  introduction: "Join industry leaders and innovators for a day of cutting-edge technology discussions and networking opportunities.",
	  shortDescription: "Explore the latest trends in AI, blockchain, and digital transformation with expert speakers and interactive workshops. Connect with like-minded professionals and discover the future of technology.",
	  perks: [
		"Networking lunch with industry leaders",
		"Exclusive access to tech demos and prototypes",
		"Certificate of participation",
		"Premium swag bag with tech gadgets",
		"Access to recorded sessions for 6 months",
		"VIP networking cocktail hour"
	  ],
	  poster: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=200&h=300&fit=crop&crop=center"
	}
]


function Events() {
	return (
		<>
			<SplitHeading title="Upcoming Event" />
			{events.map(event => (
				<EventCard
					key={event.id}
					event={event}
				/>
			))}
			<div>Hello World</div>
			<div>Hello World</div>
			<div>Hello World</div>
		</>
	);
}

export default Events;
