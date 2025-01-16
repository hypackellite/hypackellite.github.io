"use client";

import Link from "next/link";

const FavoritesList = ({ favorites, games }) => {

	// Remove this if you want to display favorites
	return null;

	// if (!favorites.length) {
	// 	return null; // No favorites to display
	// }

	// const favoriteGames = games.filter((game) =>
	// 	favorites.includes((game.originalIndex + 1).toString()),
	// );

	// return (
	// 	<div className="favorites-list">
	// 		<br />
	// 		<h1
	// 			// style={{ fontFamily}}
	// 			className="text-3xl font-extrabold  flex justify-center align-center m-auto w-full font-sans"
	// 		>
	// 			Favorites
	// 		</h1>
	// 		<br />
	// 		<div className="app-list">
	// 			{favoriteGames.map((game, index) => {
	// 				const gameLink = `/play/${game.originalIndex + 1}`;

	// 				return (
	// 					<div key={index} className="app-card">
	// 						<Link
	// 							id="launchgame"
	// 							href={gameLink}
	// 							data-justopen="false"
	// 							data-name={game.name}
	// 							onClick={() => addToRecentPlays(game)}
	// 						>
	// 							<div className="image-placeholder loading">
	// 								<div className="gradient" />
	// 								<img
	// 									className="app-image"
	// 									id="app-image"
	// 									src={game.imageSrc}
	// 									alt=""
	// 									onLoad={(e) => {
	// 										e.target.parentElement.classList.remove("loading");
	// 										e.target.parentElement.classList.add("loaded");
	// 									}}
	// 									onError={(e) => {
	// 										e.target.onerror = null;
	// 										e.target.src = "/image-placeholder.png";
	// 									}}
	// 								/>
	// 							</div>
	// 							<br />
	// 							<h1 className="title gms-title">{game.name}</h1>
	// 							<p className="game-tags-color-switch flex flex-wrap">
	// 								{game.tags?.split(",").map((tag, i) => (
	// 									<Link
	// 										key={i}
	// 										href={`/games?q=${encodeURIComponent(tag.trim())}`}
	// 										className="bg-black ml-1 mb-2 mr-1 pl-2 pr-2 pt-1 pb-1 rounded-md hover"
	// 									>
	// 										{tag.trim()}
	// 									</Link>
	// 								))}
	// 							</p>
	// 						</Link>
	// 						<button
	// 							type="button"
	// 							onClick={(e) => {
	// 								e.preventDefault();
	// 								toggleFavorite(game.originalIndex.toString());
	// 							}}
	// 							className="favorite-button"
	// 						></button>
	// 					</div>
	// 				);
	// 			})}
	// 		</div>
	// 	</div>
	// );
};

export default FavoritesList;
