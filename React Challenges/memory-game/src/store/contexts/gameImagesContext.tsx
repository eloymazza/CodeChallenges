import { createContext } from "react";
import { ImagesAction } from "../reducers/gameImagesReducer";
import { GameImage } from "../../types/imageTypes";

export const GameImagesContext = createContext<GameImage[] | null>(null);

export const GameImagesDispatchContext = createContext<
  React.Dispatch<ImagesAction>
>({} as React.Dispatch<ImagesAction>);
