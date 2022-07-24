import React from 'react';
import classes from "./Breadcrumb.module.css";
import MyButton from "../UI/MyButton";
import {useNavigate} from 'react-router-dom'

const Breadcrumb = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.breadcrumb_wrapper}>
            <MyButton className={classes.btn_back}>
                <img onClick={() => navigate(-1)} src={require("../../assets/arrow-back.png")} alt="Back"/>
            </MyButton>
            <span className={classes.breadcrumb}>
                Voting
            </span>
        </div>
    );
};

export default Breadcrumb;