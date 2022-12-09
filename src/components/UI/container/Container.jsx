import React from 'react';
import classes from "./Container.module.scss";

const Container = ({children, ...props}) => {
    return (
        <main className={classes.container}>
            {children}
        </main>
    );
};

export default Container;