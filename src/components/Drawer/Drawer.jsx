import React  from "react";
import classes from "./Drawer.module.scss";
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import Navigation from "../Navigation/Navigation";

const Drawer = (props) => {
    const isOpened = props.isOpened;

    return (
        <div className={`${classes.drawer} ${isOpened ? classes.active : ''} `}>
            <div className={classes.drawer_header}>
                <Link to='/'>
                    <img src={require("../../assets/Logo.png")} alt="Logo"/>
                </Link>
                <MyButton
                    onClick={props.onClose}
                >
                    <img src={require("../../assets/close.png")} alt="Close"/>
                </MyButton>
            </div>
            <Navigation onCloseDrawer={props.onClose}/>
        </div>
    );
};

export default Drawer;