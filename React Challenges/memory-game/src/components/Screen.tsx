import { FC } from "react";
import MainScreen from "./MainScreen";
import Board from "./Board";
import { Stage } from "../types/GameTypes";
import RandomImageScreen from "./RandomImageScreen";

type Props = {
  stage: Stage;
};

const Screen: FC<Props> = ({ stage }: Props) => {
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
