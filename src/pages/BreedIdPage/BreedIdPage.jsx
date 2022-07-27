import React, {useEffect, useState} from 'react';
import DogService from "../../API/DogService";
import {useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./BreedIdPage.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const BreedIdPage = () => {
    const params = useParams();
    const [breed, setBreed] = useState(null);
    const [breedImage, setImage] = useState(null);
    const [isBreedsLoading, setIsBreedsLoading] = useState(false);

    useEffect(() => {
        fetchBreedsByName();
        // if(breed !== null) {
        //     fetchImageById();
        // }
    }, [])


    useEffect(() => {
        if(breed !== null) {
            fetchImageById();
        }
    }, [breed])

    async function fetchBreedsByName() {
        setIsBreedsLoading(true);
        let breed = await DogService.getBreedsByName(params.name);
        setBreed(...breed.data);
        setIsBreedsLoading(false);
    }

    async function fetchImageById() {
        setIsBreedsLoading(true);
        let breedImage = await DogService.getImageById(breed.reference_image_id);
        setImage(breedImage.data);
        setIsBreedsLoading(false);
    }

    if(!breed) {
        return (
            <h1 style={{textAlign: 'center'}}>No breed not found!</h1>
        )
    }

    return (
        <div>
            <Header/>
            <section className={classes.content_wrapper}>
                {isBreedsLoading
                    ? <Loader/>
                    : <>
                        <div className={classes.control_panel}>
                            <Breadcrumb/>
                            <div className={classes.breed_id}>{breed.id}</div>
                        </div>
                        <div>
                            {
                                breedImage && <img src={`${breedImage.url}`} alt="breed" className={classes.breed_image}/>
                            }
                            <div className={classes.breed_info}>
                                <div>
                                    <h1>{breed.name}</h1>
                                    <h3>{breed.bred_for}</h3>
                                </div>
                                <div>
                                    <table>
                                        <td>
                                            <tr>Temperament: {breed.temperament}</tr>
                                        </td>
                                        <td>
                                            {
                                                breed.origin ? <tr>Origin: {breed.origin}</tr> : <tr>Origin: -</tr>
                                            }
                                            <tr>
                                                Weight: {breed.weight.metric}
                                            </tr>
                                            <tr>
                                                Life span: {breed.life_span}
                                            </tr>
                                        </td>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </section>
        </div>
    );
};

export default BreedIdPage;