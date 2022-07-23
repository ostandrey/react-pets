import "./styles/App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Breeds/>
    </div>
  );
}

export default App;
