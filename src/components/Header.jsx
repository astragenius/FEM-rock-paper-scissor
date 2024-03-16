/* eslint-disable react/prop-types */
import logoAdvanced from "../assets/icons/logo-bonus.svg";
import logoDefault from "../assets/icons/logo.svg";
const Header = ({ gameMode, score }) => {
	return (
		<>
			<header className="wrapper">
				<div className="score-header">
					<h1>
						<img
							className="logo"
							style={gameMode ? null : { width: "111px", height: "110px" }}
							src={gameMode ? logoDefault : logoAdvanced}
							alt=""
						/>
					</h1>
					<div className="score-board bg-light text-dark">
						<h2 className="ls-25  text-blue fs-16-10 text-uppercase">Score</h2>
						<p className="lh-64 fs-64-40">{score}</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
