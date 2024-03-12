import bgImageAdvanced from "../assets/BackgroundImages/bg-pentagon.svg";
import bgImageDefault from "../assets/BackgroundImages/bg-triangle.svg";
import Symbol from "./Symbol";

const GameStart = ({ gameMode, playGame }) => {
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
	const symbolRender = gameMode ? symbolsDefault : symbolsBonus;

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${
						gameMode ? bgImageDefault : bgImageAdvanced
					})`,
				}}
				className="gameBoard"
			>
				<div className={gameMode ? "gridBase" : "gridAdvanced"}>
					{symbolRender.map((symbol) => {
						return (
							<Symbol
								key={symbol.id}
								index={symbol.id}
								name={symbol.name}
								icon={symbol.icon}
								playGame={playGame}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default GameStart;