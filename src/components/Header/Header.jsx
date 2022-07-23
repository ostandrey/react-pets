import React, {useState} from 'react';
import classes from "./Header.module.css";
import MyButton from "../UI/button/MyButton";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className={classes.header}>
            <input
                type="text"
                className={classes.search_bar}
                placeholder="Search for breeds by name"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            {/*    Links*/}
            <MyButton className={classes.reaction_link}>
                <img src={require("../../assets/smiley.png")} alt="good smiley"/>
            </MyButton>
            <MyButton className={classes.reaction_link}>
                <img src={require("../../assets/heart.png")} alt="heart"/>
            </MyButton>
            <MyButton className={classes.reaction_link}>
                <img src={require("../../assets/bad-smiley.png")} alt="bad smiley"/>
            </MyButton>
        </div>
    );
};

export default Header;