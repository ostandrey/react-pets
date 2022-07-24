import React from 'react';
import BreedItem from "../BreedItem/BreedItem";

const BreedsList = ({dogs}) => {
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