import React, {useEffect, useState} from 'react';
import classes from "./Dislikes.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useFetching} from "../../hooks/useFetching";
import DogService from "../../API/DogService";
import Loader from "../../components/UI/Loader/Loader";
import DogsList from "../../components/DogsList/DogsList";

const Dislikes = () => {
    const [dislikes, setDislikes] = useState(null);

    const [fetchDislikes, isDislikesLoading, dislikesError] = useFetching(async () => {
        const dislikes = await DogService.getVotes();
        setDislikes(dislikes.data.filter(dislike => dislike.value === 2));
    });

    useEffect(() => {
        fetchDislikes()
    }, [])

    return (
        <section className={classes.content_wrapper}>
            <div className={classes.control_panel}>
                <Breadcrumb/>
            </div>
            {isDislikesLoading
                ? <Loader/>
                :
                <div className={classes.grid_container}>
                    <DogsList items={dislikes}/>
                </div>
            }
        </section>
    );
};

export default Dislikes;