"use client";

import { useRouter } from "next-nprogress-bar";
import { useCallback, useEffect, useState } from "react";

let gamesCache = null;
async function getGames() {
	if (gamesCache) return gamesCache;

	try {
		const res = await fetch("/games.json");
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const data = await res.json();
		gamesCache = data;
		return data;
	} catch (error) {
		console.error("Error in getGames:", error);
		throw error;
	}
}

export default function RandomGame() {
	const router = useRouter();
	const [error, setError] = useState(null);

	const addToRecentPlays = useCallback((game) => {
		if (typeof window !== "undefined") {
			const recentPlays = JSON.parse(
				localStorage.getItem("recentPlays") || "[]",
			);
			const updatedRecentPlays = [
				game.name,
				...recentPlays.filter((name) => name !== game.name),
			].slice(0, 10);
			localStorage.setItem("recentPlays", JSON.stringify(updatedRecentPlays));
		}
	}, []);

	useEffect(() => {
		async function redirectToRandomGame() {
			try {
				const games = await getGames();

				if (!Array.isArray(games) || games.length < 2) {
					throw new Error("Not enough games in the JSON file");
				}

				const randomIndex = Math.floor(Math.random() * (games.length - 1)) + 1;
				const randomGame = games[randomIndex];

				if (!randomGame) {
					throw new Error(`No game found at index ${randomIndex}`);
				}

				const gameId = randomIndex;
				addToRecentPlays(randomGame);

				// Add a delay before redirecting
				setTimeout(() => {
					router.push(`/play/${gameId}`);
				}, 2000); // 3 second delay
			} catch (error) {
				console.error("Error in redirectToRandomGame:", error);
				setError(error.message);
			}
		}

		redirectToRandomGame();
	}, [addToRecentPlays, router]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div style={{
			background: "linear-gradient(to bottom left, rgb(115, 11, 14), rgb(10, 23, 87))",
			backgroundSize: "300% 300%",
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontFamily: "'Poppins', sans-serif",
			color: "white",
		}}>
			<div className="loader-container">
				<div className="progress-bar">
					<div className="progress-pill"></div>
				</div>
				<h6 className="font-sans font-bold" style={{ fontSize: "30px", margin: 0 }}>Finding a game for you...</h6>
				<style jsx>{`
					.loader-container {
						display: flex;
						flex-direction: column;
						align-items: start;
						gap: 20px;
					}

					.progress-bar {
						width: 80vw;
						height: 20px;
						background-color: rgba(255, 255, 255, 0.2);
						border-radius: 10px;
						overflow: hidden;
						position: relative;
					}

					.progress-pill {
						height: 100%;
						background-color: #FFF;
						border-radius: 10px;
						position: absolute;
						left: -20%;
						animation: slideAcross 3s linear infinite;
					}

					@keyframes slideAcross {
						0% {
							left: -20%;
							width: 15%;
						}
						20% {
							width: 25%;
						}
						35% {
							width: 30%;
						}
						50% {
							width: 35%;
							left: 40%;
						}
						65% {
							width: 30%;
						}
						80% {
							width: 25%;
						}
						100% {
							left: 100%;
							width: 15%;
						}
					}
				`}</style>
			</div>
		</div>
	);
}
