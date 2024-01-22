import React, { FC, useContext } from "react";
import "./layout.css";
import {
  GameContext,
  GameDispatchContext
} from "../../store/contexts/gameStateContext";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const gameContext = useContext(GameContext);
  const dispatch = useContext(GameDispatchContext);
  const stage = gameContext?.stage;

  const handleBackClick = () => {
    dispatch({
      type: "UPDATE",
      payload: {
        stage: "main",
        mode: "default",
        difficulty: "easy"
      }
    });
  };

  return (
    <div className='layout'>
      <header className='header'>
        Memory Challenge
        <nav>
          {stage !== "main" && (
            <button type='button' onClick={handleBackClick}>
              Back
            </button>
          )}
        </nav>
      </header>
      <main className='main'>{children}</main>
      <footer className='footer'>Footer</footer>
    </div>
  );
};

export default Layout;
