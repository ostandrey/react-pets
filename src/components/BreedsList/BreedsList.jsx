import React from 'react';
import BreedItem from "../BreedItem/BreedItem";
import classes from "../BreedItem/BreedsItem.module.css";

const BreedsList = ({dogs}) => {

    if(!dogs) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
        )
    }

    return (
        <>
            {
                dogs.map(dog =>
                    // <div className={classes.container}>
                    //     {/*{dog.name}*/}
                    //     <img src={require(dog.image.url)} alt="dog" className={classes.image}/>
                    // </div>
                    <BreedItem dog={dog} key={dog.id}/>
                )
            }
        </>
    );
};

export default BreedsList;