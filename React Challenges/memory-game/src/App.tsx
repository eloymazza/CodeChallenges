import "./App.css";
import Layout from "./components/UI/Layout";
import ScreenSwitcher from "./components/screens/ScreenSwitcher";
import Providers from "./providers/Providers";

function App() {
  return (
    <Providers>
      <Layout>
        <ScreenSwitcher />
      </Layout>
    </Providers>
  );
}

export default App;
