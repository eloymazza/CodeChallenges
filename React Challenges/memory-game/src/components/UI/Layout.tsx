import "./layout.css";
import {
  useGameContext,
  useGameDispatchContext
} from "../../hooks/useContexts/useGameContext";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const gameContext = useGameContext();
  const dispatch = useGameDispatchContext();
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
