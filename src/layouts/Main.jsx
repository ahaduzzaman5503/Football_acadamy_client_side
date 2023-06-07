import React from 'react';
import Navber from '../componants/Shared/Navber/Navber';
import Footer from '../componants/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../componants/Home/Home';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;