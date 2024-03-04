const Symbol = ({ name, icon }) => {
	console.log(icon);
	return (
		<div className={`gameSymbol ${name}`}>
			<div className="symbolContainer">
				<img src={icon} alt="" />
			</div>
		</div>
	);
};

export default Symbol;
