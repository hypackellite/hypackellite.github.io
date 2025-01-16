"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import { useRouter, useSearchParams } from "next-nprogress-bar";
import React, { useEffect, useState, useCallback, useRef } from "react";

const slideshows = [
	{ name: "Classic", filterQuery: "classic" },
	{ name: "2 Player", filterQuery: "2 player" },
	{ name: "Action", filterQuery: "action" },
	{ name: "Puzzle", filterQuery: "puzzle" },
	{ name: "Sports", filterQuery: "sports" },
	{ name: "Arcade", filterQuery: "arcade" },
	{ name: "Racing", filterQuery: "racing" },
	{ name: "Shooter", filterQuery: "shooter" },
	{ name: "Platformer", filterQuery: "platformer" },
	{ name: "Strategy", filterQuery: "strategy" },
	{ name: "Physics", filterQuery: "physics" },
	{ name: "Horror", filterQuery: "horror" },
	{ name: "Idle", filterQuery: "idle" },
	{ name: "Pokemon", filterQuery: "pokemon" },
	{ name: "Music", filterQuery: "music" },
	{ name: "Hidden Row", filterQuery: "music", hidden: true },
	// Add more slideshows here as needed
];

const GameSlideshow = ({ name, filterQuery }) => {
	const [games, setGames] = useState([]);
	const gamesContainerRef = useRef(null);
	const router = useRouter();
	const baseURL = "";

	// Add pathname watcher
	const [currentPath, setCurrentPath] = useState("");

	useEffect(() => {
		AOS.init({ 
			duration: 1500,
			once: true
		});

		fetch("/games.json")
			.then((response) => response.json())
			.then((data) => {
				const filteredGames = data
					.map((game, index) => ({ 
						...game,
						imageSrc: game.OnOtherServer 
							? `https://hypackelcloudflare.pages.dev${game.imageSrc}`
							: game.imageSrc,
						url: game.OnOtherServer
							? `https://hypackelcloudflare.pages.dev${game.url}`
							: game.url,
						originalIndex: index 
					}))
					.filter((game) => {
						return game.tags && 
							typeof game.tags === "string" && 
							game.tags.toLowerCase().includes(filterQuery.toLowerCase());
					});
				setGames(filteredGames);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, [filterQuery]);

	const createGameItem = useCallback(
		(game) => {
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
			image.dataset.src = game.imageSrc.startsWith("https")
				? game.imageSrc
				: `${baseURL}${game.imageSrc}`;
			image.alt = game.name;
			image.classList.add("lazy-image");

			image.onload = () => {
				gameItem.classList.remove("loading");
				gameItem.classList.add("loaded");
				gradient.style.display = "none";
			};

			image.onerror = function () {
				this.src = `${baseURL}/image-placeholder.png?game=${game.imageSrc}`;
			};

			const overlay = document.createElement("div");
			overlay.classList.add(
				"overlay",
				"absolute",
				"inset-0",
				"bg-gradient-to-t",
				"from-black/80",
				"to-transparent",
				"opacity-0",
				"transition-opacity",
				"duration-300",
				"ease-in-out",
				"flex",
				"items-end",
				"p-4"
			);
			const overlayContent = `<div class="overlay-content w-full"><h1 class="text-lg font-bold">${game.name}</h1></div>`;
			overlay.innerHTML = overlayContent;

			gameItem.appendChild(gradient);
			gameItem.appendChild(image);
			gameItem.appendChild(overlay);
			gameItem.appendChild(borderDecoration);

			gameItem.addEventListener("click", () => {
				router.push(`/play/${game.originalIndex + 1}`);
			});

			return gameItem;
		},
		[router, baseURL],
	);

	useEffect(() => {
		const gamesContainer = gamesContainerRef.current;
		if (games.length > 0 && gamesContainer) {
			gamesContainer.innerHTML = "";

			games.forEach((game, index) => {
				const gameItem = createGameItem(game);
				gamesContainer.appendChild(gameItem);
			});

			// Select all game items
			const gameItems = gamesContainer.querySelectorAll(".game-item");

			const lazyImages = document.querySelectorAll(".lazy-image");

			// IntersectionObserver to lazy load all images except last row
			const imageObserver = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const img = entry.target;
							img.src = img.dataset.src;
							img.classList.remove("lazy-image"); // Remove class after loading
							observer.unobserve(img); // Stop observing
						}
					});
				},
				{
					rootMargin: "50px 0px 150px 0px",
					threshold: 0.05,
				},
			);

			// Observe all images except the last row
			lazyImages.forEach((image) => {
				image.src = image.dataset.src;
				imageObserver.observe(image);
			});

			return () => {
				imageObserver.disconnect(); // Cleanup IntersectionObserver
			};
		}
	}, [games, createGameItem]);

	// ___________________________________________________________________
	// End Game Slideshow
	// ______________________________________________________________

	useEffect(() => {
		const gamesContainer = gamesContainerRef.current;
		if (games.length > 0 && gamesContainer) {
			gamesContainer.innerHTML = "";
			games.forEach((game) => {
				const gameItem = createGameItem(game);
				gamesContainer.appendChild(gameItem);
			});
		}
	}, [games, createGameItem]);

	const scrollContainer = (direction) => {
		const gamesContainer = gamesContainerRef.current;
		if (gamesContainer) {
			const scrollAmount = direction === "left" ? -300 : 300;
			gamesContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	// Add pathname watcher
	useEffect(() => {
		// Update path when component mounts and when router changes
		if (typeof window !== 'undefined') {
			setCurrentPath(window.location.pathname);
			
			// Create MutationObserver to watch for URL changes
			const observer = new MutationObserver(() => {
				if (window.location.pathname !== currentPath) {
					setCurrentPath(window.location.pathname);
					// Reload games container
					const gamesContainer = gamesContainerRef.current;
					if (games.length > 0 && gamesContainer) {
						gamesContainer.innerHTML = "";
						games.forEach((game) => {
							const gameItem = createGameItem(game);
							gamesContainer.appendChild(gameItem);
						});
					}
				}
			});

			// Watch for changes in the document title and URL
			observer.observe(document, {
				subtree: true,
				childList: true
			});

			return () => observer.disconnect();
		}
	}, [currentPath, games, createGameItem]);

	return (
		<>
			<center>
				<div style={{ maxWidth: "80vw" }} data-aos="fade-up">
					<section className="relative flex flex-col gap-2 w-full h-full">
						<div className="flex justify-between items-center">
							<h2 className="font-bold text-xl text-left font-sans">
								{name} Games
							</h2>
							<button
								type="button"
								onClick={() => router.push(`/games/category/${filterQuery}`)}
								className="text-sm text-primary hover:text-primary-dark hover:opacity-80 transition-all duration-300 ease-in-out"
							>
								Show All
							</button>
						</div>
						<div className="relative overflow-hidden w-full rounded-lg">
							<button
								type="button"
								onClick={() => scrollContainer("left")}
								className="prev-button transition ease-linear absolute z-[1] left-0 w-20 h-full px-4 bg-gradient-to-r from-black to-transparent"
							>
								<ArrowBackIcon className="w-6 h-6" />
							</button>
							<button
								type="button"
								onClick={() => scrollContainer("right")}
								className="next-button transition ease-linear absolute z-[1] right-0 w-20 h-full px-4 bg-gradient-to-l from-black to-transparent"
							>
								<ArrowForwardIcon className="w-6 h-6" />
							</button>
							<div
								ref={gamesContainerRef}
								className="games-container relative flex gap-3 overflow-x-auto w-full py-1 scrollbar-hide"
								style={{
									scrollBehavior: "smooth",
									WebkitOverflowScrolling: "touch",
									scrollSnapType: "x mandatory",
								}}
							/>
						</div>
					</section>
				</div>
			</center>
		</>
	);
};

const GbaGamesSliders = () => {
	const [hasSearchQuery, setHasSearchQuery] = useState(false);

	useEffect(() => {
		// Check for search query using window.location
		const hasQuery = typeof window !== 'undefined' && 
			new URLSearchParams(window.location.search).has('q');
		setHasSearchQuery(hasQuery);
	}, []);

	// If there's a search query, don't show the sliders
	if (hasSearchQuery) {
		return null;
	}

	return (
		<div>
			<br />
			<br />
			{slideshows.map((slideshow, index) => (
				<React.Fragment key={index}>
					<div className={slideshow.hidden ? "hidden" : ""}>
						<GameSlideshow name={slideshow.name} filterQuery={slideshow.filterQuery} />
					</div>
					<br />
					<br />
				</React.Fragment>
			))}
		</div>
	);
};

export default GbaGamesSliders;
