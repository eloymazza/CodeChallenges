import "./App.css";
import Layout from "./components/UI/Layout";
import ScreenSwitcher from "./components/screens/ScreenSwitcher";
import GameStateProvider from "./providers/GameStateProvider";

function App() {
  return (
    <GameStateProvider>
      <Layout>
        <ScreenSwitcher />
      </Layout>
    </GameStateProvider>
  );
}

export default App;
