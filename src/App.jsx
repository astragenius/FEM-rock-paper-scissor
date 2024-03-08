import { useState } from "react";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
	const [gameMode, setGameMode] = useState(false);
	return (
		<>
			<Header gameMode={gameMode} />

			<GameBoard gameMode={gameMode} />

			<Footer gameMode={gameMode} setGameMode={setGameMode} />
		</>
	);
}

export default App;
