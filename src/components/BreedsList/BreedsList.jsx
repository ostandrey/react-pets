import React from 'react';
import BreedItem from "../BreedItem/BreedItem";

const BreedsList = ({dogs}) => {

    if(!dogs.length) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
        )
    }

    return (
        <>
            {
                dogs.map (dog =>
                    <BreedItem dog={dog} key={dog.id}/>
                )
            }
        </>
    );
};

export default BreedsList;