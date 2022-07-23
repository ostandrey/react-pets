import "./styles/App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Gallery/>
    </div>
  );
}

export default App;
