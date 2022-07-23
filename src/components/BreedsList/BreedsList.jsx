import React from 'react';
import BreedItem from "../BreedItem/BreedItem";

const BreedsList = ({dogs}) => {
    return (
        <div>
            {
                dogs.map (dog =>
                    <BreedItem dog={dog} key={dog.id}/>
                )
            }
        </div>
    );
};

export default BreedsList;