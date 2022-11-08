import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Error from './pages/error/Error';
import User from './pages/user/User';

const Router = () => {
    return (
        <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<User />} />
                <Route path ="*" element = {<Error />} />    
            </Routes>
        </BrowserRouter>
    );
};

export default Router;