import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import closeIcon from "../assets/icons/icon-close.svg";
import rulesBonus from "../assets/images/image-rules-bonus.svg";
import rulesDefault from "../assets/images/image-rules.svg";

const RulesModal = ({ open, setOpen, gameMode }) => {
	const dialogRef = useRef(null);

	const variants = {
		open: {
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			},
		},
		close: {
			scale: 0,

			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	useEffect(() => {
		if (dialogRef.current) {
			if (open) {
				dialogRef.current.showModal();
			} else {
				dialogRef.current.close();
			}
		}
	}, [open]);

	return (
		<>
			<motion.dialog
				animate={open ? "open" : "close"}
				variants={variants}
				className="ruleModal"
				ref={dialogRef}
			>
				<div className="modalHeader">
					<h3 className="fs-32 text-uppercase text-dark">Rules</h3>
					<motion.button onClick={() => setOpen(false)} className="btn-close">
						<img src={closeIcon} alt="" />
					</motion.button>
				</div>
				<img
					className="ruleImage"
					src={gameMode ? rulesDefault : rulesBonus}
					alt=""
				/>
			</motion.dialog>
		</>
	);
};

export default RulesModal;
