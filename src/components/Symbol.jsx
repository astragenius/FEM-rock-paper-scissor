import rock from "../assets/icons/icon-rock.svg";

const Symbol = () => {
	return (
		<div className="gameSymbol">
			<div className="symbolContainer">
				<img src={rock} alt="" />
			</div>
		</div>
	);
};

export default Symbol;
