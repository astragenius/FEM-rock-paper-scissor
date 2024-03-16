import { motion } from "framer-motion";
const Symbol = ({ index, name, icon, playGame }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.1,
				delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			whileHover={{ outline: " 35px solid hsla(0, 0%, 59%, 0.1)", scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`gameSymbol ${name}`}
			onClick={() => playGame(index)}
		>
			<div className="symbolContainer">
				<img src={icon} alt="" />
			</div>
		</motion.div>
	);
};

export default Symbol;
