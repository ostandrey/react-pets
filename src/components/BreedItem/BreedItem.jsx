import React from 'react';
import classes from "./BreedsItem.module.css";

const BreedItem = ({dog, ...props}) => {
    return (
        <>
            {/**/}
            <div className={classes.container}>
                {dog.name}
                {/*<img src={dog.image.url} alt="dog" className={classes.image}/>*/}
            </div>
            {/*<div className={classes.div2}></div>*/}
            {/*<div className={classes.div3}></div>*/}
            {/*<div className={classes.div4}></div>*/}
            {/*<div className={classes.div5}></div>*/}
        </>
    );
};

export default BreedItem;