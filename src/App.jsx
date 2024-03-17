import { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
	const [gameMode, setGameMode] = useState(true);

	const [score, setScore] = useLocalStorage("points", 0);
	return (
		<>
			<Header gameMode={gameMode} score={score} />

			<GameBoard gameMode={gameMode} score={score} setScore={setScore} />

			<Footer
				gameMode={gameMode}
				setGameMode={setGameMode}
				setScore={setScore}
			/>
		</>
	);
}

export default App;
