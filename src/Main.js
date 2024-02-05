import React from "react";
import { useState, useEffect } from "react";
import test from "./test";
import test2 from "./test";

export default function Main({animu, toggle}) {
    if (toggle === 'anime') {
    return (
        <>
            <div className="flex flex-col items-center gap-6 w-full mx-auto font-comfortaa py-7 px-5">
            <h2 className="text-3xl font-black border-b-2">{animu.title}</h2>
            <div className="flex flex-col items-center gap-10">
                <div className="flex md:justify-center md:flex-row flex-col items-center flex-wrap w-full gap-10">
                    <div className="border-2 rounded-xl p-2">
                            {/* <h2>{animu.title_japanese}</h2> */}
                            <img className="w-full object-contain md:w-fit rounded-xl md:h-[30rem]" src={animu.images.jpg.large_image_url}></img>
                        </div>
                    <div className="flex flex-col items-center px-3">
                        <div className="flex flex-col border-2 gap-6 p-2 rounded-lg flex-wrap">
                            <div className="w-full h-24 bg-gray-900 text-white rounded-lg p-2 flex flex-col justify-evenly">
                                <h3 className="text-2xl">Information</h3>
                                <p className="text-sm"> All stats from <a className="font-bold text-lg hover:text-blue-600" href="https://myanimelist.net/">MAL</a></p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex flex-col gap-4 bg-blue-200 rounded-md px-2 py-2 h-fit">
                                    <p className="text-lg font-bold">Score</p>
                                    <p className="text-2xl sm:text-3xl font-black">{animu.score}</p>
                                    <p className="text-xs">{animu.scored_by} reviews</p>
                                </div>
                                <div className="flex flex-col justify-evenly w-full sm:w-fit bg-blue-200 rounded-md px-2 py-2">
                                    <p className="text-xl font-bold">Alternate Titles</p>
                                    <div className="flex gap-2 w-full sm:flex-nowrap flex-wrap sm:w-[30rem] overflow-x-auto scroll py-1">
                                        {animu.titles.map((title) => {
                                        return (
                                            <p className="bg-gray-800 rounded-lg text-white p-1 sm:whitespace-nowrap">{title.title}</p>
                                        )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Type</p>
                                    <p>{animu.type}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Episodes</p>
                                    <p>{animu.episodes}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Status</p>
                                    <p>{animu.status}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Aired</p>
                                    <p>{animu.aired.string}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Length</p>
                                    <p>{animu.duration}</p>
                                </div>
                            </div>
                            <div className="flex gap-6 flex-col md:flex-row">
                                <div className="bg-blue-200 rounded-md p-2 flex flex-col justify-evenly h-fit sm:h-24">                  
                                    <p className="text-xl font-bold">Genres</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {animu.genres.map((genre) => {
                                            return (
                                                <p className="bg-gray-800 rounded-lg text-white p-1">{genre.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2 flex flex-col justify-evenly w-full md:w-fit">
                                    <p className="text-xl font-bold">Studio</p>
                                    <div className="flex gap-2">
                                        {animu.studios.map((studio) => {
                                        return (
                                            <p className="bg-gray-800 rounded-lg text-white p-1">{studio.name}</p>
                                        )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {animu.trailer.embed_url &&
                    <div className="border-2 p-2 rounded-lg hidden sm:block">
                        <div className="bg-black text-white p-4 flex flex-col gap-2 rounded-lg">
                            <p className="text-2xl font-bold">Trailer</p>
                            <iframe className="mx-auto" width="350" height="400" src={animu.trailer.embed_url} title="YouTube video player" allow="captions; clipboard-write; encrypted-media; gyroscope; " allowFullScreen></iframe>
                        </div>
                    </div>}
                </div>
                <div className="border-2 w-full md:max-w-[65.5rem] p-2 rounded-lg mx-auto">
                    <div className="bg-gray-900 text-white p-4 flex flex-col gap-2 rounded-lg">
                        <p className="text-2xl font-bold">Synopsis</p>
                        <p>{animu.synopsis? animu.synopsis : 'N/A'}</p>
                    </div>
                </div>
                <div className="border-2 max-w-[65.5rem] p-2 rounded-lg mx-auto">
                    <div className="bg-blue-200 text-black p-4 flex flex-col gap-2 rounded-lg">
                        <p className="text-3xl">Background</p>
                        <p>{animu.background? animu.background : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="w-full sm:h-fit bg-slate-900">
                    <p className="w-full sm:w-fit p-4 mx-auto text-white">*All stats and information are from <a className="font-bold hover:text-blue-500" href="https://myanimelist.net/">MyAnimeList</a>*</p>
            </div>
        </>
    )
    } else {
        return (
        <>
            <div className="flex flex-col items-center gap-6 w-full mx-auto font-comfortaa py-7 px-5">
            <h2 className="text-3xl font-black border-b-2">{animu.title}</h2>
            <div className="flex flex-col items-center gap-10 flex-wrap">
                <div className="flex lg:justify-center:justify-evenly md:justify-center md:flex-row flex-col items-center flex-wrap w-full gap-10">
                    <div className="border-2 rounded-xl p-2">
                            <img className="object-cover h-full w-full md:w-fit rounded-xl md:h-[30rem]" src={animu.images.jpg.large_image_url}></img>
                        </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col border-2 w-full sm:w-fit gap-6 p-2 rounded-lg flex-wrap ">
                            <div className="w-full h-24 bg-gray-900 text-white rounded-lg p-2 flex flex-col justify-evenly">
                                    <h3 className="text-2xl">Information</h3>
                                    <p className="text-sm"> All stats from <a className="font-bold text-lg hover:text-blue-600" href="https://myanimelist.net/">MAL</a></p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex flex-col gap-4 bg-blue-200 rounded-md px-2 py-2 h-fit">
                                        <p className="text-lg font-bold">Score</p>
                                        <p className="text-3xl font-black">{animu.score}</p>
                                        <p className="text-xs">{animu.scored_by} reviews</p>
                                    </div>
                                    <div className="flex flex-col justify-evenly w-full sm:w-fit bg-blue-200 rounded-md px-2 py-2">
                                        <p className="text-xl font-bold">Alternate Titles</p>
                                        <div className="flex gap-2 w-full sm:w-[30rem] overflow-x-auto flex-wrap sm:flex-nowrap scroll py-1">
                                            {animu.titles.map((title) => {
                                            return (
                                                <p className="bg-gray-800 rounded-lg text-white p-1 sm:whitespace-nowrap">{title.title}</p>
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            <div className="flex gap-4 flex-wrap">
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Type</p>
                                    <p>{animu.type}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Chapters</p>
                                    <p>{animu.chapters ? animu.chapters : 'Unknown'}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Volumes</p>
                                    <p>{animu.volumes ? animu.volumes : 'Unknown'}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Status</p>
                                    <p>{animu.status}</p>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2">
                                    <p className="text-xl font-bold">Published</p>
                                    <p>{animu.published.string}</p>
                                </div>
                            </div>
                            <div className="flex gap-6 flex-wrap">
                                <div className="bg-blue-200 rounded-md p-2 flex flex-col justify-evenly h-fit sm:h-24">                  
                                    <p className="text-xl font-bold">Genres</p>
                                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                                        {animu.genres.map((genre) => {
                                            return (
                                                <p className="bg-gray-800 rounded-lg text-white p-1">{genre.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="bg-blue-200 rounded-md p-2 flex flex-col justify-evenly">
                                    <p className="text-xl font-bold">Author</p>
                                    <div className="flex gap-2">
                                        {animu.authors.map((author) => {
                                        return (
                                            <p className="bg-gray-800 rounded-lg text-white p-1">{author.name}</p>
                                        )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 w-full md:max-w-[65.5rem] p-2 rounded-lg mx-auto">
                    <div className="bg-gray-900 text-white p-4 flex flex-col gap-2 rounded-lg">
                        <p className="text-2xl font-bold">Synopsis</p>
                        <p>{animu.synopsis? animu.synopsis : 'N/A'}</p>
                    </div>
                </div>
                <div className="border-2 w-full md:max-w-[65.5rem] p-2 rounded-lg mx-auto">
                    <div className="bg-blue-200 text-black p-4 flex flex-col gap-2 rounded-lg">
                        <p className="text-3xl">Background</p>
                        <p>{animu.background? animu.background : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="w-full h-fit bg-slate-900">
                    <p className="w-full p-4 mx-auto text-white text-center">*All stats and information are from <a className="font-bold hover:text-blue-500" href="https://myanimelist.net/">MyAnimeList</a>*</p>
            </div>
        </>
        )
    }
}
