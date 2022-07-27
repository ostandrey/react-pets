import React from 'react';
import BreedItem from "../BreedItem/BreedItem";

const BreedsList = ({breeds}) => {

    if(!breeds) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
        )
    }

    return (
        <>
            {
                breeds.map(breed =>
                    <BreedItem breed={breed} key={breed.id}/>
                )
            }
        </>
    );
};

export default BreedsList;