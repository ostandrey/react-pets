import React, {useState} from 'react';
import classes from "./DogsListItem.module.css";
import {useNavigate} from "react-router-dom";

const DogsListItem = ({item, ...props}) => {
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
             // onMouseOver={handleMouseOver}
             // onMouseOut={handleMouseOut}
        >
            {
                item && <img
                    src={`${item.image.url}`}
                    alt="breed"
                    className={classes.image}
                />
            }
            {/*{isHovering && (*/}
            {/*    <div className={classes.container_hover} onClick={() => router(`/breeds/${item.name}`)}>*/}
            {/*        <div className={classes.name_hover}>{item.name}</div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
        // {/*<div className={classes.div2}></div>*/}
        // {/*<div className={classes.div3}></div>*/}
        // {/*<div className={classes.div4}></div>*/}
        // {/*<div className={classes.div5}></div>*/}

    );
};

export default DogsListItem;