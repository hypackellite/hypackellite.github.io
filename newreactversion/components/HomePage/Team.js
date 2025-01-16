"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { LuTestTubes } from "react-icons/lu";
import { FaUserSecret } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./Team.css";

const TeamPage = () => {
	useEffect(() => {
		const cards = document.querySelectorAll(".cardTeam");
		for (let i = 0; i < cards.length; i++) {
			cards[i].addEventListener("mousemove", (e) => {
				const rect = cards[i].getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				cards[i].style.setProperty("--mouse-x", `${x}px`);
				cards[i].style.setProperty("--mouse-y", `${y}px`);
			});
		}
	});

	return (
		<>
			<div className="bgHypRed py-16">
				<h1 className="text-4xl flex justify-center font-bold mb-6 about-title">
					Our Team
				</h1>
				<section className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4">
					<div id="cards" className="flex flex-wrap justify-center gap-4">
						<Link href="https://discord.com/users/793088394427105322">
							<div className="cardTeam">
								<div className="card-content">
									<div className="card-image">
									<i><TfiYoutube /></i>
									</div>
									<div className="card-info-wrapper">
										<div className="card-info">
											<TfiYoutube />
											<div className="card-info-title">
												<h3>MythicalRabbit</h3>
												<h4>@hypackel Youtube manager</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link href={"https://github.com/hypackel"}>
							<div className="cardTeam">
								<div className="card-content">
									<div className="card-image">
									<i><FaCode /></i>
									</div>
									<div className="card-info-wrapper">
										<div className="card-info">
											<FaCode />
											<div className="card-info-title">
												<h3>Hypackel</h3>
												<h4>Owner / Lead Dev</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link href={"https://github.com/EdgedCircles"}>
							<div className="cardTeam">
								<div className="card-content">
									<div className="card-image">
									<i><LuTestTubes /></i>
									</div>
									<div className="card-info-wrapper">
										<div className="card-info">
										<LuTestTubes />
											<div className="card-info-title">
												<h3>serratedduck8099 (EdgedCircles)</h3>
												<h4>QA + Project Manager</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link href={"https://discord.com/users/1063558953973321848/"}>
							<div className="cardTeam">
								<div className="card-content">
									<div className="card-image">
									<i><FaUserSecret /></i>
									</div>
									<div className="card-info-wrapper">
										<div className="card-info">
										<FaUserSecret />
											<div className="card-info-title">
												<h3>ineedabetterh4ndl3 (h4ck3r_1000)</h3>
												<h4>Trust & Security</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						{/* DillPickleAndTuna Card with Radix Tooltip */}
						<Link href="https://www.roblox.com/users/808349500/profile">
							<Tooltip.Provider>
								<Tooltip.Root delayDuration={0}>
									<Tooltip.Trigger asChild>
										<div className="cardTeam" style={{ cursor: "pointer" }}>
											<div className="card-content">
												<div className="card-image">
													<i><FaLeaf /></i>
												</div>
												<div className="card-info-wrapper">
													<div className="card-info">
														<FaLeaf />
														<div className="card-info-title">
															<h3>DillPickleAndTuna</h3>
															<h4>Game Concept &amp; Tester</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Tooltip.Trigger>
									<Tooltip.Portal>
										<Tooltip.Content
											className="tooltip-content"
											side="top"
											align="center"
											sideOffset={5}
										>
											Likes Pickles (idk why)
											<Tooltip.Arrow className="tooltip-arrow" />
										</Tooltip.Content>
									</Tooltip.Portal>
								</Tooltip.Root>
							</Tooltip.Provider>
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};

export default TeamPage;
