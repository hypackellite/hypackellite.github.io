// /components/HomePage/Hero.js
"use client";

import AOS from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import "@/app/css/tab_browser.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import ReplayIcon from "@mui/icons-material/Replay";
import Link from "next/link";

const Hero = () => {
	const [currentUrl, setCurrentUrl] = useState("");

	useEffect(() => {
		// Initialize AOS
		AOS.init({ duration: 1000, once: true });

		// Set the current URL if window is available
		if (typeof window !== "undefined") {
			setCurrentUrl(window.location.href);
		}
	}, []);

	const openTab = (event, tabId) => {
		// Get all elements with class="tab" and hide them
		const tabs = document.getElementsByClassName("tab");
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].style.display = "none";
		}

		// Get all elements with class="browser-tab" and remove the class "active"
		const tabsLinks = document.getElementsByClassName("browser-tab");
		for (let i = 0; i < tabsLinks.length; i++) {
			tabsLinks[i].className = tabsLinks[i].className.replace(" active", "");
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(tabId).style.display = "block";
		event.currentTarget.className += " active";
	};

	return (
		<>
			<br />
			<br />
			{/* Hero Section */}
			<section className="flex items-center justify-center min-h-1/2 py-5 -mt-20">
				<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl gap-16">
					{/* Text & Button Column */}
					<div
						className="w-full md:w-1/2 text-center md:text-left p-5 relative z-20"
						data-aos="fade-up"
					>
						<h1
							style={{ color: "var(--text)" }}
							className="title font-bold text-4xl md:text-5xl"
						>
							Hypackel: <br />
							Play Free, Play Epic.
						</h1>
						<br />
						<p className="text-base md:text-lg">
							Get ready for non-stop entertainment with Hypackel&apos;s vast
							collection of free online games! From timeless classics to fresh
							new releases, our platform offers an unbeatable gaming experience
							- all without any hidden costs or commitments. Dive in and start
							playing now!
						</p>
						<div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start w-full">
							<Link
								href="/games"
								className="border-[1px] border-yellow-500 text-yellow-500 pb-[10px] pt-[10px] pl-[12px] pr-[12px] rounded-md hover:bg-yellow-500 hover:text-black hover:transition-all hover:duration-150 w-full md:w-auto text-center"
							>
								Play Now
							</Link>
							{/* <button
								type="button"
								onClick={AB}
								className="border-[1px] border-blue-600 text-white pb-[8px] pt-[8px] pl-[12px] pr-[12px] rounded-md hover:bg-blue-600 hover:transition-all hover:duration-500 ml-0 md:ml-2 w-full md:w-auto mt-2 md:mt-0 text-center"
							>
								Launch About:blank
							</button> */}
						</div>
					</div>
					{/* Browser Content Column */}
					<div
						className="w-full md:w-2/4 flex justify-center p-5 relative z-10 order-first md:order-last"
						data-aos="fade-up"
					>
						{/* Add this for skew: skew-x-[3deg] skew-y-[-8deg] */}
						<div className="search-container  hover:skew-x-0 hover:skew-y-0 transition-transform duration-500 w-full">
							<div className="container py-6">
								<div className="row flex-col md:flex-row-reverse items-center g-5">
									<div className="w-full mx-auto">
										<div className="browser shadow-custom-white p-0 rounded-lg ">
											<div className="browser-header flex items-center justify-between mb-2">
												<div className="flex space-x-1">
													<div className="traffic-light bg-red-500 w-3 h-3 rounded-full" />
													<div className="traffic-light bg-yellow-500 w-3 h-3 rounded-full" />
													<div className="traffic-light bg-green-500 w-3 h-3 rounded-full" />
												</div>
												<div className="browser-controls flex space-x-2">
													<button
														type="button"
														className="browser-tab active pl-2 pt-1"
														onClick={(e) => openTab(e, "tab1")}
													>
														Slope
													</button>
													<button
														type="button"
														className="browser-tab pl-2  pt-1"
														onClick={(e) => openTab(e, "tab2")}
													>
														Drive Mad
													</button>
													<button
														type="button"
														className="browser-tab pl-2  pt-1"
														onClick={(e) => openTab(e, "tab3")}
													>
														Games
													</button>
												</div>
											</div>
											<div className="lc-block mb-3 urllinebar">
												<div className="browser-controls flex items-center space-x-2">
													<button
														type="button"
														className="browser-buttons-left"
													>
														<ArrowBackIcon />
													</button>
													<button
														type="button"
														className="browser-buttons-left"
													>
														<ArrowForwardIcon />
													</button>
													<button
														type="button"
														className="browser-buttons-left"
													>
														<ReplayIcon />
													</button>
													<div className="url-bar flex-1">
														<input
															className="w-full border-none bg-transparent"
															type="text"
															id="urlbarHomeBrowser"
															value={currentUrl}
															readOnly
														/>
													</div>
													<button
														type="button"
														className="browser-buttons-right"
													>
														<MenuIcon className="mr-4 flex align-center" />
													</button>
												</div>
											</div>
											<div className="browser-content">
												<div id="tab1" className="tab active">
													<div className="yt-cover" />
													<div className="d-block mx-lg-auto img-fluid relative w-full pb-[56.25%]">
														<iframe
															title="Slope HomePage Youtube Video"
															onContextMenu={(e) => e.preventDefault()}
															className="absolute top-0 left-0 w-full h-full border-none"
															src="https://www.youtube-nocookie.com/embed/cxDngT46qKU?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&mute=1&playlist=cxDngT46qKU"
															allowFullScreen
														/>
													</div>
												</div>
												<div id="tab2" className="tab hidden">
													<div className="yt-cover" />
													<div className="d-block mx-lg-auto img-fluid relative w-full pb-[56.25%]">
														<iframe
															title="DriveMad HomePage Youtube Video"
															className="absolute top-0 left-0 w-full h-full border-none"
															src="https://www.youtube-nocookie.com/embed/Qu1bh-R0m-U?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&mute=1&playlist=Qu1bh-R0m-U"
															allowFullScreen
														/>
													</div>
												</div>
												<div id="tab3" className="tab hidden">
													<div className="d-block mx-lg-auto img-fluid relative w-full pb-[56.25%]">
														<iframe
															title="Games HomePage Youtube Video"
															className="absolute top-0 left-0 w-full h-full border-none"
															src="https://www.youtube-nocookie.com/embed/a4L2l8O2nw0?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&mute=1&playlist=a4L2l8O2nw0"
															allowFullScreen
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
		</>
	);
};

export default Hero;
