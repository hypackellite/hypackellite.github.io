"use client";

// Icons
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplayIcon from "@mui/icons-material/Replay";

// Css
import "./css/style.css";
import "./GameClient.css";

// components (local)
import AdBanner from "@/components/AdBanner";

// components (online)
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const GameClient = () => {
	const params = useParams();
	const searchParams = useSearchParams();
	const id = params.id || searchParams.get("id");
	const [game, setGame] = useState(null);
	const [showIframe, setShowIframe] = useState(false);
	const gamePlayerRef = useRef(null);

	useEffect(() => {
		if (id) {
			const fetchGame = async () => {
				try {
					const response = await fetch("/games.json");
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const games = await response.json();
					const game = games[Number.parseInt(id) - 1];
					setGame(game);
				} catch (error) {
					console.error("Error fetching game data:", error);
				}
			};

			fetchGame();
		}
	}, [id]);

	const handlePlayNow = () => {
		setShowIframe(true);
		document.getElementById("game-placeholder").style.display = "none";
	};

	const toggleFullScreen = () => {
		if (typeof window === "undefined") return;
		const gamePlayer = gamePlayerRef.current;

		if (gamePlayer) {
			if (!document.fullscreenElement) {
				gamePlayer
					.requestFullscreen()
					.then(() => {
						document.getElementById("game-iframe-play").style.minHeight = "100vh";
					})
					.catch((err) => {
						alert(
							`Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
						);
					});
			} else {
				document.exitFullscreen().then(() => {
					document.getElementById("game-iframe-play").style.height = "600px";
					document.getElementById("game-iframe-play").style.minHeight = "600px";
					document.getElementById("game-iframe-play").style.maxHeight = "600px";
				});
			}
		}
	};

	const getImagePath = (imageSrc) => {
		if (!imageSrc) return '/image-placeholder.png';
		
		// Check if it's a cloud game image
		if (game.OnOtherServer) {
			const baseUrl = 'https://hypackelcloudflare.pages.dev';
			return imageSrc.startsWith("/") ? `${baseUrl}${imageSrc}` : imageSrc;
		}
		
		// Regular image handling
		return imageSrc.startsWith("/files/") ? imageSrc : `/files/${imageSrc}`;
	};

	const getGameURL = (game) => {
		if (!game) return '';
		
		// Check if it's a cloud game
		if (game.OnOtherServer) {
			const baseUrl = 'https://hypackelcloudflare.pages.dev';
			return game.url.startsWith("/") ? `${baseUrl}${game.url}` : game.url;
		}

		// Regular game URL handling
		return game.removeBaseUrl || !game.url.startsWith("/") 
			? game.url 
			: game.url;
	};

	if (!game) {
		return <div>Loading...</div>;
	}

	const headerRight = (
		<div className="header-right flex items-center">
			<div className="b-action2">
				<button
					type="button"
					onClick={toggleFullScreen}
					style={{ color: "var(--text)" }}
					className={`flex items-center mr-2 pr-4 pl-2 pt-2 pb-2 hover:transition-all hover:duration-200 border-2 rounded-md ${
						showIframe 
							? "hover:border-gray-500 border-transparent" 
							: "border-gray-500 opacity-50 cursor-not-allowed"
					}`}
					disabled={!showIframe}
				>
					<FullscreenIcon className="b-icon" />
					<span className="ml-2">Fullscreen</span>
				</button>
			</div>
		</div>
	);

	return (
		<>

			<main style={{ zIndex: "3 !important" }} className="manicontent">
				<Link
					className="text-gray-500 hover:text-white pt-3 pb-3 pl-2 pr-2 rounded-sm hover:transition-all hover:duration-200"
					href="/games"
				>
					<ArrowBackIcon /> Back to Games
				</Link>
				<br />
				<br />
				<br />
				<div className="w-full text-center flex justify-center game-wrapper">
					<div className="w-5/6">
						<div className="flex flex-row">
							<div className="w-3/4">
								<div className="game-container">
									<div className="game-content" data-id={169}>
										<div id="allow_mobile_version" />
										<div
											className="game-iframe-container"
											id="game-player"
											ref={gamePlayerRef}
										>
											<div id="mobile-back-button" draggable="true">
												<i className="bi bi-x-circle-fill" />
											</div>

											<div id="game-placeholder" style={{ position: "relative", aspectRatio: "4/3", height: "100%" }}>
												<img
													src={getImagePath(game.imageSrc)}
													alt={game.name}
													className="game-img"
													style={{ 
														width: "100%",
														height: "100%",
														objectFit: "cover",
														position: "absolute",
														top: 0,
														left: 0
													}}
													onError={(e) => {
														e.target.onerror = null;
														e.target.src = '/image-placeholder.png';
													}}
												/>
												<div className="overlay"/>
												<div
													style={{
														display: "flex",
														verticalAlign: "middle",
														justifyContent: "center",
														position: "relative",
														zIndex: 20,
														height: "100%",
														alignItems: "center"
													}}
												>
													<button
														type="button"
														className="rounded-full text-white bg-black h-[7vh] hover:bg-white hover:text-black hover:transition hover:duration-300 hover:border-[1px] hover:border-white px-16 py-2 active:bg-gray-200 active:text-gray-800 transition duration-300"
														onClick={handlePlayNow}
													>
														Play Now
													</button>
												</div>
											</div>
											{showIframe && (
												<iframe
													title="game"
													src={getGameURL(game)}
													width="100%"
													style={{ 
														aspectRatio: "4/3",
														height: "100%",
														position: "absolute",
														top: 0,
														left: 0
													}}
													className="h-dvh max-h-vh"
													id="game-iframe-play"
													allowFullScreen
												/>
											)}
										</div>
									</div>
									<div className="game-info">
										<div className="header-left">
											<h1 id="game-title" className="single-title">
												{game.name}
											</h1>
										</div>
										{headerRight}
									</div>
								</div>
							</div>
							<div className="w-1/4 pl-4">
								<div className="sticky border-[1px] border-red-500 top-20">
									<AdBanner
										dataAdFormat="auto"
										dataFullWidthResponsive={true}
										dataAdSlot="4398483733"
									/>
								</div>
							</div>
						</div>
						<br />
						<div className="banner-ad-wrapper">
							<div
								className="banner-ad-content"
								style={{ padding: "20px 0", border: "1px solid red", textAlign: "center" }}
							>
								<AdBanner
									dataAdFormat="auto"
									dataFullWidthResponsive={true}
									dataAdSlot="5850500894"
								/>
							</div>
						</div>
						<br />
						<center>
							<p>
								Fullscreen or Game glitched? Play{" "}
								<Link
									style={{
										fontFamily: '"Times New Roman", Times, serif',
									}}
									id="FullscreenGlitchUrl"
									href={game.url}
									className="text-primary underline text-blue-600"
								>
									Here
								</Link>
							</p>
						</center>
					</div>
				</div>
			</main>
		</>
	);
};

export default GameClient;
