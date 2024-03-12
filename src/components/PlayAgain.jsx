import { motion } from "framer-motion";

const PlayAgain = ({ status, setGameStart }) => {
	return (
		<div className="playAgain-container">
			<h3 className="fs-56 text-uppercase fw-700">{status}</h3>
			<motion.button
				whileHover={{ color: "#DB2E4D", scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				className="play-btn text-uppercase ls-25"
				onClick={() => setGameStart(false)}
			>
				Play it Again
			</motion.button>
		</div>
	);
};

export default PlayAgain;
