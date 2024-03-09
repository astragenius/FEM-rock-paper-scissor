import { useEffect, useState } from "react";
import Placeholder from "./Placeholder";
import PlayAgain from "./PlayAgain";
import Symbol from "./Symbol";

const GamePlay = () => {
	const [isPending, setPending] = useState(true);
	const [modal, showModal] = useState(false);

	useEffect(() => {
		setInterval(() => {
			setPending(false);
		}, 1000);
	});

	useEffect(() => {
		setInterval(() => {
			showModal(true);
		}, 2000);
	}, [isPending]);
	return (
		<>
			<div className="gameBoardPlay">
				<div className="container">
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">You Picked</h3>
					<Symbol key={1} name={"rock"} icon={"/public/Icons/icon-rock.svg"} />
				</div>
				{modal && <PlayAgain status={"Draw"} />}

				<div className="container">
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">
						The House Picked
					</h3>

					{isPending ? (
						<Placeholder />
					) : (
						<Symbol
							key={1}
							name={"rock"}
							icon={"/public/Icons/icon-rock.svg"}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default GamePlay;
