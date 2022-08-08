import React, {useEffect, useState} from 'react';
import classes from './Voting.module.css'
import ReactionList from "../../components/ReactionList/ReactionList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import MyButton from "../../components/UI/MyButton";

const Voting = () => {
    const [dog, setRandomDog] = useState([]);
    const [imageId, setImageId] = useState('');
    const [voteValue, setVoteValue] = useState(null);

    const [fetchRandomDog, isRandomDogLoading, randomDogError] = useFetching(async () => {
        const randomDog = await DogService.getRandomBreed();
        setRandomDog(randomDog.data);
    });

    const [fetchFavourites, isFavouritesLoading, favouritesError] = useFetching(async () => {
        await DogService.saveFavorite(imageId);
    });

    const [createVote, isVoteLoading, voteError] = useFetching(async () => {
        await DogService.createVote(imageId, voteValue);
    });

    const voteItem = (value, image_id) => {
        setImageId(image_id);
        switch (value) {
            case 'like':
                setVoteValue(1);
                break;
            case 'dislike':
                setVoteValue(2);
                break;
            default: return
        }
    }

    useEffect(() => {
        fetchRandomDog();
        if(imageId && !voteValue) {
            fetchFavourites()
        }
        if(imageId && voteValue) {
            createVote()
        }
    }, [imageId, voteValue])

    if(!dog.length) {
        return(
            <img src={require('../../assets/not-found-image.png')} alt='not found'/>
        )
    }

    return (
        <div className={classes.container}>
            <section className={classes.content_wrapper}>
                <Breadcrumb/>
                <div className={classes.content}>
                    {
                        randomDogError && <h1>Error(</h1>
                    }
                    {
                        isRandomDogLoading
                            ? <Loader/>
                            : <img src={dog[0].url} alt='dog' className={classes.content_image}/>
                    }
                    <div className={classes.reaction_group_btn}>
                        <img
                            className={[classes.reaction_btn, classes.btn_smiley].join(' ')}
                            src={require("../../assets/smiley-white.png")} alt="good smiley"
                            onClick={() => voteItem('like', dog[0].id)}
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_heart].join(' ')}
                            src={require("../../assets/heart-white.png")} alt="heart"
                            onClick={() => setImageId(dog[0].id)}
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_bad_smiley].join(' ')}
                            src={require("../../assets/bad-smiley-white.png")} alt="bad smiley"
                            onClick={() => voteItem('dislike', dog[0].id)}
                        />
                    </div>
                </div>
                <ReactionList/>
            </section>
        </div>
    );
};

export default Voting;