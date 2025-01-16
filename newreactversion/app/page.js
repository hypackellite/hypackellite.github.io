"use client";

import Hero from "@/components/HomePage/Hero";
import AboutPage from "@/components/HomePage/AboutPage";
import TeamPage from "@/components/HomePage/Team";
import "@/components/HomePage/Hero.css";
import "./games/games.css";
import "./css/globals.css";
import "./css/style.css";
import "./css/themes.css";
import "./css/gms.css";
import "./css/recentplays.css";

export default function Home() {
	return (
		<>
			<div>
      <br /><br /><br /><br /><br />
				<Hero />
				{/* <AboutPage /> */}
				{/* <div className="bg-gradient-to-b from-[#000A78] to-[rgba(254,25,30,0.6)] py-16" /> */}
				{/* <TeamPage /> */}
			</div>
		</>
	);
}
