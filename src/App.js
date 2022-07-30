import React from "react";
import "./styles/App.css";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <div>
                <Header/>
                <AppRouter/>
            </div>

        </Router>
    </div>
  );
}

export default App;
