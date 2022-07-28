import React, {useState} from 'react';
import classes from "./BreedsItem.module.css";
import {useNavigate} from "react-router-dom";

const BreedItem = ({breed, ...props}) => {
    const router = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className={classes.container}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}>
            {
                breed && <img
                    src={`${breed.image.url}`}
                    alt="breed"
                    className={classes.image}
                    onClick={() => router(`/breeds/${breed.name}`)}
                />
            }
            {isHovering && (
                <div className={classes.container_hover}>
                    <div className={classes.name_hover}>{breed.name}</div>
                </div>
            )}
        </div>
            // {/*<div className={classes.div2}></div>*/}
            // {/*<div className={classes.div3}></div>*/}
            // {/*<div className={classes.div4}></div>*/}
            // {/*<div className={classes.div5}></div>*/}

    );
};

export default BreedItem;