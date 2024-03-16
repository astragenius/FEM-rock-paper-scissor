import { motion } from "framer-motion";

const PlayAgain = ({ status, setGameStart }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.1,
				delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className="playAgain-container"
		>
			<motion.h3 className="fs-56 text-uppercase fw-700">{status}</motion.h3>
			<motion.button
				whileHover={{ color: "#DB2E4D", scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				className="play-btn text-uppercase ls-25"
				onClick={() => setGameStart(false)}
			>
				Play it Again
			</motion.button>
		</motion.div>
	);
};

export default PlayAgain;
