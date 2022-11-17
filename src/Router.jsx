import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Error from "./pages/Error/Error";
import Profile from "./pages/Profile/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
