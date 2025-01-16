"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [animate, setAnimate] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
		setAnimate(true);
	};

	useEffect(() => {
		if (isOpen) {
			setAnimate(true);
		} else {
			// Wait for animation to complete before setting animate to false
			const timer = setTimeout(() => setAnimate(false), 500);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	return (
		<nav className="bg-white sticky top-0 shadow-md">
			<div className="container mx-auto flex flex-wrap items-center justify-between p-4">
				<Link href="/" className="text-gray-800 text-xl font-semibold">
					Hypackel
				</Link>
				<button
					type="button"
					className="text-gray-800 md:hidden mobile-navbar-toggler focus:ring focus:ring-slate-600"
					onClick={toggleNavbar}
					aria-controls="navbar-default"
					aria-expanded={isOpen}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="#000"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div
					className={`${
						animate ? (isOpen ? "slide-down" : "slide-up") : "hidden"
					} w-full overflow-hidden transition-all duration-500 md:flex md:items-center md:w-auto`}
					id="navbar-default"
				>
					<div className="md:flex  md:space-x-4">
						<Link href="/" className="block py-2 px-4 text-gray-800">
							Home
						</Link>
						<Link href="/games" className="block py-2 px-4 text-gray-800">
							Games
						</Link>
						<Link href="/settings" className="block py-2 px-4 text-gray-800">
							Settings
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MobileNavbar;
