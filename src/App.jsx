import { useState } from "react";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import GameScreen from "./screens/gameScreen/GameScreen";
import Navbar from "./components/navbar/Navbar";
import Pane from "./components/pane/Pane";
import styles from "./App.module.scss";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectedGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <FluentProvider theme={webDarkTheme} className={styles.provider}>
      <div className={styles.root}>
        <Navbar />
        <div className={styles.main}>
          <Pane setSelectedGame={handleSelectedGame} />
          <GameScreen selectedGame={selectedGame} />
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
