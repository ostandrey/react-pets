import React, {useEffect, useState} from 'react';
import classes from "./Favourites.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import DogsList from "../../components/DogsList/DogsList";
import Container from "../../components/UI/container/Container";

const Favourites = () => {
    const [favourites, setFavourites] = useState(null);

    const [fetchFavourites, isFavouritesLoading, favouritesError] = useFetching(async () => {
        const favourites = await DogService.getFavorites();
        setFavourites(favourites.data);
    });

    useEffect(() => {
        fetchFavourites()
    }, [])

    return (
        <Container>
            <div className={classes.control_panel}>
                <Breadcrumb/>
            </div>
            {isFavouritesLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    {
                        favouritesError && <h1>Error(</h1>
                    }
                    <DogsList items={favourites}/>
                </div>
            }
        </Container>
    );
};

export default Favourites;