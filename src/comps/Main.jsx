import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
export default function Main(props) {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(
        () => {
            axios.get(requests.requestPopular).then((res) => { setMovies(res.data.results) })
        }, []
    )
    console.log(movie)

    

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.tittle} className='w-full h-full object-cover' />
                <div className='absolute w-full top-[20%] md:p-8 p-4 '>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold '>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] ml:max-w-[50%] xl:max-w-[35%] text-gray-300'>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}
