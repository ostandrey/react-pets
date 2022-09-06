import React, {useEffect, useState} from 'react';
import DogService from "../../API/DogService";
import {useParams} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./BreedIdPage.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useFetching} from "../../hooks/useFetching";

const BreedIdPage = () => {
    const params = useParams();
    const [breed, setBreed] = useState(null);
    const [breedImage, setImage] = useState(null);

    const [fetchBreedsByName, isBreedsByNameLoading, breedsByNameError] = useFetching(async () => {
        let breed = await DogService.getBreedsByName(params.name);
        setBreed(...breed.data);
    });

    const [fetchImageById, isBreedImageLoading, breedImageError] = useFetching(async () => {
        let breedImage = await DogService.getImageById(breed.reference_image_id);
        setImage(breedImage.data);
    });

    useEffect(() => {
        fetchBreedsByName();
    }, [])


    useEffect(() => {
        if(breed !== null) {
            fetchImageById();
        }
    }, [breed])

    if(!breed) {
        return (
            <h1 style={{textAlign: 'center'}}>No breed not found!</h1>
        )
    }

    return (
        <section className={classes.content_wrapper}>
            {
                breedsByNameError && <h1>Error (</h1>
            }
            {isBreedsByNameLoading
                ? <Loader/>
                : <>
                    <div className={classes.control_panel}>
                        <Breadcrumb/>
                        <div className={classes.breed_id}>{breed.id}</div>
                    </div>
                    <div>
                        {
                            breedImageError && <h1>Error (</h1>
                        }
                        {
                            isBreedImageLoading
                                ? <Loader/>
                                : breedImage && <img src={`${breedImage.url}`} alt="breed" className={classes.breed_image}/>
                        }
                        <div className={classes.breed_container}>
                            <div className={classes.breed_header}>
                                <h1 className={classes.breed_title}>{breed.name}</h1>
                                <h3 className={classes.breed_subtitle}>{breed.bred_for}</h3>
                            </div>
                            <div className={classes.breed_info}>
                                <div>
                                        <span>
                                            Temperament:<br/><p className={classes.breed_text}> {breed.temperament}</p>
                                        </span>
                                </div>
                                <div>
                                    {
                                        breed.origin ? <span>Origin: <p className={classes.breed_text}> {breed.origin}</p></span> : <p>Origin: -</p>
                                    }
                                    <br/>
                                    <span>
                                            Weight: <p className={classes.breed_text}> {breed.weight.metric}</p>
                                        </span>
                                    <br/>
                                    <span>
                                            Life span: <p className={classes.breed_text}> {breed.life_span}</p>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default BreedIdPage;