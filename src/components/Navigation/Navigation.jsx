import React from 'react';
import classes from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className={classes.nav_buttons}>
            <NavLink to='/voting'
                     className={({isActive}) => isActive
                         ? `${classes.nav_container} ${classes.active}`
                         : classes.nav_container}
                     onClick={props.onCloseDrawer}
            >
                <div className={[classes.nav_card, classes.card_voting].join(' ')}>
                    <img src={require("../../assets/vote-table.png")} alt="vote-table"/>
                </div>
                <div className={classes.nav_btn}>
                    <h2 className={classes.btn_title}>
                        Voting
                    </h2>
                </div>
            </NavLink>
            <NavLink to='/breeds'
                     className={({isActive}) => isActive
                         ? `${classes.nav_container} ${classes.active}`
                         : classes.nav_container}
                     onClick={props.onCloseDrawer}
            >
                <div className={[classes.nav_card, classes.card_breeds].join(' ')}>
                    <img src={require("../../assets/pet-breeds.png")} alt="pet-breeds"/>
                </div>
                <div className={classes.nav_btn}>
                    <h2 className={classes.btn_title}>
                        Breeds
                    </h2>
                </div>
            </NavLink>
            <NavLink
                to='/gallery'
                className={({isActive}) => isActive
                    ? `${classes.nav_container} ${classes.active}`
                    : classes.nav_container}
                onClick={props.onCloseDrawer}
            >
                <div className={[classes.nav_card, classes.card_gallery].join(' ')}>
                    <img src={require("../../assets/images-search.png")} alt="images-search"/>
                </div>
                <div className={classes.nav_btn}>
                    <h2 className={classes.btn_title}>
                        Gallery
                    </h2>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navigation;