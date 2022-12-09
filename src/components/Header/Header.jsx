import React from 'react';
import classes from "./Header.module.scss";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header className={classes.container}>
            <Link to='/home'>
                <img src={require("../../assets/Logo.png")} alt="Logo"/>
            </Link>
            <section className={classes.title_container}>
                <h1 className={classes.title}>Hi user!</h1>
                <h3 className={classes.subtitle}>Welcome to Pets App</h3>
            </section>
            <h3 className={classes.title_sm}>Lets start using The Dog API</h3>
            <Navigation/>
        </header>
    );
};

export default Header;