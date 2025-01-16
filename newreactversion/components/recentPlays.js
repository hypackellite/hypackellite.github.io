"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import { useRouter } from "next-nprogress-bar";
import React, { useEffect, useState, useCallback, useRef } from "react";
import "@/app/games/games.css";
import "@/app/css/globals.css";
import "@/app/css/style.css";
import "@/app/css/themes.css";
import "@/app/css/gms.css";
import "@/app/css/recentplays.css";

const RecentPlays = () => {
	const [recentPlays, setRecentPlays] = useState([]);
	const router = useRouter();
	const [buttonText, setButtonText] = useState("Clear Recent Plays");
	const [clickCount, setClickCount] = useState(0);
	const [gamesData, setGamesData] = useState([]);
	const gamesContainerRef = useRef(null);
	const baseURL =
		(typeof window !== "undefined" && localStorage.getItem("baseURL")) ||
		"https://0795-108-48-67-224.ngrok-free.app";

	useEffect(() => {
		AOS.init({ duration: 1500 });

		if (typeof window !== "undefined") {
			const recentPlaysJSON = localStorage.getItem("recentPlays");
			const recentPlays = recentPlaysJSON ? JSON.parse(recentPlaysJSON) : [];
			setRecentPlays(recentPlays);
		}

		fetch("/games.json")
			.then((response) => response.json())
			.then((data) => {
				setGamesData(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const logGameClick = useCallback(
		(gameTitle) => {
			const updatedRecentPlays = [...recentPlays];
			const index = updatedRecentPlays.indexOf(gameTitle);

			if (index !== -1) {
				updatedRecentPlays.splice(index, 1);
			}

			updatedRecentPlays.unshift(gameTitle);
			const last10Plays = updatedRecentPlays.slice(0, 10);
			setRecentPlays(last10Plays);
			localStorage.setItem("recentPlays", JSON.stringify(last10Plays));
		},
		[recentPlays],
	);

	const matchFirstItemAndAccessImgSrc = useCallback(() => {
		if (recentPlays.length > 0) {
			const firstItem = recentPlays[0];
			const matchedGame = gamesData.find((game) => game.name === firstItem);
			if (matchedGame) {
				const overlay = document.getElementById("particles-js");
				if (overlay) {
					const imagePath = matchedGame.OnOtherServer
						? `https://hypackelcloudflare.pages.dev${matchedGame.imageSrc}`
						: matchedGame.imageSrc;
						
					overlay.style.backgroundImage = `url(${imagePath})`;
					overlay.style.backgroundSize = "cover";
					overlay.style.backgroundPosition = "center";

					const overlayStyle = document.createElement("style");
					overlayStyle.innerHTML = `
						#particles-js::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: linear-gradient(to bottom, rgba(28, 28, 28, 0), #171717);
							z-index: 0;
						}
					`;
					document.head.appendChild(overlayStyle);
				}
			}
		}
	}, [recentPlays, gamesData]);

	useEffect(() => {
		matchFirstItemAndAccessImgSrc();
	}, [matchFirstItemAndAccessImgSrc]);

	const createGameItem = useCallback(
		(game, index) => {
			const gameItem = document.createElement("div");
			gameItem.classList.add(
				"game-item",
				"loading",
				"relative",
				"cursor-pointer",
				"w-full",
				"h-36",
				"rounded-xl",
				"overflow-hidden",
			);

			if (game.OnOtherServer) {
				const cloudIcon = document.createElement("div");
				cloudIcon.innerHTML = '<svg class="text-white opacity-70" style="position: absolute; top: 8px; right: 8px; z-index: 10; width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>';
				gameItem.appendChild(cloudIcon);
			}

			const removeWordsIfPresent = (inputString, wordsToRemove) => {
				let words = inputString.split(" ");
				for (const word of wordsToRemove) {
					words = words.filter((w) => w !== word);
				}
				return words.join(" ");
			};

			const wordsToRemove = [
				"NEW",
				"new",
				"[Updated]",
				"[updated]",
				"[UPDATED]",
				"[Needs Internet]",
				"[Method 2]",
				" [Method 2]",
			];
			const resultString = removeWordsIfPresent(game.name, wordsToRemove);

			const borderDecoration = document.createElement("div");
			borderDecoration.classList.add(
				"absolute",
				"inset-0",
				"w-full",
				"h-full",
				"border-transparent",
				"border-[3px]",
				"hover:border-primary",
				"rounded-xl",
				"ease-linear",
				"transition",
			);
			const gradient = document.createElement("div");
			gradient.classList.add("gradient");

			const image = document.createElement("img");
			image.src = game.OnOtherServer 
				? `https://hypackelcloudflare.pages.dev${game.imageSrc}`
				: game.imageSrc.startsWith("/files/") 
					? game.imageSrc 
					: `/files/${game.imageSrc}`;
			image.alt = resultString;
			image.onload = (e) => {
				gameItem.classList.remove("loading");
				gameItem.classList.add("loaded");
				gradient.style.display = "none";
			};
			image.title = resultString;
			image.onerror = function () {
				this.src = `/image-placeholder.png?game=${game.imageSrc}`;
			};

			const overlay = document.createElement("div");
			overlay.classList.add("overlay");
			let overlayContent = `<div class="overlay-content"><h1 class="text-lg font-bold">${resultString}</h1>`;
			overlayContent += `</div>`;
			overlay.innerHTML = overlayContent;

			gameItem.appendChild(gradient);
			gameItem.appendChild(image);
			gameItem.appendChild(overlay);
			gameItem.appendChild(borderDecoration);

			gameItem.addEventListener("click", () => {
				logGameClick(game.name);
				router.push(`/play/${index + 1}`);
				// window.location.pathname = `/play/${index+1}`;
			});

			return gameItem;
		},
		[logGameClick, router, baseURL],
	);

	const clearRecentPlays = useCallback(() => {
		setRecentPlays([]);
		localStorage.removeItem("recentPlays");
		setButtonText("Clear Recent Plays");
		setClickCount(0);
	}, []);

	const handleClearButtonClick = useCallback(() => {
		if (clickCount === 0) {
			setButtonText("click again to remove");
			setClickCount(1);
			setTimeout(() => {
				setButtonText("Clear Recent Plays");
				setClickCount(0);
			}, 2000);
		} else if (clickCount === 1) {
			clearRecentPlays();
		}
	}, [clickCount, clearRecentPlays]);

	useEffect(() => {
		const gamesContainerSingleRow = gamesContainerRef.current;

		const loadImagesForSingleRow = () => {
			if (recentPlays.length > 0 && gamesData.length > 0) {
				if (gamesContainerSingleRow) {
					gamesContainerSingleRow.innerHTML = "";
					recentPlays.forEach((play) => {
						const gameIndex = gamesData.findIndex((game) => game.name === play);
						if (gameIndex !== -1) {
							const matchedGame = gamesData[gameIndex];
							const playItem = createGameItem(matchedGame, gameIndex);
							gamesContainerSingleRow.appendChild(playItem);
						}
					});
				}
			} else if (recentPlays.length === 0) {
				const spacerOfRecentPlays = document.getElementById(
					"spacerOfRecentPlays",
				);
				const recentPlaysText = document.getElementById("recentplaystext");
				const clearRecentPlaysButton =
					document.getElementById("ClearRecentPlays");

				if (spacerOfRecentPlays) spacerOfRecentPlays.style.display = "none";
				if (recentPlaysText) recentPlaysText.style.display = "block";
				if (clearRecentPlaysButton)
					clearRecentPlaysButton.style.display = "block";
			}
		};

		loadImagesForSingleRow();

		const scrollLeftSingleRowWithDelay = () => {
			loadImagesForSingleRow();
			setTimeout(() => {
				if (gamesContainerSingleRow) {
					gamesContainerSingleRow.scrollLeft -=
						gamesContainerSingleRow.clientWidth;
				}
			}, 1);
		};

		const scrollRightSingleRowWithDelay = () => {
			loadImagesForSingleRow();
			setTimeout(() => {
				if (gamesContainerSingleRow) {
					gamesContainerSingleRow.scrollLeft +=
						gamesContainerSingleRow.clientWidth;
				}
			}, 0);
		};

		const prevButtonSingleRow = document.querySelector(".prev-button");
		const nextButtonSingleRow = document.querySelector(".next-button");

		if (prevButtonSingleRow)
			prevButtonSingleRow.addEventListener(
				"click",
				scrollLeftSingleRowWithDelay,
			);
		if (nextButtonSingleRow)
			nextButtonSingleRow.addEventListener(
				"click",
				scrollRightSingleRowWithDelay,
			);

		const handleScroll = () => {
			if (gamesContainerSingleRow) {
				if (gamesContainerSingleRow.scrollLeft > 0) {
					if (prevButtonSingleRow)
						prevButtonSingleRow.classList.remove("hidden");
				} else {
					if (prevButtonSingleRow) prevButtonSingleRow.classList.add("hidden");
				}
			}
		};

		if (gamesContainerSingleRow) {
			gamesContainerSingleRow.addEventListener("scroll", handleScroll);
		}

		// Clean up event listeners
		return () => {
			if (prevButtonSingleRow)
				prevButtonSingleRow.removeEventListener(
					"click",
					scrollLeftSingleRowWithDelay,
				);
			if (nextButtonSingleRow)
				nextButtonSingleRow.removeEventListener(
					"click",
					scrollRightSingleRowWithDelay,
				);
			if (gamesContainerSingleRow) {
				gamesContainerSingleRow.removeEventListener("scroll", handleScroll);
			}
		};
	}, [recentPlays, gamesData, createGameItem]);

	if (recentPlays.length === 0) {
		return <></>;
	}

	return (
		<>
			<center>
				<div
					style={{ maxWidth: "80vw" }}
					data-aos="zoom-in"
					className="slidereeddwefsa"
				>
					<section className="relative flex flex-col gap-2 w-full h-full">
						<div style={{ display: "flex", alignItems: "center" }}>
							<h2
								// id="recentplaystext"
								className="font-bold text-xl mr-auto font-sans"
							>
								Jump Back In
							</h2>
							<div id="polli">
								<button
									type="button"
									id="ClearRecentPlays"
									onClick={handleClearButtonClick}
									className="text-red-500"
								>
									{buttonText}
								</button>
							</div>
						</div>
						<div className="relative overflow-hidden w-full rounded-lg">
							<button
								type="button"
								style={{ borderRadius: 0 }}
								className="prev-button hidden transition ease-linear absolute z-[1] left-0 w-20 h-full px-4 bg-gradient-to-r from-black to-transparent items-center justify-start"
							>
								<ArrowBackIcon className="w-6 h-6 -ml-2 transition ease-linear hover:-ml-3 relative" />
							</button>
							<button
								type="button"
								style={{ borderRadius: 0 }}
								className="next-button transition ease-linear absolute z-[1] right-0 w-20 h-full px-4 bg-gradient-to-l from-black to-transparent flex items-center justify-end"
							>
								<ArrowForwardIcon className="w-6 h-6 -mr-2 transition ease-linear hover:-mr-3 relative" />
							</button>
							<div
								ref={gamesContainerRef}
								id="recentPlaysContainer"
								className="games-container relative flex gap-3 overflow-x-auto w-full py-1 scrollbar-hide"
								style={{
									scrollBehavior: "smooth",
									WebkitOverflowScrolling: "touch",
									scrollSnapType: "x mandatory",
								}}
							/>
						</div>
					</section>
					<div
						id="spacerOfRecentPlays"
						className="h-4"
						style={{ display: "none" }}
					/>
				</div>
			</center>
		</>
	);
};

export default RecentPlays;
