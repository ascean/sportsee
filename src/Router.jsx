import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import User from './pages/User/User';

const Router = () => {
    return (
        <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<User />} />
                {/* <Route path="/user/:id"
                    element={<User datas={userDatas} />} />  */}
                {/* <Route path ="*" element = {<Error />} />     */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;