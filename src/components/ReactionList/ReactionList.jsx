import React from 'react';
import classes from "./ReactionList.module.css";

const ReactionList = () => {
    return (
        <div className={classes.reaction_list}>
            <div className={classes.reaction_item}>
                        <span className={classes.reaction_time}>
                            22:35
                        </span>
                <p className={classes.reaction_info}>
                    Image ID: fQSunHvl8 was added to Favourites
                </p>
                <img src={require("../../assets/heart-color-sm.png")} alt="reaction"/>
            </div>
        </div>
    );
};

export default ReactionList;