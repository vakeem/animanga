import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Home from "./Home";
import About from './About';
import { useState, useEffect } from "react";
import { HashRouter, Route, Routes, Outlet } from "react-router-dom";

export default function App() {
    const [display, setDisplay] = useState(false);

    return (
        <>
            <HashRouter>
                <div className="flex items-center justify-evenly font-comfortaa bg-gray-900 w-full p-4">
                    <h1 className="text-3xl text-white font-bold">Animu</h1>
                    <Navbar setDisplay={setDisplay}/>
                </div>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home setDisplay={setDisplay} display={display}/>} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </HashRouter>
            <Outlet />
        </>
    );
};