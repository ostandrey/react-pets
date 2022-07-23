import React from 'react';
import classes from "./Breadcrumb.module.css";
import MyButton from "../UI/button/MyButton";

const Breadcrumb = () => {
    return (
        <div className={classes.breadcrumb_wrapper}>
            <MyButton className={classes.btn_back}>
                <img src={require("../../assets/arrow-back.png")} alt="Back"/>
            </MyButton>
            <span className={classes.breadcrumb}>
                Voting
            </span>
        </div>
    );
};

export default Breadcrumb;