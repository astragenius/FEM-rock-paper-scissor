import { useState } from "react";
import GamePlay from "./GamePlay";
import GameStart from "./GameStart";

const GameBoard = ({ gameMode }) => {
	const [gameStart, setGameStart] = useState(false);
	const [playerChoice, setPlayerChoice] = useState({});
	const [computerChoice, setComputerChoice] = useState({});
	const symbolsDefault = [
		{
			id: 0,
			name: "rock",
			icon: "/public/Icons/icon-rock.svg",
		},
		{
			id: 1,
			name: "paper",
			icon: "/public/Icons/icon-paper.svg",
		},
		{
			id: 2,
			name: "scissors",
			icon: "/public/Icons/icon-scissors.svg",
		},
	];

	const symbolsBonus = [
		{
			id: 0,
			name: "rock",
			icon: "/public/Icons/icon-rock.svg",
		},
		{
			id: 1,
			name: "paper",
			icon: "/public/Icons/icon-paper.svg",
		},
		{
			id: 2,
			name: "scissors",
			icon: "/public/Icons/icon-scissors.svg",
		},
		{
			id: 3,
			name: "lizard",
			icon: "/public/Icons/icon-lizard.svg",
		},
		{
			id: 4,
			name: "spock",
			icon: "/public/Icons/icon-spock.svg",
		},
	];

	const randomChoice = () => {
		if (gameMode === true) {
			let randomId = Math.floor(Math.random() * symbolsDefault.length);
			let choice = symbolsDefault.find((el) => el.id === randomId);
			return choice;
		} else {
			let randomId = Math.floor(Math.random() * symbolsBonus.length);
			let choice = symbolsBonus.find((el) => el.id === randomId);
			return choice;
		}
	};

	const playGame = (id) => {
		if (gameMode === true) {
			let choice = symbolsDefault.find((el) => el.id === id);
			setPlayerChoice(choice);
			setComputerChoice(randomChoice());
			setGameStart(true);
		} else {
			let choice = symbolsBonus.find((el) => el.id === id);
			setPlayerChoice(choice);
			setComputerChoice(randomChoice());

			setGameStart(true);
		}
	};

	return (
		<main className="wrapper">
			{gameStart ? (
				<GamePlay playerChoice={playerChoice} computerChoice={computerChoice} />
			) : (
				<GameStart gameMode={gameMode} playGame={playGame} />
			)}
		</main>
	);
};

export default GameBoard;
