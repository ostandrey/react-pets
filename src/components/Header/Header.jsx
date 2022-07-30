import React, {useState} from 'react';
import classes from "./Header.module.css";
import MyInput from "../UI/MyInput";
import {Link} from "react-router-dom";

const Header = ({value, onChange}) => {
    return (
        <div className={classes.header}>
            <MyInput
                value={value}
                onChange={onChange}
                className={classes.search_bar}
            />
            <Link to="/likes" className={classes.reaction_link}>
                <img src={require("../../assets/smiley.png")} alt="good smiley"/>
            </Link>
            <Link to="/favourites" className={classes.reaction_link}>
                <img src={require("../../assets/heart.png")} alt="heart"/>
            </Link>
            <Link to="/dislikes" className={classes.reaction_link}>
                <img src={require("../../assets/bad-smiley.png")} alt="bad smiley"/>
            </Link>
        </div>
    );
};

export default Header;