import React, { useState } from "react";
import EventHero from "../components/EventHero";
import EventForm from "../components/EventForm";
import CompletedEventCard from "../components/CompletedEventCard";

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

const sampleEventWithAllDetails = {
	id: 1,
	title: "Innovate Tech Summit 2024",
	date: "October 26, 2024",
	imageUrl:
		"https://images.unsplash.com/photo-1519389950473-47ba0cfaee1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	summary:
		"A fantastic gathering of tech enthusiasts and industry leaders discussing the future of AI and sustainable technology.",
	// Structured description details
	descriptionDetails: {
		heading: "Unlocking the Future of AI & Sustainable Technologies",
		brief: "The Innovate Tech Summit 2024 was a groundbreaking event that brought together over 500 professionals, researchers, and students from across the globe. We explored the latest advancements in artificial intelligence, sustainable development, and their convergence. Vibrant discussions, interactive workshops, and insightful presentations were at the heart of this transformative experience. Participants left feeling inspired and equipped with new insights into the rapidly evolving tech landscape.",
		perks: [
			"Gained actionable insights from leading AI experts and innovators",
			"Networked extensively with industry professionals and peers",
			"Discovered cutting-edge sustainable technologies and solutions",
			"Participated in hands-on workshops and breakout sessions",
			"Received exclusive access to post-summit reports and presentations",
			"Experienced live tech demos and product launches",
		],
	},
	speakers: [
		{
			name: "Dr. Emily Chen",
			title: "Lead AI Researcher, Quantum Labs",
			photoUrl:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "Renowned for her pioneering work in explainable AI and ethical algorithm design, Dr. Chen leads groundbreaking research at Quantum Labs, pushing the boundaries of what AI can achieve responsibly.",
			linkedin: "https://www.linkedin.com/in/emilychen_ai",
			twitter: "https://twitter.com/emilychen_ai",
			type: "main", // Mark as main speaker
		},
		{
			name: "Mr. David Lee",
			title: "CEO, GreenTech Solutions",
			photoUrl:
				"https://images.unsplash.com/photo-1507003211169-e69adba43d5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "A visionary leader in sustainable technology, David has transformed GreenTech Solutions into a global leader in renewable energy infrastructure and eco-friendly innovations.",
			linkedin: "https://www.linkedin.com/in/davidlee_greentech",
			twitter: "https://twitter.com/davidlee_gt",
			type: "main", // Mark as main speaker
		},
		{
			name: "Ms. Sarah Joshi",
			title: "Chief Sustainability Officer, EcoCorp",
			photoUrl:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "Sarah is an advocate for corporate environmental responsibility, driving sustainable practices and policy development at EcoCorp, a leading eco-conscious enterprise.",
			linkedin: "https://www.linkedin.com/in/sarahjoshi_cso",
			type: "assistant", // Mark as assistant speaker
		},
		{
			name: "Dr. Alex Kim",
			title: "Workshop Facilitator, AI Guild",
			photoUrl:
				"https://images.unsplash.com/photo-1607990281513-88820c681ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "Alex specializes in interactive learning experiences, guiding participants through complex AI concepts in an approachable manner.",
			type: "assistant", // Mark as assistant speaker
		},
	],
	photos: [
		{
			url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Keynote speech in the main auditorium.",
		},
		{
			url: "https://images.unsplash.com/photo-1542744095-291d1f67b591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Attendees networking during a coffee break.",
		},
		{
			url: "https://images.unsplash.com/photo-1549646481-eb1011867825?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Interactive workshop on ethical AI principles.",
		},
		{
			url: "https://images.unsplash.com/photo-1531545511094-1bc7d0e401b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Exhibition hall showcasing new tech.",
		},
		{
			url: "https://images.unsplash.com/photo-1552588147-9f4a86b510ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Panel discussion on the future of sustainable energy.",
		},
	],
	sponsors: [
		{
			name: "Quantum Innovations",
			logoUrl:
				"https://www.google.com/s2/favicons?sz=64&domain_url=google.com",
			tier: "Platinum",
			website: "https://www.google.com",
		},
		{
			name: "FutureTech Corp",
			logoUrl: "https://www.microsoft.com/favicon.ico",
			tier: "Platinum",
			website: "https://www.microsoft.com",
		},
		{
			name: "EcoConnect Solutions",
			logoUrl: "https://www.apple.com/favicon.ico",
			tier: "Gold",
			website: "https://www.apple.com",
		},
		{
			name: "DataStream Analytics",
			logoUrl: "https://www.amazon.com/favicon.ico",
			tier: "Gold",
			website: "https://www.amazon.com",
		},
		{
			name: "Innovate Minds",
			logoUrl: "https://www.facebook.com/favicon.ico",
			tier: "Silver",
			website: "https://www.facebook.com",
		},
		{
			name: "GreenEnergy Fund",
			logoUrl: "https://www.wikipedia.org/favicon.ico",
			tier: "Silver",
			website: "https://www.wikipedia.org",
		},
	],
};

// Example event data with fewer details (e.g., no sponsors, simpler description)
const eventWithoutSomeDetails = {
	id: 2,
	title: "Community Art Fair 2024",
	date: "September 15, 2024",
	imageUrl:
		"https://images.unsplash.com/photo-1596706853760-4965ef25ac41?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	summary:
		"A vibrant exhibition showcasing local talent and fostering community engagement through art.",
	descriptionDetails: {
		// Structured description, but simpler
		heading: "Celebrating Local Artistry",
		brief: "The Community Art Fair provided a platform for emerging and established local artists to display their work. Visitors enjoyed diverse artistic expressions, live demonstrations, and interactive art sessions, making it a truly engaging community event.",
		perks: [
			"Explored unique local artworks",
			"Met talented regional artists",
			"Engaged in creative workshops",
			"Supported the local art scene",
		],
	},
	speakers: [], // No speakers for this event
	photos: [
		{
			url: "https://images.unsplash.com/photo-1616400619175-5be329267f56?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Paintings on display at the fair.",
		},
		{
			url: "https://images.unsplash.com/photo-1606787620864-10025732669e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Sculptures captivating the audience.",
		},
		{
			url: "https://images.unsplash.com/photo-1579783900882-c0d3f177636f?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Live art demonstration.",
		},
	],
	sponsors: [], // No sponsors for this event
};

// Example event data using the old 'description' string for fallback test
const eventOldDescription = {
	id: 3,
	title: "Historic Preservation Workshop",
	date: "November 10, 2023",
	imageUrl:
		"https://images.unsplash.com/photo-1549414275-c0f56a524a87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	summary:
		"Hands-on workshop on techniques for preserving historical buildings and artifacts.",
	description:
		"This workshop covered foundational techniques in historic preservation, including material conservation, documentation, and ethical considerations. Participants worked on a mock historical facade, gaining practical experience in restoration methods. Experts shared insights on best practices and emerging trends in the field, emphasizing the importance of preserving cultural heritage.", // Old description string
	speakers: [
		{
			name: "Dr. Jane Doe",
			title: "Lead Historian",
			photoUrl:
				"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "Dr. Jane Doe is a celebrated historian focusing on architectural conservation and urban heritage studies.",
			type: "main", // Mark as main speaker
		},
		{
			name: "Mr. John Smith",
			title: "Restoration Specialist",
			photoUrl:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			bio: "John assists in practical demonstrations and provides one-on-one guidance during workshops.",
			// No type specified, will default to 'assistant' for flexibility
		},
	],
	photos: [], // No photos for this event
	sponsors: [
		{
			name: "Local Heritage Fund",
			logoUrl: "https://www.unesco.org/themes/favicon.ico",
			website: "https://www.unesco.org",
		},
	], // One sponsor
};

function Events() {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<EventHero
				{...eventData}
				onRegisterClick={() => setShowForm(true)}
			/>
			{showForm && <EventForm onClose={() => setShowForm(false)} />}
			<div className="App" style={{ padding: "20px" }}>
				<h1
					style={{
						textAlign: "center",
						color: "#2c3e50",
						marginBottom: "30px",
						fontSize: "2.5em",
					}}
				>
					Completed Events Showcase 🌟
				</h1>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: "30px",
					}}
				>
					<CompletedEventCard event={sampleEventWithAllDetails} />
					<CompletedEventCard event={eventWithoutSomeDetails} />
					<CompletedEventCard event={eventOldDescription} />
				</div>
			</div>
		</>
	);
}
export default Events;
