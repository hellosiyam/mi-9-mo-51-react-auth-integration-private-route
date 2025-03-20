import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;