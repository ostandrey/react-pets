import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import classes from "./Breeds.module.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrmb";
import DogService from "../API/DogService";
import BreedItem from "../components/BreedItem/BreedItem";
import BreedsList from "../components/BreedsList/BreedsList";
import MyButton from "../components/UI/button/MyButton";

const Breeds = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchDogs()
    }, [])

    async function fetchDogs() {
        const dogs = await DogService.getAll();
        setDogs(dogs)
    }

    // if(!dogs.length) {
    //     return (
    //         <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
    //     )
    // }

    return (
        <div>
            <Header/>
            <section className={classes.content_wrapper}>
                <div className={classes.control_panel}>
                    <Breadcrumb/>
                    <select name="" id="" className={classes.select}>
                        options
                    </select>
                    <select name="" id="" className={[classes.select, classes.select_limit].join(' ')}>
                        Limit: 10
                    </select>
                    <MyButton className={classes.sorting_btn}>
                        <img src={require('../assets/ascending.png')} alt="ascending"/>
                    </MyButton>
                    <MyButton className={classes.sorting_btn}>
                        <img src={require('../assets/descending.png')} alt="descending"/>
                    </MyButton>
                </div>
                <div className={classes.grid_container}>
                    <BreedsList dogs={dogs}/>
                </div>
            </section>
        </div>
    );
};

export default Breeds;