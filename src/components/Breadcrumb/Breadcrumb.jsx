import React, {useEffect, useState} from 'react';
import classes from "./Breadcrumb.module.scss";
import MyButton from "../UI/MyButton";
import {useLocation, useNavigate, useParams} from 'react-router-dom'

const Breadcrumb = () => {
    const navigate = useNavigate();
    const params = useLocation();
    const [breadcrumb, setBreadcrumb] = useState('');

    useEffect(() =>
        setBreadcrumb(params.pathname.split('/')[1])
    , [params])

    return (
        <div className={classes.breadcrumb_wrapper}>
            <MyButton className={classes.btn_back} onClick={() => navigate(-1)}>
                <figure>
                    <img src={require("../../assets/arrow-back.png")} alt="Back"/>
                </figure>
            </MyButton>
            <span className={classes.breadcrumb}>
                {breadcrumb}
            </span>
        </div>
    );
};

export default Breadcrumb;