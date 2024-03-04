import Symbol from "./Symbol";

const GameBoard = () => {
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
			<div className="gameBoard">
				<div className="gameBoardGrid">
					{symbolsDefault.map((symbol) => {
						return (
							<Symbol key={symbol.id} name={symbol.name} icon={symbol.icon} />
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default GameBoard;
