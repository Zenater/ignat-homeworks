import React from 'react'
import Error404 from './pages/Error404';
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from './pages/PreJunior';
import {Junior} from './pages/Junior';
import {JuniorPlus} from './pages/JuniorPlus';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function ComponentsRoutes() {
    return (
        <div>
            <Routes>
                <Route  path={"/"} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default ComponentsRoutes
