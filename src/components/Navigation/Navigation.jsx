import React from 'react';
import classes from './Navigation.module.scss'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.container}>
            <Link to='/home'>
                <figure>
                    <img src={require("../../assets/Logo.png")} alt="Logo"/>
                </figure>
            </Link>
            <section className={classes.title_container}>
                <h1 className={classes.title}>Hi intern!</h1>
                <h3 className={classes.subtitle}>Welcome to MI 2022 Front-end test</h3>
            </section>
            <section className={classes.links_container}>
                <h3 className={classes.title_sm}>Lets start using The Cat API</h3>
                <nav className={classes.nav_buttons}>
                    <Link to='/voting' className={classes.nav_container}>
                        <div className={[classes.nav_card, classes.card_voting].join(' ')}>
                            <figure>
                                <img src={require("../../assets/vote-table.png")} alt="vote-table"/>
                            </figure>
                        </div>
                        <div className={classes.nav_btn}>
                            <h2 className={classes.btn_title}>
                                Voting
                            </h2>
                        </div>
                    </Link>
                    <Link to='/breeds' className={classes.nav_container}>
                        <div className={[classes.nav_card, classes.card_breeds].join(' ')}>
                            <figure>
                                <img src={require("../../assets/pet-breeds.png")} alt="pet-breeds"/>
                            </figure>
                        </div>
                        <div className={classes.nav_btn}>
                            <h2 className={classes.btn_title}>
                                Breeds
                            </h2>
                        </div>
                    </Link>
                    <Link to='/gallery' className={classes.nav_container}>
                        <div className={[classes.nav_card, classes.card_gallery].join(' ')}>
                            <figure>
                                <img src={require("../../assets/images-search.png")} alt="images-search"/>
                            </figure>
                        </div>
                        <div className={classes.nav_btn}>
                            <h2 className={classes.btn_title}>
                                Gallery
                            </h2>
                        </div>
                    </Link>
                </nav>
            </section>
        </div>
    );
};

export default Navigation;