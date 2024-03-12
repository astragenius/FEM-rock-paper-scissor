import { useState } from "react";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
	const [gameMode, setGameMode] = useState(true);
	const [score, setScore] = useState(0);
	return (
		<>
			<Header gameMode={gameMode} score={score} />

			<GameBoard gameMode={gameMode} score={score} setScore={setScore} />

			<Footer gameMode={gameMode} setGameMode={setGameMode} />
		</>
	);
}

export default App;
