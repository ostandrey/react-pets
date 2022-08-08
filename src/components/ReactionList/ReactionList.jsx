import React from 'react';
import classes from "./ReactionList.module.css";

const ReactionList = ({votes}) => {
    return (
        <div className={classes.reaction_list}>
            {
                votes.map(vote =>
                    <div className={classes.reaction_item}>
                        <span className={classes.reaction_time}>
                            22:35
                        </span>
                        {
                            vote.value === 1
                                ?
                                <>
                                    <p className={classes.reaction_info}>
                                        Image ID: {vote.image_id} was added to Likes
                                    </p>
                                    <img src={require("../../assets/smiley-color-sm.png")} alt="reaction"/>
                                </>
                                : vote.value === 2 ?
                                    <>
                                        <p className={classes.reaction_info}>
                                            Image ID: {vote.image_id} was added to Dislikes
                                        </p>
                                        <img src={require("../../assets/bad-smiley-color-sm.png")} alt="reaction"/>
                                    </>
                                :
                                    <>
                                        <p className={classes.reaction_info}>
                                            Image ID: {vote.image_id} was added to Favourite
                                        </p>
                                        <img src={require("../../assets/heart-color-sm.png")} alt="reaction"/>
                                    </>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ReactionList;