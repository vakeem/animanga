import React from "react"

export default function About() {
    return (
        <div className="flex flex-col items-center gap-5 mx-auto font-comfortaa py-7 px-5">
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">About</h2>
                <div className="bg-gray-900 text-white p-4 rounded-md">

                <p>This site is nothing more than a fun hobby project where the goal was to be able search any anime or manga and be provided relevant information. </p>
                <p>Animu is made using <a className="underline hover:text-blue-500" href="https://jikan.moe/">Jikan Api</a> with information sourced from <a className="hover:text-blue-500 underline" href="https://myanimelist.net/">MyAnimeList</a></p>
                </div>
            </div>
        </div>
    )
}