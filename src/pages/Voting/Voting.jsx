import React, {useEffect, useState} from 'react';
import classes from './Voting.module.scss'
import ReactionList from "../../components/ReactionList/ReactionList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import Container from "../../components/UI/container/Container";

const Voting = () => {
    const [dog, setRandomDog] = useState([]);
    const [votes, setVotes] = useState([]);
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

    const [fetchVotes, isVotesLoading, votesError] = useFetching(async () => {
        const votes = await DogService.getVotes();
        setVotes(votes.data);
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
        if(imageId && (voteValue !== 1 || voteValue !== 2)) {
            fetchFavourites()
        }
        if(imageId && voteValue) {
            createVote()
        }
        fetchVotes();
    }, [imageId, voteValue])

    if(!dog.length) {
        return(
            <img src={require('../../assets/not-found-image.png')} alt='not found'/>
        )
    }

    return (
            <Container>
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
                            onClick={() =>  voteItem('favourite', dog[0].id)}
                        />
                        <img
                            className={[classes.reaction_btn, classes.btn_bad_smiley].join(' ')}
                            src={require("../../assets/bad-smiley-white.png")} alt="bad smiley"
                            onClick={() => voteItem('dislike', dog[0].id)}
                        />
                    </div>
                </div>
                {
                    votesError && <h1>Error(</h1>
                }
                {
                    isVotesLoading
                    ? <Loader/>
                        : <ReactionList
                            votes={votes}
                            voteValue={voteValue}
                        />
                }
            </Container>
    );
};

export default Voting;