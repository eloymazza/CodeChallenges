import { Difficulty, Mode, Stage } from "../../types/gameTypes";
import { useGameDispatchContext } from "../../hooks/useContexts/useGameContext";

const MAPP_GAME_MODE_TO_STAGE: Record<Mode, Stage> = {
  default: "in-game",
  random: "random-images-set",
  custom: "custom-images-set"
};

const NewGameForm = () => {
  const dispatch = useGameDispatchContext();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const gameModeInput = event.currentTarget.elements.namedItem("game-mode");
    const difficultyInput =
      event.currentTarget.elements.namedItem("difficulty");
    if (!(gameModeInput && "value" in gameModeInput)) {
      throw new Error("No game mode selected");
    }
    if (!(difficultyInput && "value" in difficultyInput)) {
      throw new Error("No difficulty selected");
    }

    const stage = MAPP_GAME_MODE_TO_STAGE[gameModeInput.value as Mode];

    dispatch({
      type: "UPDATE",
      payload: {
        stage,
        mode: gameModeInput.value as Mode,
        difficulty: difficultyInput.value as Difficulty
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
