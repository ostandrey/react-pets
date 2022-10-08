import React, {useState} from 'react';
import classes from "./Header.module.scss";
import MyInput from "../UI/input/MyInput";
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const Header = () => {
    const [searchData, setSearchData] = useState('');
    const [focused, setFocused] = useState(false);
    const router = useNavigate();

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchData) {
            router('/search', {state: {searchData}})
            setSearchData('')
        }
    }

    return (
        <header className={classes.header}>
            <form className={`${classes.search_bar}  ${focused && classes.search_bar_active}`}>
                <MyInput
                    onChange={e => setSearchData(e.target.value)}
                    className={classes.search_input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type="text"
                />
                <MyButton className={classes.search_btn} onClick={handleSubmit}>
                    <img src={require('../../assets/search.png')} alt="search"/>
                </MyButton>
            </form>
            <Link to="/likes" className={classes.reaction_link}>
                <img src={require("../../assets/smiley.png")} alt="good smiley"/>
            </Link>
            <Link to="/favourites" className={classes.reaction_link}>
                <img src={require("../../assets/heart.png")} alt="heart"/>
            </Link>
            <Link to="/dislikes" className={classes.reaction_link}>
                <img src={require("../../assets/bad-smiley.png")} alt="bad smiley"/>
            </Link>
        </header>
    );
};

export default Header;