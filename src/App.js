import "./styles/App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home/>
    </div>
  );
}

export default App;
