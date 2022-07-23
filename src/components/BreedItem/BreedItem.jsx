import React from 'react';
import classes from "../../pages/Breeds.module.css";

const BreedItem = (props) => {
    return (
        <>
            <img key={props.dog.id}  src={props.dog.image.url} alt="image"/>
            {/*<div className={classes.div1}>*/}
            {/*    */}
            {/*</div>*/}
            {/*<div className={classes.div2}></div>*/}
            {/*<div className={classes.div3}></div>*/}
            {/*<div className={classes.div4}></div>*/}
            {/*<div className={classes.div5}></div>*/}
        </>
    );
};

export default BreedItem;