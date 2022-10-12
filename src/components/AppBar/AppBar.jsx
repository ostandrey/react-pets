import React, {useState} from 'react';
import classes from "./AppBar.module.scss";
import MyButton from "../UI/button/MyButton";
import Drawer from "../Drawer/Drawer";
import MyInput from "../UI/input/MyInput";
import {Link, useNavigate} from "react-router-dom";

const AppBar = () => {
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

    const [isOpenedNavigation, setIsOpenedNavigation] = useState(false);

    return (
        <div className={classes.header}>
            <MyButton className={classes.button__home} onClick={() => setIsOpenedNavigation(true)}>
                <img src={require('../../assets/menu.png')} alt="menu"/>
            </MyButton>
            {isOpenedNavigation && <Drawer onClose={() => setIsOpenedNavigation(false)}/>}
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
        </div>
    );
};

export default AppBar;