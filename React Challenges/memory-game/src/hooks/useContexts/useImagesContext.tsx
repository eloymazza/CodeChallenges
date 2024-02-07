import { useContext } from "react";
import {
  GameImagesContext,
  GameImagesDispatchContext
} from "../../store/contexts/gameImagesContext";

export const useImagesContext = () => {
  const imagesContext = useContext(GameImagesContext);
  if (!imagesContext)
    throw Error("imagesContext must be used within a gameImagesProvider");
  return imagesContext;
};

export const useImageDispatchContext = () => {
  const dispatch = useContext(GameImagesDispatchContext);
  if (!dispatch)
    throw Error(
      "GameImagesDispatchContext must be used within a gameImagesDispatchProvider"
    );
  return dispatch;
};
