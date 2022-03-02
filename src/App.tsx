import "./App.css";
import Box from "./components/Box";
import { GlobalProvider } from "./contexts/Global";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Box />
      </GlobalProvider>
    </div>
  );
}

export default App;
