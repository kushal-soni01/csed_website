import "./Home.css";
import TypewriterVideo from "../components/TypewriterVideo";
import SplitHeading from "../components/SplitHeading";
import { Users, Target, Award, Zap, Globe, Rocket } from "lucide-react";
import AboutUs from "../components/AboutUs";
import ProjectCard from "../components/ProjectCard";
import HorizontalProjectCard from "../components/HorizontalProjectCard";
import blankImage from "../content/balnkImage.jpg";
import CoreMembers from "../components/CoreMembers";
import profile from "../content/profile.png";

const sectionsData = [
	{
		icon: <Target style={{ width: "100%", height: "100%" }} />,
		title: "Our Mission",
		content:
			"Fostering entrepreneurship and innovation in the academic community by providing mentorship, resources, and a platform for aspiring entrepreneurs to transform their ideas into reality.",
	},
	{
		icon: <Users style={{ width: "100%", height: "100%" }} />,
		title: "Our Community",
		content:
			"A vibrant ecosystem of 5000+ students, 200+ mentors, and 50+ successful startups. We bring together passionate individuals who dare to dream big and work towards building the future.",
	},
	{
		icon: <Award style={{ width: "100%", height: "100%" }} />,
		title: "Our Impact",
		content:
			"Over 100 startups incubated, ₹50+ crores raised by our alumni ventures, and recognition as one of India's leading entrepreneurship cells with national and international accolades.",
	},
];

const statsData = [
	{
		number: "10+",
		label: "Years of Excellence",
		icon: <Zap style={{ width: "100%", height: "100%" }} />,
	},
	{
		number: "5000+",
		label: "Community Members",
		icon: <Users style={{ width: "100%", height: "100%" }} />,
	},
	{
		number: "100+",
		label: "Startups Incubated",
		icon: <Rocket style={{ width: "100%", height: "100%" }} />,
	},
	{
		number: "50+",
		label: "Countries Reached",
		icon: <Globe style={{ width: "100%", height: "100%" }} />,
	},
];

const projects = [
	{
		source: blankImage,
		error: "Project Image",
		title: "Project-1",
		short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur ",
		long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
		progress: 100,
		progressLabel: "Completed",
		progressColor: "#4CAF50",
		showProgress: true,
	},
	{
		source: blankImage,
		error: "Project Image",
		title: "Project-2",
		short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur ",
		long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
		progress: 100,
		progressLabel: "Completed",
		progressColor: "#4CAF50",
		showProgress: true,
	},
	{
		source: blankImage,
		title: "In_Progress_Projects-1",
		short: "Modern responsive e-commerce platform built with React and Node.js",
		long: "A full-stack e-commerce solution featuring user authentication, payment integration, inventory management, and responsive design. Built using React, Node.js, MongoDB, and Stripe API for secure transactions.",
		progress: 100,
		progressLabel: "Completed",
		progressColor: "#4CAF50",
		showProgress: true,
	},
	{
		source: blankImage,
		title: "In_Progress_Projects-1",
		short: "iOS and Android app with intuitive user interface",
		long: "Cross-platform mobile application designed with user experience at the forefront. Features include offline functionality, push notifications, social media integration, and seamless synchronization across devices.",
		progress: 70,
		progressLabel: "Development",
		progressColor: "#2196F3",
		showProgress: true,
	},
];

const events = [
	{
		source: blankImage,
		error: "Project Image",
		title: "Event-1",
		short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur ",
		long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
	},
	{
		source: blankImage,
		error: "Project Image",
		title: "Event-2",
		short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur ",
		long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
	},
];

const members = [
	{
		name: "Shubh Singhal",
		post: "President",
		img: profile,
		quote: "Leadership is action, not position.",
	},
	{
		name: "Deepansh Goyal",
		post: "Mentor",
		img: profile,
		quote: "Let's build something amazing!",
	},
	{
		name: "Sparsh Sharma",
		post: "Vice-President",
		img: profile,
		quote: "Together, we grow and innovate.",
	},
];

function Home() {
	return (
		<>
			<TypewriterVideo />
			<AboutUs sections={sectionsData} stats={statsData} />
			<SplitHeading title="Projects" />
			<div className="horizontal-card-wrapper">
				{projects.map((project, index) => (
					<HorizontalProjectCard key={index} {...project} />
				))}
			</div>
			<SplitHeading title="Events" />
			<div className="card-wrapper">
				{events.map((event, index) => (
					<ProjectCard key={index} {...event} />
				))}
			</div>
			<SplitHeading title="Our Core Members" />
			<CoreMembers members={members} />
		</>
	);
}

export default Home;
