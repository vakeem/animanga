import React from "react";
import Search from "./Search";
import Main from "./Main";
import { useState } from "react";

export default function Home({display, setDisplay}) {
    const [animu, setAnimu] = useState('')
    const [toggle, setToggle] = useState('anime')

    if (!display) {
        return (
            <Search setAnimu={setAnimu} setDisplay={setDisplay} setToggle={setToggle} toggle={toggle}/>
        )
    } else {
        return (
            <Main animu={animu} toggle={toggle}/>
        )
    }
}

