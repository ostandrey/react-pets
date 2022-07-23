import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <input type="text" className={classes.search_bar} placeholder="Search for breeds by name"/>
            {/*    Links*/}
            <button className={classes.reaction_link}>
                <img src={require("../../assets/smiley.png")} alt="good smiley"/>
            </button>
            <button className={classes.reaction_link}>
                <img src={require("../../assets/heart.png")} alt="heart"/>
            </button>
            <button className={classes.reaction_link}>
                <img src={require("../../assets/bad-smiley.png")} alt="bad smiley"/>
            </button>
        </div>
    );
};

export default Header;