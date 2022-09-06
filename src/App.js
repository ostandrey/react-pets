import React from "react";
import "./styles/reset.scss";
import "./styles/styles.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <AppRouter/>
        </Router>
    </div>
  );
}

export default App;
