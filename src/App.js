import React from "react";
import "./styles/reset.scss";
import "./styles/styles.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AppRouter from "./components/AppRouter";


function App() {
  return (

        <Router>
            <Navigation/>
            <AppRouter/>
        </Router>

  );
}

export default App;
