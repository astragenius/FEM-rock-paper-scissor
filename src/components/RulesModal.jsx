import { useEffect, useRef } from "react";
import closeIcon from "../assets/icons/icon-close.svg";
import rulesBonus from "../assets/images/image-rules-bonus.svg";
import rulesDefault from "../assets/images/image-rules.svg";
const RulesModal = ({ open, setOpen }) => {
	const dialogRef = useRef(null);

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
			<dialog ref={dialogRef}>
				<div>
					<h3>Rules</h3>
					<button onClick={() => setOpen(false)} className="btn-close">
						<img src={closeIcon} alt="" />
					</button>
				</div>
				<img src={rulesDefault} alt="" />
			</dialog>
		</>
	);
};

export default RulesModal;
