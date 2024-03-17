/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RulesModal from "./RulesModal";

const Footer = ({ gameMode, setGameMode, setScore }) => {
	const [open, setOpen] = useState(false);

	const resetScore = () => {};

	useEffect(() => {
		if (open === true) {
			document.body.classList.add("modal-open");
		} else {
			document.body.classList.remove("modal-open");
		}
	}, [open]);

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
						{gameMode ? "Switch to Advanced" : "Switch to Basic"}
					</motion.button>
					<motion.button
						className="btn-rules ls-25 fs-16 text-uppercase"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setScore(0)}
					>
						Reset Score
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
