/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Placeholder from "./Placeholder";
import PlayAgain from "./PlayAgain";
import Symbol from "./Symbol";

const GamePlay = ({
	playerChoice,
	computerChoice,
	checkWinner,
	setGameStart,
}) => {
	const [isPending, setPending] = useState(true);
	const [modal, showModal] = useState(false);
	const [status, setStatus] = useState("");
	const [isMobile, setMobile] = useState(window.innerWidth < 490);

	const updateMedia = () => {
		setMobile(window.innerWidth < 490);
	};
	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	useEffect(() => {
		setInterval(() => {
			setPending(false);
		}, 1000);
		setInterval(() => {
			showModal(true);
		}, 2000);
		setStatus(checkWinner(playerChoice.name, computerChoice.name));
	}, []);

	return (
		<>
			<div className="gameBoardPlay">
				<div className="container">
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">You Picked</h3>
					<Symbol
						key={playerChoice.id}
						name={playerChoice.name}
						icon={playerChoice.icon}
					/>
				</div>
				{modal && !isMobile && (
					<PlayAgain status={status} setGameStart={setGameStart} />
				)}

				<div className="container">
					<h3 className="fs-24-15 text-uppercase ls-20 fw-600">
						The House Picked
					</h3>

					{isPending ? (
						<Placeholder />
					) : (
						<Symbol
							key={computerChoice.id}
							name={computerChoice.name}
							icon={computerChoice.icon}
						/>
					)}
				</div>
			</div>
			{modal && isMobile && (
				<PlayAgain status={status} setGameStart={setGameStart} />
			)}
		</>
	);
};

export default GamePlay;
