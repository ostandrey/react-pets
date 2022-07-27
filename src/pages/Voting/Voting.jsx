import React, {useEffect, useState} from 'react';
import classes from './Voting.module.css'
import Header from "../../components/Header/Header";
import ReactionList from "../../components/ReactionList/ReactionList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";

const Voting = () => {
    const [breed, setBreed] = useState([]);
    const [votes, setVotes] = useState([])
    const [isBreedsLoading, setIsBreedsLoading] = useState(false);

    useEffect(() => {
        fetchRandomBreed();
        // fetchDogVotes();
    }, [])

    async function fetchRandomBreed() {
        setIsBreedsLoading(true);
        const breed = await DogService.getBreedRandom();
        setBreed(breed.data);
        setIsBreedsLoading(false);
    }

    async function fetchBreedVotes() {
        setIsBreedsLoading(true);
        const votes = await DogService.getBreedVotes();
        setVotes(votes.data);
        setIsBreedsLoading(false);
    }

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
                        isBreedsLoading
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