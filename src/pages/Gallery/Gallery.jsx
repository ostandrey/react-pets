import React, {useEffect, useState} from 'react';
import classes from "./Gallery.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MyButton from "../../components/UI/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import {Link} from "react-router-dom";

const Gallery = () => {
    const [modal, setModal] = useState(false)

    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
                <MyButton className={classes.upload_btn} onClick={() => setModal(true)}>
                    <img src={require('../../assets/upload.png')} alt="upload" />
                    Upload
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <MyButton className={classes.close_btn} onClick={() => setModal(false)}>
                        <img src={require('../../assets/close.png')} alt="close" />
                    </MyButton>
                    <h1>Upload a .jpg or .png Cat Image</h1>
                    <h3>Any uploads must comply with the
                        <a href="https://thecatapi.com/privacy" target="_blank">upload guidelines</a>
                        or face deletion.
                    </h3>
                </MyModal>
            </div>
            <div className={classes.grid_container}>
                <div className={classes.div1}></div>
                <div className={classes.div2}></div>
                <div className={classes.div3}></div>
                <div className={classes.div4}></div>
                <div className={classes.div5}></div>
            </div>
        </section>
    );
};

export default Gallery;