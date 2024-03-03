import { useState } from "react";
import RulesModal from "./RulesModal";

const Footer = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<footer className="footer">
				<RulesModal open={open} setOpen={setOpen} />
				<div className="container">
					<button
						onClick={() => setOpen(true)}
						className="btn-rules ls-25 fs-16 text-uppercase "
					>
						Rules
					</button>
				</div>
			</footer>
		</>
	);
};

export default Footer;
