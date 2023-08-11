import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

  
export default function Row({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((res) => { setMovies(res.data.results) })
    }, [fetchURL]
    )

    
    const slideLeft = () =>{ 
        let slider = document.getElementById('slider' +rowID)
        slider.scrollLeft = slider.scrollLeft - 500 
        
    }

    
    const slideRight = () =>{ 
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }



    return (
        <div>
            <h1 className='text-white font-bold md:text-xl p-4 mx-auto'>{title}</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white absolute opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 group-hover:block hidden left-0'/>
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map(
                        (item, id) => (
                            <Movie item={item} key={id}/>  
                        )
                    )}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white absolute opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 group-hover:block hidden right-0'/>
            </div>
        </div>
    )
}
