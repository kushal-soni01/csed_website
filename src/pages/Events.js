import React, { useState } from "react";
import EventHero from "../components/EventHero";
import EventForm from "../components/EventForm";

const eventData = {
	name: "<EVENT NAME>",
	slogan: "<EVENT SLOGAN>",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
	date: "XX XX XXXX",
	fee: "##",
	videoUrl: "https://example.com/bg-video.mp4",
	gifUrl: "https://example.com/event.gif",
};

const Events = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<>
				<EventHero
					{...eventData}
					onRegisterClick={() => setShowForm(true)}
				/>
				{showForm && <EventForm onClose={() => setShowForm(false)} />}
			</>
		</>
	);
};

export default Events;
