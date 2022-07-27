import React, {useEffect, useState} from 'react';
import classes from "./Breadcrumb.module.css";
import MyButton from "../UI/MyButton";
import {useLocation, useNavigate, useParams} from 'react-router-dom'

const Breadcrumb = () => {
    const navigate = useNavigate();
    const params = useLocation();
    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() =>
        setBreadcrumb(params.pathname.split('/'))
    , [params])

    return (
        <div className={classes.breadcrumb_wrapper}>
            <MyButton className={classes.btn_back} onClick={() => navigate(-1)}>
                <img src={require("../../assets/arrow-back.png")} alt="Back"/>
            </MyButton>
            <span className={classes.breadcrumb}>
                {breadcrumb[1]}
            </span>
        </div>
    );
};

export default Breadcrumb;