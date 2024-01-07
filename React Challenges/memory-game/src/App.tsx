import "./App.css";
import Layout from "./components/Layout";
import { useReducer } from "react";
import { gameStateReducer } from "./store/reducers/gameStateReducer";
import {
  GameContext,
  GameDispatchContext
} from "./store/contexts/gameStateContext";
import { GameState } from "./types/GameTypes";
import Screen from "./components/Screen";

function App() {
  const initialState: GameState = {
    stage: "main",
    mode: "default",
    difficulty: "easy"
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return (
    <GameContext.Provider value={gameState}>
      <GameDispatchContext.Provider value={dispatch}>
        <Layout>
          <Screen stage={gameState.stage} />
        </Layout>
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export default App;
