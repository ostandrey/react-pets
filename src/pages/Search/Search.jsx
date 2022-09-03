import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import {getPageCount} from "../../utils/pages";
import classes from "./Search.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MyButton from "../../components/UI/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import BreedsList from "../../components/BreedsList/BreedsList";
import Pagination from "../../components/UI/pagination/Pagination";
import {useLocation} from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const [breeds, setBreeds] = useState([]);
    const [breedsImages, setBreedsImages] = useState([]);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const [fetchBreeds, isBreedsLoading, breedError] = useFetching(async (name) => {
        const response = await DogService.getBreedsByName(name);
        setBreeds(response.data);
    });

    const [fetchImageById, isBreedImageLoading, breedImageError] = useFetching(async (image_id) => {
        let breedImage = await DogService.getImageById(image_id);
        setBreedsImages((initialImages) => [...initialImages, breedImage.data]);
    });

    useEffect(() => {
        fetchBreeds(location.state.searchData);
    }, [location])

    useEffect(() => {
        breeds.forEach(breed => {
            if(breed.reference_image_id) {
                fetchImageById(breed.reference_image_id)
            }
        })
        setBreedsImages([])
    }, [breeds])

    // const filteredBreeds = useMemo(() => {
    //     if(selectedBreeds === "" || selectedBreeds === "All dogs") {
    //         return breeds
    //     }
    //     return breedNames.filter(breedName => breedName.name.toLowerCase().includes(selectedBreeds.toLowerCase()));
    // }, [selectedBreeds, breeds, breedNames])
    //
    // const sortedAndFilteredBreeds = useMemo(() => {
    //     if(order === 'ASC') {
    //         return [...filteredBreeds].sort((a, b) => {
    //             return a["name"] > b["name"] ? 1 : -1
    //         });
    //     }
    //
    //     if(order === 'DSC') {
    //         return [...filteredBreeds].sort((a, b) => {
    //             return a["name"] > b["name"] ? -1 : 1
    //         });
    //     }
    //
    //     return filteredBreeds;
    // }, [filteredBreeds, order]);

    // const changePage = (page) => {
    //     setPage(page)
    // }

    // const searchedDogs = useMemo(() => {
    //     return dogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()))
    // }, [searchQuery, dogs])

    return (

            <section className={classes.content_wrapper}>
                <Breadcrumb/>
                {isBreedImageLoading
                    ? <Loader/>
                    :
                    <>
                        <div className={classes.grid_container}>
                            {
                                breedsImages.length ?
                                    breedsImages.map(item =>
                                    <div className={classes.container} key={item.id}
                                        // onMouseOver={() => handleMouseOver(item.id)}
                                        // onMouseOut={handleMouseOut}
                                    >
                                        {
                                            <img
                                                src={`${item.url}`}
                                                alt="breed"
                                                className={classes.image}
                                            />
                                        }
                                        {/*{isHovering === item.id && (*/}
                                        {/*    <div className={classes.container_hover}*/}
                                        {/*         onClick={() => setImageId(item.id)}*/}
                                        {/*    >*/}
                                        {/*        <div className={classes.name_hover}>*/}
                                        {/*            <img src={require('../../assets/heart.png')} alt="favourite" />*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                    </div>
                                ) : <div className={classes.noItem}>No items found</div>
                            }
                            {
                                breedImageError && <h1>Error(</h1>
                            }
                        </div>
                        {/*{*/}
                        {/*    breedsImages.length === 0 && <div className={classes.noItem}>No items found</div>*/}
                        {/*}*/}
                    </>

                }
                {/*{isBreedsLoading*/}
                {/*    ? <Loader/>*/}
                {/*    :*/}
                {/*    <div className={classes.grid_container}>*/}
                {/*        {*/}
                {/*            breedError && <h1>Error(</h1>*/}
                {/*        }*/}
                {/*        <BreedsList breeds={breeds}/>*/}
                {/*    </div>*/}
                {/*}*/}
                {/*<Pagination*/}
                {/*    totalPages={totalPages}*/}
                {/*    changePage={changePage}*/}
                {/*/>*/}
            </section>
    );
};

export default Search;