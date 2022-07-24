import React, {useEffect, useMemo, useState} from 'react';
import Header from "../components/Header/Header";
import classes from "./Breeds.module.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrmb";
import DogService from "../API/DogService";
import BreedsList from "../components/BreedsList/BreedsList";
import MyButton from "../components/UI/MyButton";

const Breeds = () => {
    const [dogs, setDogs] = useState([]);
    const [selectedDogs, setSelectedDogs] = useState('');
    const [filteredDogs, setFilteredDogs] = useState('');
    const [order, setOrder] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchDogs();
        fetchDogsByName(selectedDogs);
    }, [selectedDogs])

    async function fetchDogs() {
        const dogs = await DogService.getAllDogs();
        setDogs(dogs)
    }

    async function fetchDogsByName(selectedDogs) {
        console.log(selectedDogs)
        const dogs = await DogService.getDogsByName(selectedDogs);
        setFilteredDogs(dogs)
    }

    const sortedAndFilteredDogs = useMemo(() => {
        if(order === 'ASC') {
            return [...filteredDogs].sort((a, b) => {
                return a["name"] > b["name"] ? 1 : -1
            });
        }

        if(order === 'DSC') {
            return [...filteredDogs].sort((a, b) => {
                return a["name"] > b["name"] ? -1 : 1
            });
        }

        return filteredDogs;
    }, [filteredDogs, order]);

    // const sortedAndSelectedDogs = useMemo(() => {
    //     return sortedDogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()))
    // }, [searchQuery, sortedDogs])

    return (
        <div>
            <Header
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <section className={classes.content_wrapper}>
                <div className={classes.control_panel}>
                    <Breadcrumb/>
                    <select
                        value={selectedDogs}
                        onChange={e => setSelectedDogs(e.target.value)}
                        className={classes.select}>
                        <option value="alldogs">All dogs</option>
                        {
                            dogs.map((dogName) =>
                                <option value={dogName.name}>{dogName.name}</option>
                            )
                        }
                    </select>
                    <select name="" id="" className={[classes.select, classes.select_limit].join(' ')}>
                        Limit: 10
                    </select>
                    <MyButton className={classes.sorting_btn}>
                        <img
                            onClick={() => setOrder('DSC')}
                            src={require('../assets/ascending.png')}
                            alt="ascending"
                        />
                    </MyButton>
                    <MyButton className={classes.sorting_btn}>
                        <img
                            onClick={() => setOrder('ASC')}
                            src={require('../assets/descending.png')}
                            alt="descending"
                        />
                    </MyButton>
                </div>
                <div className={classes.grid_container}>
                    {
                        sortedAndFilteredDogs.length !== 0
                            ? <BreedsList dogs={sortedAndFilteredDogs}/>
                            : <div>No item found</div>
                    }
                </div>
            </section>
        </div>
    );
};

export default Breeds;