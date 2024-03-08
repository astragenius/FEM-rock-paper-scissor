import { motion } from "framer-motion";
import { useState } from "react";
import RulesModal from "./RulesModal";

const Footer = ({ gameMode, setGameMode }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<footer className="footer">
				<RulesModal open={open} setOpen={setOpen} gameMode={gameMode} />
				<div className="container">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="btn-rules ls-25 fs-16 text-uppercase"
						onClick={() => setGameMode((prev) => !prev)}
					>
						{gameMode ? "Switch to Basic" : "Switch to Advanced"}
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setOpen(true)}
						className="btn-rules ls-25 fs-16 text-uppercase "
					>
						Rules
					</motion.button>
				</div>
			</footer>
		</>
	);
};

export default Footer;
