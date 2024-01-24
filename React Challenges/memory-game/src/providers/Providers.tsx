import React from "react";
import GameImagesProvider from "./GameImagesProvider";
import GameStateProvider from "./GameStateProvider";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <GameImagesProvider>
      <GameStateProvider>{children}</GameStateProvider>
    </GameImagesProvider>
  );
};

export default Providers;
