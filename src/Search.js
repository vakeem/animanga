import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";

export default function Search({setAnimu, setDisplay, setToggle, toggle}) {
    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query) {
                find()
            } else if (query === '') {
                setList([])
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [query, toggle]);

    async function find() {
        let api = toggle === 'anime' ? `https://api.jikan.moe/v4/anime?sort_by=popularity&q=${query}` : `https://api.jikan.moe/v4/manga?sort_by=popularity&q=${query}`

        const response = await fetch(api);
    
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      
      const data = await response.json();
      console.log(data)
      setList(data.data.slice(0, 8))
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleClick(obj) {
        setAnimu(obj)
        setDisplay(true)
    }

    function handleToggle(s){
        setToggle(s)
    }

    return (
        <div className="h-full flex flex-col justify-between items-center">
            <div className="flex justify-center flex-col items-center w-fit mx-auto gap-2 p-2 -my-[10rem] md:-my-[5rem] text-center h-full">
                <div className="flex flex-col justify-center items-center gap-4">
                    <p class="text-3xl md:text-4xl font-black">Welcome to Animu!</p>
                    <p> Search up any Anime/Manga to get their information</p>
                </div>
                <div className="flex flex-col w-[80vw] sm:w-[20rem] md:w-[40rem] rounded-md border-2 text-sm md:text-md">
                    <input className={`h-9 px-4 text-xl border-0 w-full focus:outline-none`} type="text" placeholder="naruto" onChange={(e) => handleChange(e)} onFocus={setShow}></input>
                    <div className={`flex flex-col items-center w-inherit`}>
                        <div className={`flex flex-col w-[80vw] sm:w-[20rem] md:w-[40rem] gap-1 absolute border-2 rounded-md bg-white`}>
                        {show && list.map((obj) => {
                                return (
                                    <div className="hover:border hover:font-bold w-inherit group items-center flex flex-row-reverse justify-between gap-1 p-1 hover:cursor-pointer px-2" key={obj.mal_id} onClick={() => handleClick(obj)}>
                                        <i class="fa-solid fa-magnifying-glass text-gray-200 group-hover:text-black"></i>
                                        <p>{obj.title}</p>
                                        <img className="hidden group-hover:block h-24" src={obj.images.jpg.image_url}></img>
                                    </div>
                                )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 text-lg text-black">
                <div className={`${toggle === 'anime'? 'font-black text-xl': 'text-gray-400'} cursor-pointer p-2`} onClick={() => handleToggle('anime')}>Anime</div>
                <p className="text-xl font-black">|</p>
                <div className={`${toggle === 'manga'? 'font-black text-xl': 'text-gray-400'} cursor-pointer p-2`} onClick={() => handleToggle('manga')}>Manga</div>
            </div>
        </div>
    )
}


