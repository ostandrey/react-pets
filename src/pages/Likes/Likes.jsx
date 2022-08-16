import React, {useEffect, useState} from 'react';
import classes from "./Likes.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import DogsList from "../../components/DogsList/DogsList";

const Likes = () => {
    const [likes, setLikes] = useState(null);
    // const [likeImages, setImage] = useState(null);

    const [fetchLikes, isLikesLoading, likesError] = useFetching(async () => {
        const likes = await DogService.getSpecificVotes(1);
        setLikes(likes.data);
    });

    // const [fetchImageById, isBreedImageLoading, breedImageError] = useFetching(async () => {
    //     console.log(likes)
    //     const likeImages = await DogService.getImageById(likes.image_id);
    //     setImage(likeImages.data);
    // });

    useEffect(() => {
        fetchLikes()
    }, [])

    // useEffect(() => {
    //     if(likes !== null) {
    //         fetchImageById();
    //     }
    // }, [likes])
    //
    // console.log(likeImages)

    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
            </div>
            {isLikesLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    {
                        likesError && <h1>Error(</h1>
                    }
                    {
                        likes && likes.map(likedItem =>
                            <div>{likedItem.image_id}</div>
                        )
                    }
                    {/*<DogsList items={breedImage}/>*/}
                </div>
            }
        </section>
    );
};

export default Likes;