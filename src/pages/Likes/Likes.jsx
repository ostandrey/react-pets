import React, {useEffect, useState} from 'react';
import classes from "./Likes.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import DogsList from "../../components/DogsList/DogsList";

const Likes = () => {
    const [likes, setLikes] = useState(null);

    const [fetchLikes, isLikesLoading, likesError] = useFetching(async () => {
        const likes = await DogService.getVotes();
        setLikes(likes.data.filter(like => like.value === 1));
    });

    useEffect(() => {
        fetchLikes()
    }, [])

    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
            </div>
            {isLikesLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    <DogsList items={likes}/>
                </div>
            }
        </section>
    );
};

export default Likes;