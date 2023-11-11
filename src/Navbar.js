import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Navbar({setDisplay}) {

    function onClick() {
        setDisplay(false)
    }

    return(
        <nav className="text-white flex gap-1 md:gap-10 z-10">
            <Link className="hover:font-black p-4" to="/" onClick={onClick}>Home</Link>
            <Link className="hover:font-black p-4" to="/about">About</Link>
        </nav>
    )
}