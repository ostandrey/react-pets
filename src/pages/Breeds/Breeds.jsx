import React, {useEffect, useMemo, useState} from 'react';
import classes from "./Breeds.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import BreedsList from "../../components/BreedsList/BreedsList";
import MyButton from "../../components/UI/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from '../../hooks/useFetching'

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState('');
    const [order, setOrder] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [fetchBreeds, isBreedsLoading, breedError] = useFetching(async () => {
        const breeds = await DogService.getAllBreeds();
        setBreeds(breeds.data);
    });

    useEffect(() => {
        fetchBreeds();
    }, [])

    const filteredBreeds = useMemo(() => {
        if(selectedBreeds !== "All dogs") {
            return breeds.filter(breed => breed.name.toLowerCase().includes(selectedBreeds.toLowerCase()));
        }
        return breeds
    }, [selectedBreeds, breeds])

    const sortedAndFilteredBreeds = useMemo(() => {
        if(order === 'ASC') {
            return [...filteredBreeds].sort((a, b) => {
                return a["name"] > b["name"] ? 1 : -1
            });
        }

        if(order === 'DSC') {
            return [...filteredBreeds].sort((a, b) => {
                return a["name"] > b["name"] ? -1 : 1
            });
        }

        return filteredBreeds;
    }, [filteredBreeds, order]);

    // const searchedDogs = useMemo(() => {
    //     return dogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()))
    // }, [searchQuery, dogs])

    return (
        <div>
            {/*<Header*/}
            {/*    value={searchQuery}*/}
            {/*    onChange={e => setSearchQuery(e.target.value)}*/}
            {/*/>*/}
            <section className={classes.content_wrapper}>
                {isBreedsLoading
                    ? <Loader/>
                    : <>
                        <div className={classes.control_panel}>
                            <Breadcrumb/>
                            <select
                                value={selectedBreeds}
                                onChange={e => setSelectedBreeds(e.target.value)}
                                className={classes.select}>
                                <option value="All dogs">All dogs</option>
                                {
                                    breeds && breeds.map((breedName) =>
                                        <option value={breedName.name}>{breedName.name}</option>
                                    )
                                }
                            </select>
                            <select name="" id="" className={[classes.select, classes.select_limit].join(' ')}>
                                <option value="5">Limit: 5</option>
                                <option value="10">Limit: 10</option>
                                <option value="15">Limit: 15</option>
                                <option value="20">Limit: 20</option>
                            </select>
                            <MyButton className={classes.sorting_btn} onClick={() => setOrder('DSC')}>
                                <img
                                    src={require('../../assets/ascending.png')}
                                    alt="ascending"
                                />
                            </MyButton>
                            <MyButton className={classes.sorting_btn} onClick={() => setOrder('ASC')}>
                                <img
                                    src={require('../../assets/descending.png')}
                                    alt="descending"
                                />
                            </MyButton>
                        </div>
                        <div className={classes.grid_container}>
                            {
                                breedError && <h1>Error(</h1>
                            }
                            <BreedsList breeds={sortedAndFilteredBreeds}/>
                        </div>
                    </>
                }
            </section>
        </div>
    );
};

export default Breeds;