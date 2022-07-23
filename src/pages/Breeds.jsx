import React from 'react';
import Header from "../components/Header/Header";
import classes from "./Breeds.module.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrmb";

const Breeds = () => {
    return (
        <div>
            <Header/>
            <section className={classes.content_wrapper}>
                <div className={classes.control_panel}>
                    <Breadcrumb/>
                    <select name="" id="" className={classes.select}>
                        All breeds
                    </select>
                    <select name="" id="" className={[classes.select, classes.select_limit].join(' ')}>
                        Limit: 10
                    </select>
                    <button className={classes.sorting_btn}>
                        <img src={require('../assets/ascending.png')} alt="ascending"/>
                    </button>
                    <button className={classes.sorting_btn}>
                        <img src={require('../assets/descending.png')} alt="descending"/>
                    </button>
                </div>
                <div className={classes.grid_container}>
                    <div className={classes.div1}></div>
                    <div className={classes.div2}></div>
                    <div className={classes.div3}></div>
                    <div className={classes.div4}></div>
                    <div className={classes.div5}></div>
                </div>
            </section>
        </div>
    );
};

export default Breeds;