import React from 'react';
import classes from "./Likes.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Likes = () => {
    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
            </div>
            <div className={classes.grid_container}>
                <div className={classes.container}></div>
            </div>
        </section>
    );
};

export default Likes;