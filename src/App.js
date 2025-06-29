import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Navbar title="CSED CLUB GLAU" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
			</Routes>
			<Footer />
		</Router>
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
