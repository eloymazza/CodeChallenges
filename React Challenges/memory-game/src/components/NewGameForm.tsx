import React, { useContext } from "react";
import { GameDispatchContext } from "../store/contexts/gameStateContext";

const NewGameForm = () => {
  const dispatch = useContext(GameDispatchContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const gameModeInputs = event.currentTarget.elements.namedItem("game-mode");
    const difficultyInputs =
      event.currentTarget.elements.namedItem("difficulty");
    if (!(gameModeInputs && "value" in gameModeInputs)) {
      throw new Error("No game mode selected");
    }
    if (!(difficultyInputs && "value" in difficultyInputs)) {
      throw new Error("No difficulty selected");
    }

    dispatch({
      type: "UPDATE",
      payload: { stage: "in-game", mode: "default", difficulty: "easy" }
    });
  };

  return (
    <form action={"handleFormSubmit"} onSubmit={handleSubmit}>
      <label>Choose a game mode:</label>
      <div>
        <input
          type='radio'
          defaultChecked
          id='default'
          value='default'
          name='game-mode'
        />
        <label htmlFor='default'>Default</label>
        <input type='radio' id='random' value='random' name='game-mode' />
        <label htmlFor='random'>Random</label>
        <input type='radio' id='custom' value='custom' name='game-mode' />
        <label htmlFor='custom'>Custom</label>
      </div>
      <label>Choose difficulty level:</label>
      <div>
        <input
          type='radio'
          defaultChecked
          id='easy'
          value='easy'
          name='difficulty'
        />
        <label htmlFor='easy'>Easy</label>
        <input type='radio' id='medium' value='medium' name='difficulty' />
        <label htmlFor='medium'>Medium</label>
        <input type='radio' id='hard' value='hard' name='difficulty' />
        <label htmlFor='hard'>Hard</label>
      </div>
      <button type='submit'>Comenzar</button>
    </form>
  );
};

export default NewGameForm;
