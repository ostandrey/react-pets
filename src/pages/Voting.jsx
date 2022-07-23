import React from 'react';
import classes from './Voting.module.css'
import Header from "../components/Header/Header";
import ReactionList from "../components/ReactionList/ReactionList";
import Breadcrumb from "../components/Breadcrumb/Breadcrmb";

const Voting = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <section className={classes.content_wrapper}>
                <Breadcrumb/>
                <div className={classes.content}>
                    <img src={require("../assets/image 1.png")} alt="test"/>
                    <div className={classes.reaction_group_btn}>
                        <img
                            className={[classes.reaction_btn, classes.btn_smiley].join(' ')}
                            src={require("../assets/smiley-white.png")} alt="good smiley"
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_heart].join(' ')}
                            src={require("../assets/heart-white.png")} alt="heart"
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_bad_smiley].join(' ')}
                            src={require("../assets/bad-smiley-white.png")} alt="bad smiley"
                        />
                    </div>
                </div>
                <ReactionList/>
            </section>
        </div>
    );
};

export default Voting;