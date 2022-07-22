import React from 'react';
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.container}>
            <img className={classes.main_picture} src={require("../assets/girl-and-pet1.png")} alt="girl-and-pet"/>
        </div>
    );
};

export default Home;