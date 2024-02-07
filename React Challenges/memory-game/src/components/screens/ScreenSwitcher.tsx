import MainScreen from "./MainScreen";
import Board from "./BoardScreen";
import RandomImageSetScreen from "./RandomImageSetScreen";
import { useGameContext } from "../../hooks/useContexts/useGameContext";
import CustomImagesSetScreen from "./CustomImageSetScreen";

const Screen = () => {
  const { stage } = useGameContext();
  switch (stage) {
    case "main":
      return <MainScreen />;
    case "random-images-set":
      return <RandomImageSetScreen />;
    case "custom-images-set":
      return <CustomImagesSetScreen />;
    case "in-game":
      return <Board elementsQTY={10} />;
    case "end":
      return <h1>Hame ended</h1>;
    default:
      throw Error("Unknown stage: " + stage);
  }
};

export default Screen;
