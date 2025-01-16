import GameClient from "./GameClient";
import path from 'path';
import fs from 'fs/promises';
import { Suspense } from 'react';

export async function generateStaticParams() {
	try {
		// Read the games.json file directly during build time
		const gamesPath = path.join(process.cwd(), 'public', 'games.json');
		const gamesData = await fs.readFile(gamesPath, 'utf8');
		const games = JSON.parse(gamesData);
		
		return games.map((_, index) => ({
			id: String(index + 1)
		}));
	} catch (error) {
		console.error('Error generating static params:', error);
		return [];
	}
}

export default function Game() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<GameClient />
		</Suspense>
	);
}
