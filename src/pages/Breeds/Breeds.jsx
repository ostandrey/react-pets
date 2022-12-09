import React, {useEffect, useMemo, useState} from 'react';
import classes from "./Breeds.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DogService from "../../API/DogService";
import BreedsList from "../../components/BreedsList/BreedsList";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from '../../hooks/useFetching'
import {getPageCount} from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";
import Container from "../../components/UI/container/Container";

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [breedNames, setBreedNames] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState('');
    const [order, setOrder] = useState('');

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const [fetchBreeds, isBreedsLoading, breedError] = useFetching(async (limit, page) => {
        const response = await DogService.getAllBreeds(limit, page);
        setBreeds(response.data);
        const totalCount = response.headers['pagination-count']
        setTotalPages(getPageCount(totalCount, limit));
    });

    const [fetchBreedNames, isBreedNamesLoading, breedNamesError] = useFetching(async () => {
        const response = await DogService.getAllBreeds();
        setBreedNames(response.data);
    });

    useEffect(() => {
        fetchBreeds(limit, page);
        fetchBreedNames();
    }, [limit, page])

    const filteredBreeds = useMemo(() => {
        if(selectedBreeds === "" || selectedBreeds === "All dogs") {
            return breeds
        }
        return breedNames.filter(breedName => breedName.name.toLowerCase().includes(selectedBreeds.toLowerCase()));
    }, [selectedBreeds, breeds, breedNames])

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

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <Container>
            <div className={classes.control_panel}>
                <Breadcrumb/>
                <div>
                    <select
                        value={selectedBreeds}
                        onChange={e => setSelectedBreeds(e.target.value)}
                        className={`select`}>
                        <option value="All dogs">All dogs</option>
                        {
                            breedNames.map((breedName) => <option value={breedName.name}>{breedName.name}</option>
                            )
                        }
                    </select>
                    <select
                        className={`select ${classes.select_limit}`}
                        value={limit}
                        onChange={e => setLimit(e.target.value)}
                    >
                        <option value={5}>Limit: 5</option>
                        <option value={10}>Limit: 10</option>
                        <option value={15}>Limit: 15</option>
                        <option value={20}>Limit: 20</option>
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
            </div>
            {isBreedsLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    {
                        breedError && <h1>Error(</h1>
                    }
                    <BreedsList breeds={sortedAndFilteredBreeds}/>
                </div>
            }
            <Pagination
                totalPages={totalPages}
                changePage={changePage}
            />
        </Container>
    );
};

export default Breeds;