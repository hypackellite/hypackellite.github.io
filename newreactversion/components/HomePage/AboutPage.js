"use client";

import React, { useEffect, useState } from "react";
import { TheCatAPI } from "@thatapicompany/thecatapi"; // Update import statement
import "./About.css";

const AboutPage = () => {
	const [arrowPosition, setArrowPosition] = useState("above-waves");
	const [dogImage, setDogImage] = useState(""); // State for dog image
	const theDogAPI = new TheCatAPI("live_rTIZ0MuaG0QsSucFX3j1r1uCLr3osTajUoEOkzhgUsWoHBk12J4N4T17pdshEvx7", {
		host: "https://api.thedogapi.com/v1",
	});

	// Function to check if the element is in the viewport
	const isInViewport = (element) => {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

	const adjustArrowPosition = () => {
		const titleElement = document.querySelector(".about-title");
		if (titleElement) {
			const rect = titleElement.getBoundingClientRect();
			const windowHeight =
				window.innerHeight || document.documentElement.clientHeight;

			if (rect.top >= 0 && rect.top < windowHeight) {
				// Title is partially or fully visible in the viewport
				setArrowPosition("above-waves");
			} else if (rect.top >= windowHeight) {
				// Title is below the viewport (not scrolled to yet)
				setArrowPosition("bottom");
			} else {
				// Title is above the viewport (scrolled past)
				setArrowPosition("hidden");
			}
		}
	};

	// useEffect(() => {
	// 	// Fetch a random dog image
	// 	const fetchDogImage = async () => {
	// 		try {
	// 			const response = await theDogAPI.images.getRandomImage({
	// 				hasBreeds: true,
	// 			  }); // Fetch dog image
	// 			setDogImage(response.url); // Set dog image URL
	// 		} catch (error) {
	// 			console.error("Error fetching dog image:", error);
	// 		}
	// 	};

	// 	fetchDogImage(); // Call the fetch function

	// 	// Adjust arrow position on scroll and resize
	// 	window.addEventListener("scroll", adjustArrowPosition);
	// 	window.addEventListener("resize", adjustArrowPosition);

	// 	// Initial check
	// 	adjustArrowPosition();

	// 	// Cleanup event listeners on component unmount
	// 	return () => {
	// 		window.removeEventListener("scroll", adjustArrowPosition);
	// 		window.removeEventListener("resize", adjustArrowPosition);
	// 	};
	// }, [theDogAPI.images]);

	const scrollToContent = () => {
		window.scrollTo({
			top: window.innerHeight, // Scrolls down by the height of the window
			behavior: "smooth",
		});
	};

	return (
		<>
			<div style={{ position: "initial", zIndex: 1 }} className="waves">
				{/* Arrow */}
				<div
					className={`scroll-arrow ${arrowPosition === "bottom" ? "bottom-arrow" : ""}`}
					onClick={scrollToContent}
				>
					&#x2193; {/* Unicode for the down arrow */}
				</div>

				<svg
					className="hero-waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
				>
					<title>waves</title>
					<defs>
						<path
							id="wave-path"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g className="wave3">
						<use xlinkHref="#wave-path" x={50} y={9} fill="rgba(0, 0, 0, 1)" />
					</g>
					<g className="wave1">
						<use
							xlinkHref="#wave-path"
							x={50}
							y={3}
							fill="rgba(254, 19, 23, 1)"
						/>
					</g>
					<g className="wave2">
						<use
							xlinkHref="#wave-path"
							x={50}
							y={0}
							fill="rgba(0, 10, 120, 1)"
						/>
					</g>
				</svg>
			</div>

			<div className="bgHypBlue py-16">
				<section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4">
					<div className="relative flex-shrink-0 lg:w-1/3 mb-8 lg:mb-0">
						{/* Main Image */}
						<img
							// src={dogImage} // Set dog image here
							src="https://picsum.photos/100/150"
							alt="Hero"
							id="LogoSpinable"
							className="w-3/4 max-w-1/2 rounded-lg slow-breathing"
						/>

						{/* Smaller Overlapping Image */}
						{/* <img
							src="https://picsum.photos/100/150"
							alt="Layered"
							className="absolute top-12 left-24 w-1/4 rounded-lg skew-x-[3deg] skew-y-[-8deg] shadow-lg"
							style={{ zIndex: 2 }} // Ensure the smaller image appears on top
						/> */}
					</div>
					<div className="lg:w-2/3 text-white lg:pl-12 text-center lg:text-left">
						<h1 className="text-4xl font-bold mb-6 about-title">
							What is Hypackel?
						</h1>
						<p className="text-lg leading-relaxed">
							Headquartered in the U.S., Hypackel is driven by a passionate team
							dedicated to crafting the ultimate online gaming destination. Our
							mission is to create a vibrant, open playground where everyone can
							enjoy free and unlimited gaming. <br />
							<br />
							For game developers seeking to reach a wider audience and propel
							their web-based games to success, we invite you to explore our
							offerings. Stay tuned for the launch of HypackelDev, our developer
							platform, and get ready to take your games to the next level.
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default AboutPage;
