const Header = () => {
	return (
		<>
			<header className="score-header">
				<h1>
					<img className="logo" src="/public/Icons/logo.svg" alt="" />
				</h1>
				<div className="score-board bg-light text-dark">
					<h2 className="ls-25  text-blue fs-16-10 text-uppercase">Score</h2>
					<p className="lh-64 fs-64-40">12</p>
				</div>
			</header>
		</>
	);
};

export default Header;
