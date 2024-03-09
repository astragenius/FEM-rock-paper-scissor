import Symbol from "./Symbol";

const GamePlay = () => {
	return (
		<>
			<div className="gameBoardPlay">
				<div>
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">You Picked</h3>
					<Symbol key={1} name={"rock"} icon={"/public/Icons/icon-rock.svg"} />
				</div>

				<div>
					<h3 className="fs-24-15 text-uppercase ls-30 fw-600">
						The House Picked
					</h3>
					<Symbol key={1} name={"rock"} icon={"/public/Icons/icon-rock.svg"} />
				</div>
			</div>
		</>
	);
};

export default GamePlay;
