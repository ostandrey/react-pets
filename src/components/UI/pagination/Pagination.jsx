import React from 'react';
import MyButton from "../MyButton";
import classes from "../../../pages/Breeds/Breeds.module.css";
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, changePage}) => {
    const pagesArray = usePagination(totalPages)

    return (
        <div>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    key={p}
                    className={classes.sorting_btn}
                >
                    {p}
                </MyButton>
            )}
        </div>
    );
};

export default Pagination;