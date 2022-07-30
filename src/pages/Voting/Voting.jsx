import React, {useEffect, useState} from 'react';
import classes from './Voting.module.css'
import Header from "../../components/Header/Header";
import ReactionList from "../../components/ReactionList/ReactionList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";

const Voting = () => {
    const [breed, setRandomBreed] = useState([]);
    // const [votes, setVotes] = useState([]);

    const [fetchRandomBreed, isRandomBreedLoading, randomBreedError] = useFetching(async () => {
        const randomBreed = await DogService.getRandomBreed();
        setRandomBreed(randomBreed.data);
    });

    useEffect(() => {
        fetchRandomBreed();
        // fetchDogVotes();
    }, [])

    // async function fetchBreedVotes() {
    //     setIsBreedsLoading(true);
    //     const votes = await DogService.getBreedVotes();
    //     setVotes(votes.data);
    //     setIsBreedsLoading(false);
    // }

    if(!breed.length) {
        return(
            <img src={require('../../assets/not-found-image.png')} alt='not found'/>
        )
    }

    return (
        <div className={classes.container}>
            <Header/>
            <section className={classes.content_wrapper}>
                <Breadcrumb/>
                <div className={classes.content}>
                    {
                        randomBreedError && <h1>Error(</h1>
                    }
                    {
                        isRandomBreedLoading
                            ? <Loader/>
                            : <img src={breed[0].url} alt='dog' className={classes.content_image}/>
                    }
                    <div className={classes.reaction_group_btn}>
                        <img
                            className={[classes.reaction_btn, classes.btn_smiley].join(' ')}
                            src={require("../../assets/smiley-white.png")} alt="good smiley"
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_heart].join(' ')}
                            src={require("../../assets/heart-white.png")} alt="heart"
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_bad_smiley].join(' ')}
                            src={require("../../assets/bad-smiley-white.png")} alt="bad smiley"
                        />
                    </div>
                </div>
                <ReactionList/>
            </section>
        </div>
    );
};

export default Voting;