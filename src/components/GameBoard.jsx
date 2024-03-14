import { useEffect, useState } from "react";
import GamePlay from "./GamePlay";
import GameStart from "./GameStart";

const GameBoard = ({ gameMode, setScore, score }) => {
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

	const checkWinner = (p1, c1) => {
		const items = {
			paper: { weakTo: ["lizard", "scissors"], strongTo: ["spock", "rock"] },
			rock: { weakTo: ["paper", "spock"], strongTo: ["scissors", "lizard"] },
			scissors: { weakTo: ["rock", "spock"], strongTo: ["paper", "lizard"] },
			spock: { weakTo: ["paper", "lizard"], strongTo: ["scissors", "rock"] },
			lizard: { weakTo: ["scissors", "rock"], strongTo: ["spock", "paper"] },
		};
		if (items[p1].strongTo.find((el) => el === c1) === c1) {
			setScore(score + 1);
			return "You Win";
		} else if (items[p1].weakTo.find((el) => el === c1) === c1) {
			return "You Lose";
		} else {
			return "Tie";
		}
	};

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
				<GamePlay
					playerChoice={playerChoice}
					computerChoice={computerChoice}
					checkWinner={checkWinner}
					setGameStart={setGameStart}
				/>
			) : (
				<GameStart gameMode={gameMode} playGame={playGame} />
			)}
		</main>
	);
};

export default GameBoard;
