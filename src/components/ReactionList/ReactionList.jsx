import React from 'react';
import classes from "./ReactionList.module.scss";

const ReactionList = ({votes}) => {
    return (
        <div className={classes.reaction_list}>
            {
                votes.map(vote =>
                    <div className={classes.reaction_item} key={vote.id}>
                        <span className={classes.reaction_time}>
                            {new Date(vote.created_at).toLocaleTimeString().slice(0, 5)}
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