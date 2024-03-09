import { useState } from "react";
import Placeholder from "./Placeholder";
import Symbol from "./Symbol";

const GamePlay = () => {
	const [isPending, setPending] = useState(true);
	return (
		<>
			<div className="gameBoardPlay">
				<div className="container">
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">You Picked</h3>
					<Symbol key={1} name={"rock"} icon={"/public/Icons/icon-rock.svg"} />
				</div>

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
