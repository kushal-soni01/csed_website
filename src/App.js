import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import Team from "./pages/Team.js";
import Project from "./pages/Project.js";
import JoinUs from "./pages/JoinUs.js";
import Footer from "./components/Footer";
import GlassNav from "./components/GlassNav.js";

function App() {
	return (
		<Router>
			<GlassNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/projects" element={<Project />} />
				<Route path="/events" element={<Events />} />
				<Route path="/joinus" element={<JoinUs />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
