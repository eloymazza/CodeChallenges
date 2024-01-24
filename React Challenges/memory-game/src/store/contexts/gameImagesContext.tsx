import { createContext } from "react";
import { Photo } from "../../services/imageServices";
import { ImagesAction } from "../reducers/gameImagesReducer";

export const GameImagesContext = createContext<Photo[] | null>(null);

export const GameImagesDispatchContext = createContext<
  React.Dispatch<ImagesAction>
>({} as React.Dispatch<ImagesAction>);
