import React, {useEffect, useRef, useState} from 'react';
import classes from "./Gallery.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MyButton from "../../components/UI/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import {logDOM} from "@testing-library/react";

const Gallery = () => {
    const [modal, setModal] = useState(false);

    const [file, setFile] = useState(null);
    const [dataFile, setDataFile] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(file)
        const formData  = new FormData();
        formData.append('file', file)
        setDataFile(formData)
    }

    useEffect(() => {
        fetchLikes(dataFile)
    }, [dataFile])

    const [fetchLikes, isLikesLoading, likesError] = useFetching(async (file) => {
        await DogService.uploadImage(file);
    });

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
                    <form method="post" action="#" onSubmit={onSubmit}>
                        <div className={classes.files}>
                            <input type="file" multiple='' onChange={e => setFile(e.target.files[0])}/>
                            {
                                file && <img src={URL.createObjectURL(file)}/>
                            }
                        </div>
                        {
                            !file && <p>No file selected</p>
                        }
                        {
                            file && <>
                                <h3>Image File Name: {file.name}</h3>
                                <MyButton className={classes.upload_btn}>Upload photo</MyButton>
                            </>
                        }
                    </form>
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