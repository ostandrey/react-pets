import React, {useEffect, useMemo, useState} from 'react';
import Header from "../../components/Header/Header";
import classes from "./Breeds.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import BreedsList from "../../components/BreedsList/BreedsList";
import MyButton from "../../components/UI/MyButton";
import Loader from "../../components/UI/Loader/Loader";

const Breeds = () => {
    const [dogs, setDogs] = useState([]);
    const [selectedDogs, setSelectedDogs] = useState('');
    const [filteredDogs, setFilteredDogs] = useState('');
    const [order, setOrder] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDogsLoading, setIsDogsLoading] = useState(false);

    useEffect(() => {
        fetchDogs();
        if(selectedDogs !== '') {
            fetchDogsByName(selectedDogs);
        }
    }, [selectedDogs])

    async function fetchDogs() {
        setIsDogsLoading(true);
        const dogs = await DogService.getAllDogs();
        setDogs(dogs.data);
        setFilteredDogs(dogs.data);
        setIsDogsLoading(false);
    }

    async function fetchDogsByName(selectedDogs) {
        setIsDogsLoading(true);
        let dogs = await DogService.getDogsByName(selectedDogs);
        if(selectedDogs === 'All dogs') {
            dogs = await DogService.getAllDogs();
        }
        setDogs(dogs.data);
        setIsDogsLoading(false);
    }

    const sortedAndFilteredDogs = useMemo(() => {
        if(order === 'ASC') {
            return [...dogs].sort((a, b) => {
                return a["name"] > b["name"] ? 1 : -1
            });
        }

        if(order === 'DSC') {
            return [...dogs].sort((a, b) => {
                return a["name"] > b["name"] ? -1 : 1
            });
        }

        return dogs;
    }, [dogs, order]);

    // const searchedDogs = useMemo(() => {
    //     return dogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()))
    // }, [searchQuery, dogs])

    return (
        <div>
            <Header
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <section className={classes.content_wrapper}>
                {isDogsLoading
                    ? <Loader/>
                    : <>
                        <div className={classes.control_panel}>
                            <Breadcrumb/>
                            <select
                                value={selectedDogs}
                                onChange={e => setSelectedDogs(e.target.value)}
                                className={classes.select}>
                                <option value="All dogs">All dogs</option>
                                {
                                    filteredDogs && filteredDogs.map((dogName) =>
                                        <option value={dogName.name}>{dogName.name}</option>
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
                            <BreedsList dogs={sortedAndFilteredDogs}/>
                        </div>
                    </>
                }
            </section>
        </div>
    );
};

export default Breeds;