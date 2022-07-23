import React from 'react';
import classes from "./Breadcrumb.module.css";

const Breadcrumb = () => {
    return (
        <div className={classes.breadcrumb_wrapper}>
            <button className={classes.btn_back}>
                <img src={require("../../assets/arrow-back.png")} alt="Back"/>
            </button>
            <span className={classes.breadcrumb}>
                Voting
            </span>
        </div>
    );
};

export default Breadcrumb;