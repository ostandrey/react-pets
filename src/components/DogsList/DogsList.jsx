import React from 'react';
import DogsListItem from "../DogsListItem/DogsListItem";

const DogsList = ({items}) => {

    if(!items) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts not found!</h1>
        )
    }

    return (
        <>
            {
                items.map(item =>
                    <DogsListItem item={item} key={item.id}/>
                )
            }
        </>
    );
};

export default DogsList;