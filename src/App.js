import "./App.css";
import Navbar from "./components/Navbar";
import TypewriterVideo from "./components/TypewriterVideo";
import SplitHeading from "./components/SplitHeading";
import { Users, Target, Award, Zap, Globe, Rocket } from "lucide-react";
import AboutUs from "./components/AboutUs";
import ProjectCard from "./components/ProjectCard";
import HorizontalProjectCard from "./components/HorizontalProjectCard";
import blankImage from "./content/balnkImage.jpg";
import CoreMembers from "./components/CoreMembers";
import profile from "./content/profile.png";
import Footer from "./components/Footer";

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
	},
	{
		source: blankImage,
		error: "Project Image",
		title: "Project-2",
		short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur ",
		long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea temporibus. In beatae iusto deleniti hic accusantium provident officiis possimus minima consectetur cum, voluptate magnam quod sunt asperiores vero non. Est, velit error? In, accusantium. Maxime rerum nostrum, suscipit dolor ex, consequuntur dolorem quo alias quia ipsum reprehenderit eaque illum, quidem aspernatur.",
	},
];

const In_Progress_Projects = [
	{
		source: blankImage,
		title: "In_Progress_Projects-1",
		short: "Modern responsive e-commerce platform built with React and Node.js",
		long: "A full-stack e-commerce solution featuring user authentication, payment integration, inventory management, and responsive design. Built using React, Node.js, MongoDB, and Stripe API for secure transactions.",
		progress: 85,
		progressLabel: "Development",
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

function App() {
	return (
		<>
			<Navbar title="CSED CLUB GLAU" />
			<TypewriterVideo />

			<AboutUs sections={sectionsData} stats={statsData} />
			<SplitHeading title="Projects" />
			<div className="card-wrapper">
				{projects.map((proj, index) => (
					<ProjectCard key={index} {...proj} />
				))}
			</div>
			<SplitHeading title="In_Progress_Projects" />
			<div className="horizontal-card-wrapper">
				{In_Progress_Projects.map((In_Progress_Projects, index) => (
					<HorizontalProjectCard
						key={index}
						{...In_Progress_Projects}
					/>
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
			<Footer />
		</>
	);
}

export default App;

// Color Pallete encoding

// /* CSS HEX */
// --lavender-web: #d9dbf1ff;
// --french-gray: #d0cdd7ff;
// --french-gray-2: #acb0bdff;
// --dark-slate-gray: #416165ff;
// --midnight-green: #0b3948ff;

// /* CSS HSL */
// --lavender-web: hsla(235, 46%, 90%, 1);
// --french-gray: hsla(258, 11%, 82%, 1);
// --french-gray-2: hsla(226, 11%, 71%, 1);
// --dark-slate-gray: hsla(187, 22%, 33%, 1);
// --midnight-green: hsla(195, 73%, 16%, 1);

// /* SCSS HEX */
// $lavender-web: #d9dbf1ff;
// $french-gray: #d0cdd7ff;
// $french-gray-2: #acb0bdff;
// $dark-slate-gray: #416165ff;
// $midnight-green: #0b3948ff;

// /* SCSS HSL */
// $lavender-web: hsla(235, 46%, 90%, 1);
// $french-gray: hsla(258, 11%, 82%, 1);
// $french-gray-2: hsla(226, 11%, 71%, 1);
// $dark-slate-gray: hsla(187, 22%, 33%, 1);
// $midnight-green: hsla(195, 73%, 16%, 1);

// /* SCSS RGB */
// $lavender-web: rgba(217, 219, 241, 1);
// $french-gray: rgba(208, 205, 215, 1);
// $french-gray-2: rgba(172, 176, 189, 1);
// $dark-slate-gray: rgba(65, 97, 101, 1);
// $midnight-green: rgba(11, 57, 72, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-right: linear-gradient(90deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-bottom: linear-gradient(180deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-left: linear-gradient(270deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-top-right: linear-gradient(45deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-bottom-right: linear-gradient(135deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-top-left: linear-gradient(225deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-bottom-left: linear-gradient(315deg, #d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
// $gradient-radial: radial-gradient(#d9dbf1ff, #d0cdd7ff, #acb0bdff, #416165ff, #0b3948ff);
