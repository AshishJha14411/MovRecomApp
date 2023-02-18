import React, {useContext, useEffect} from 'react'
import { MovieContext } from '../context/types';
import { MoviesContext } from '../context/MovieContext'
const MovieCard = () => {

  const {movieList, setMovieId} = useContext(MoviesContext) as MovieContext


  return ( 
    <section className="text-gray-600  body-font ">
      <div className="container flex flex-row flex-wrap px-5  py-24 mx-auto ">
       
        {movieList && movieList.map((item) => {
        return (
        <div className="flex flex-wrap xl:w-[30%] justify-center m-4" key={item.id}>
          <div className="xl:w-[100%]  md:w-1/2 p-4">
            <div className="bg-[#272a2c] cursor-pointer  p-2 h-[105%] rounded-lg" onClick={()=> {
              setMovieId(item.id);
              }}>
              <img className="h-40 rounded w-full object-cover object-center mb-6"  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="content" />
              <h3 className="tracking-widest text-[#ffffff] text-xs font-medium title-font">{item.title}</h3>
              <h2 className="text-lg text-[#2dada0] font-medium title-font mb-4" >{item.original_title}</h2>
              <p className="leading-relaxed text-[#a9d1c7] text-base">{item.overview}</p>
            </div>
          </div>          
        </div>
        )
      })}
      </div>
    </section>
  )
}

export default MovieCard