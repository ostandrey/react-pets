import React from 'react';
import classes from "./BreedsItem.module.css";
import {useNavigate} from "react-router-dom";

const BreedItem = ({breed, ...props}) => {
    const router = useNavigate();

    return (
        <div className={classes.container} >
            {
                breed && <img
                    src={`${breed.image.url}`}
                    alt="breed"
                    className={classes.image}
                    onClick={() => router(`/breeds/${breed.name}`)}
                />
            }
        </div>
            // {/*<div className={classes.div2}></div>*/}
            // {/*<div className={classes.div3}></div>*/}
            // {/*<div className={classes.div4}></div>*/}
            // {/*<div className={classes.div5}></div>*/}

    );
};

export default BreedItem;