import "./App.css";
import { GeneratedPdf } from "./components/GeneratedPdf";
import Inputs from "./components/Inputs"
function App() {
  return (
    <div className="App">
    <Inputs></Inputs>
    <GeneratedPdf></GeneratedPdf>
    </div>
  );
}

export default App;
