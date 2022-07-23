import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <Routes>
                <Route exact path="/home"  element={<Home />}/>
                <Route exact path='/voting' element={<Voting />}/>
                <Route exact path="/breeds"  element={<Breeds />}/>
                <Route exact path="/gallery"  element={<Gallery />}/>
                {/*<Route path="/error"  element={<Error />}/>*/}
                <Route path='*' element={<Navigate replace to="/home" />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
