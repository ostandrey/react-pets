import React from "react";
import "./styles/reset.scss";
import "./styles/styles.scss";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useMediaQuery} from "./hooks/useMediaQuery";
import Header from "./components/Header/Header";


const queries = ["(max-width: 1200px)"];

function App() {

    const tablet = useMediaQuery(queries);
    if (tablet) {
        return (
            <Router>
                <AppRouter/>
            </Router>
        );
    }

    return (
        <Router>
            <Header/>
            <AppRouter/>
        </Router>
  );
}

export default App;
