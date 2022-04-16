import GameProvider from "./contexts/GamesContext";
import Routes from "./Routes";

export default function App() {
    return (
        <GameProvider>
            <Routes />
        </GameProvider>
    )
}