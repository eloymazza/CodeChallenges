import MainScreen from "./MainScreen";
import Board from "./BoardScreen";
import RandomImageScreen from "./RandomImageScreen";
import { useGameContext } from "../../hooks/useGameContext";

const Screen = () => {
  const { stage } = useGameContext();
  console.log("stage", stage);
  switch (stage) {
    case "main":
      return <MainScreen />;
    case "random-images-set":
      return <RandomImageScreen />;
    case "in-game":
      return <Board elementsQTY={10} />;
    case "end":
      return <h1>Hame ended</h1>;
    default:
      throw Error("Unknown stage: " + stage);
  }
};

export default Screen;
