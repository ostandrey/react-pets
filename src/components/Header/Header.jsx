import React, {useEffect, useMemo, useState} from 'react';
import classes from "./Header.module.css";
import MyInput from "../UI/MyInput";
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../UI/MyButton";

const Header = () => {

    const [searchData, setSearchData] = useState('');
    const router = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchData) {
            router('/search', {state: {searchData}})
            setSearchData('')
        }
    }

    return (
        <div className={classes.header}>
            <form className={classes.search_bar}>
                <MyInput
                    onChange={e => setSearchData(e.target.value)}
                    className={classes.search_input}
                    type="text"
                    require
                />
                <MyButton className={classes.search_btn} onClick={handleSubmit}>
                    <img src={require('../../assets/search.png')} alt="search"/>
                </MyButton>
            </form>
            <Link to="/likes" className={classes.reaction_link}>
                <figure>
                    <img src={require("../../assets/smiley.png")} alt="good smiley"/>
                </figure>
            </Link>
            <Link to="/favourites" className={classes.reaction_link}>
                <figure>
                    <img src={require("../../assets/heart.png")} alt="heart"/>
                </figure>
            </Link>
            <Link to="/dislikes" className={classes.reaction_link}>
                <figure>
                    <img src={require("../../assets/bad-smiley.png")} alt="bad smiley"/>
                </figure>
            </Link>
        </div>
    );
};

export default Header;