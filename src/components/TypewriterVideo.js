import React, { useEffect, useState } from "react";

const words = [
	"Robotics",
	"+Internet of Things",
	"+Machine Learning",
	"+Artificial Intelligence",
	"+Engineering",
	"+Entrepreneurship",
	"+Teamwork",
	"=CSED",
];

export default function TypewriterVideo() {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [showText, setShowText] = useState(true);
	const [pauseBetweenWords, setPauseBetweenWords] = useState(false);

	useEffect(() => {
		if (pauseBetweenWords) return;

		const currentWord = words[index % words.length];
		const typingSpeed = isDeleting ? 40 : 100;

		const handleTyping = () => {
			if (!isDeleting) {
				setText(currentWord.slice(0, charIndex + 1));
				setCharIndex((prev) => prev + 1);

				if (charIndex + 1 === currentWord.length) {
					setTimeout(() => setIsDeleting(true), 1500); // pause after full word
				}
			} else {
				setText(currentWord.slice(0, charIndex - 1));
				setCharIndex((prev) => prev - 1);

				if (charIndex - 1 === 0) {
					setPauseBetweenWords(true);
					setShowText(false);

					setTimeout(() => {
						setIsDeleting(false);
						setCharIndex(0);
						setIndex((prev) => (prev + 1) % words.length);
						setShowText(true);
						setPauseBetweenWords(false);
					}, 300); // pause before next word begins
				}
			}
		};

		const timeout = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, index, pauseBetweenWords]);

	return (
		<div className="effect-video">
			<video autoPlay loop muted className="bg-video">
				<source src="/" type="video/mp4" />
			</video>

			<div className="overlay">
				<h1 className="typewriter">{showText ? text : ""}</h1>
			</div>
		</div>
	);
}
