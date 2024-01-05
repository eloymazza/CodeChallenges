import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Layout from "./components/Layout";
// import CongratsAnimation from "./components/CongratsAnimation";

function App() {
  const [showCongrats, setShowCongrats] = useState<boolean>(false);

  const handleShowCongrats = (show: boolean) => {
    setShowCongrats(show);
  };

  return (
    <Layout>
      {/* <CongratsAnimation show={showCongrats} /> */}
      <Board elementsQTY={20} setShowCongrats={handleShowCongrats} />
    </Layout>
  );
}

export default App;
