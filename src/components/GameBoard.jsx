import { useState } from "react";
import GamePlay from "./GamePlay";
import GameStart from "./GameStart";

const GameBoard = ({ gameMode }) => {
	const [gameStart, setGameStart] = useState(false);
	const symbolsDefault = [
		{
			id: 1,
			name: "rock",
			icon: "/public/Icons/icon-rock.svg",
		},
		{
			id: 2,
			name: "paper",
			icon: "/public/Icons/icon-paper.svg",
		},
		{
			id: 3,
			name: "scissors",
			icon: "/public/Icons/icon-scissors.svg",
		},
	];

	const symbolsBonus = [
		{
			id: 1,
			name: "rock",
			icon: "/public/Icons/icon-rock.svg",
		},
		{
			id: 2,
			name: "paper",
			icon: "/public/Icons/icon-paper.svg",
		},
		{
			id: 3,
			name: "scissors",
			icon: "/public/Icons/icon-scissors.svg",
		},
		{
			id: 4,
			name: "lizard",
			icon: "/public/Icons/icon-lizard.svg",
		},
		{
			id: 5,
			name: "spock",
			icon: "/public/Icons/icon-spock.svg",
		},
	];

	return (
		<main className="wrapper">
			{gameStart ? (
				<GamePlay />
			) : (
				<GameStart gameMode={gameMode} setGameStart={setGameStart} />
			)}
		</main>
	);
};

export default GameBoard;
