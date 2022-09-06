import React from 'react';
import classes from "./Home.module.scss";

const Home = () => {
    return (
        <>
            <div className={`wrapper ${classes.container}`}/>
            <div className={classes.main_picture}>
                <img src={require("../../assets/girl-and-pet1.png")} alt="girl-and-pet"/>
            </div>
        </>
    );
};

export default Home;