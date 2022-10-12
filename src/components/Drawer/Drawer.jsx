import React  from "react";
import classes from "./Drawer.module.scss";
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import Navigation from "../Navigation/Navigation";

const Drawer = (props) => {
    return (
        <div className={classes.drawer}>
            <div className={classes.drawer_header}>
                <Link to='/'>
                    <img src={require("../../assets/Logo.png")} alt="Logo"/>
                </Link>
                <MyButton
                    onClick={props.onClose}
                    сlassName={classes.close_btn}
                >
                    <img src={require("../../assets/close.png")} alt="Close"/>
                </MyButton>
            </div>
            <Navigation onCloseDrawer={props.onClose}/>
        </div>
    );
};

export default Drawer;