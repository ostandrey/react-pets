import React from 'react';
import MyButton from "../MyButton";
import classes from "./Pagination.module.css";
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, changePage}) => {
    const pagesArray = usePagination(totalPages)

    return (
        <div className={classes.container}>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    key={p}
                    className={classes.btn}
                >
                    {p}
                </MyButton>
            )}
        </div>
    );
};

export default Pagination;