import React from 'react';
import Header from "../../components/Header/Header";
import classes from "./Gallery.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MyButton from "../../components/UI/MyButton";

const Gallery = () => {
    return (
        <div>
            <Header/>
            <section className={classes.content_wrapper}>
                <div className={classes.control_panel}>
                    <Breadcrumb/>
                    <MyButton className={classes.upload_btn}>
                        <img src={require('../../assets/upload.png')} alt="upload"/>
                        Upload
                    </MyButton>
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

export default Gallery;