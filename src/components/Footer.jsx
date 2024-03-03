import { useState } from "react";
import RulesModal from "./RulesModal";

const Footer = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<footer className="footer">
				<div className="container">
					<button className="btn-rules ls-25 fs-16 text-uppercase ">
						Rules
					</button>
				</div>
			</footer>
		</>
	);
};

export default Footer;
