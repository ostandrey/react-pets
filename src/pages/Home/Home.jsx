import React from 'react';
import classes from "./Home.module.scss";
import {useMediaQuery} from "../../hooks/useMediaQuery";
import Header from "../../components/Header/Header";

const queries = ["(max-width: 1200px)"];

const Home = () => {
    const tablet = useMediaQuery(queries);

    if (tablet) {
        return <Header/>
    }

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