import "./styles/App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Voting from "./pages/Voting";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Voting/>
    </div>
  );
}

export default App;
