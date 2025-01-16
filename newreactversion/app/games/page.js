"use client";

import GameList from "@/components/GamesPage/GameList";
import RecentPlays from "@/components/recentPlays";
import GbaGamesSliders from "./gamsliders";
import { Suspense } from "react";
import "@/app/games/games.css";
import "@/app/css/globals.css";
import "@/app/css/style.css";
import "@/app/css/themes.css";
import "@/app/css/gms.css";
import "@/app/css/recentplays.css";
import "@/app/css/contextMenu.css";

export default function Page() {
	return (
		<>
		<br /><br /><br />
			<RecentPlays />

			<GbaGamesSliders />

			<br />
			<br />

			<Suspense fallback={<div>Loading games...</div>}>
				<GameList />
			</Suspense>
		</>
	);
}
