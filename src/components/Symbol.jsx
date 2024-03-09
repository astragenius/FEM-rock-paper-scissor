import { motion } from "framer-motion";
const Symbol = ({ name, icon, setGameStart }) => {
	return (
		<motion.div
			whileHover={{ outline: " 35px solid hsla(0, 0%, 59%, 0.1)", scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`gameSymbol ${name}`}
			onClick={() => setGameStart(true)}
		>
			<div className="symbolContainer">
				<img src={icon} alt="" />
			</div>
		</motion.div>
	);
};

export default Symbol;
