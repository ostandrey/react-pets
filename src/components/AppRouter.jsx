import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Voting from "../pages/Voting/Voting";
import Breeds from "../pages/Breeds/Breeds";
import Gallery from "../pages/Gallery/Gallery";
import BreedIdPage from "../pages/BreedIdPage/BreedIdPage";
import Favourites from "../pages/Favourites/Favourites";
import Likes from "../pages/Likes/Likes";
import Dislikes from "../pages/Dislikes/Dislikes";
import Layout from "./Layout";
import Search from "../pages/Search/Search";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/home"  element={<Home />}/>
            <Route exact path='/' element={<Navigate replace to="/home" />}/>
            <Route exact path="/" element={<Layout />}>
                <Route index path='/voting' element={<Voting />}/>
                <Route exact path="/breeds"  element={<Breeds />}/>
                <Route exact path="/breeds/:name"  element={<BreedIdPage />}/>
                <Route exact path="/gallery"  element={<Gallery />}/>
                <Route path="/favourites" element={<Favourites />}/>
                <Route path="/likes" element={<Likes />}/>
                <Route path="/dislikes" element={<Dislikes />}/>
                <Route path="/search" element={<Search />}/>
                {/*<Route path="/error"  element={<Error />}/>*/}
            </Route>
        </Routes>
    );
};

export default AppRouter;