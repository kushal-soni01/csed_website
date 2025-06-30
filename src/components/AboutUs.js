import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import { ChevronRight } from "lucide-react";

export default function AboutUs({
	title = "About Us",
	subtitle = "We are the entrepreneurship cell of a premier institution, dedicated to nurturing innovation, fostering creativity, and building the next generation of entrepreneurs who will shape the future.",
	sections = [],
	stats = [],
	ctaTitle = "Ready to Join Our Journey?",
	ctaDescription = "Be part of an ecosystem that transforms ideas into reality and dreams into successful ventures.",
	ctaButtonText = "Get Started",
	videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
}) {
	const [activeSection, setActiveSection] = useState(-1);
	const [isVisible, setIsVisible] = useState(false);
	const [statsVisible, setStatsVisible] = useState(false);
	const sectionRef = useRef(null);
	const statsRef = useRef(null);
	const videoRef = useRef(null);

	// Video background setup
	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			video.playbackRate = 0.8;
			video.play().catch(console.error);
		}
	}, []);

	// Intersection observer for main content animations
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Separate intersection observer for stats
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setStatsVisible(entry.isIntersecting);
			},
			{ threshold: 0.2 }
		);

		if (statsRef.current) {
			observer.observe(statsRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={sectionRef} className="about-us-container">
			{/* Video Background */}
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				className="background-video"
			>
				<source src={videoUrl} type="video/mp4" />
			</video>

			{/* Overlays */}
			<div className="dark-overlay" />
			<div className="gradient-overlay" />

			{/* Content */}
			<div className="content">
				{/* Header */}
				<div className={`header ${isVisible ? "visible" : ""}`}>
					<h1 className="main-title">{title}</h1>
					<p className="subtitle">{subtitle}</p>
				</div>

				{/* Interactive Sections */}
				<div className="sections-container">
					{sections.map((section, index) => (
						<div
							key={index}
							className={`section-card ${
								activeSection === index ? "active" : ""
							} ${isVisible ? "visible" : ""}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							{/* Header */}
							<div
								className="section-header"
								onClick={() =>
									setActiveSection(
										activeSection === index ? -1 : index
									)
								}
							>
								<div
									className={`icon-container ${
										activeSection === index ? "active" : ""
									}`}
								>
									{section.icon}
								</div>
								<h3 className="section-title">
									{section.title}
								</h3>
								<ChevronRight
									className={`chevron ${
										activeSection === index ? "rotated" : ""
									}`}
								/>
							</div>

							{/* Expandable Content */}
							<div
								className={`expandable-content ${
									activeSection === index ? "expanded" : ""
								}`}
							>
								<div className="expanded-content">
									<div className="content-inner">
										<div className="content-icon">
											{section.icon}
										</div>
										<div className="content-text">
											<h4 className="content-title">
												{section.title}
											</h4>
											<p className="content-description">
												{section.content}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div ref={statsRef} className="stats-container">
					<div
						className={`stats-grid ${
							statsVisible ? "visible" : ""
						}`}
					>
						{stats.map((stat, index) => (
							<div
								key={index}
								className="stat-card"
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								<div className="stat-icon">{stat.icon}</div>
								<div className="stat-number">{stat.number}</div>
								<div className="stat-label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className={`cta ${isVisible ? "visible" : ""}`}>
					<h2 className="cta-title">{ctaTitle}</h2>
					<p className="cta-description">{ctaDescription}</p>
					<button className="cta-button">
						<span>{ctaButtonText}</span>
						<ChevronRight className="cta-icon" />
					</button>
				</div>
			</div>
		</div>
	);
}
