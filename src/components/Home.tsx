import { useContext } from 'react'
import { MovieContext, MovieSearchContext, MovieList } from '../context/types';
import { MovieSearch } from '../context/MovieSearch';
import { MoviesContext } from '../context/MovieContext'
import { useState } from 'react';
const Home = () => {
  /* local state for switching between home data and searched data */
  const [homeData, setHomeData] = useState<MovieList[]>([])
  /*getting search data and status of the search from search context */
  const { searchData, search } = useContext(MovieSearch) as MovieSearchContext
  /* Changing the heading disclaimer text with respect to data being displayed */
  const [homeHeading, setHomeHeading] = useState<string>("")
  /* Changing the sub-heading disclaimer text with respect to data being displayed */
  const [homeSubHeading, setHomeSubHeading] = useState<string>("")
  /* calling now playing movie data and calling set states for single movie and movie id */
  const { nowPlaying, setSingleMovie, setMovieId } = useContext(MoviesContext) as MovieContext
  /* Casting a delay in switching the text data */
  setTimeout(() => {
    if (search) {
      setHomeData(searchData)
      setHomeHeading("Movie List you searched for")
      setHomeSubHeading("Some searched info dont have all the Data so it might not be present")
    } else {
      setHomeData(nowPlaying)
      setHomeHeading("Now Playing in Theaters")
      setHomeSubHeading("These are movies being played Right now in theaters according to TMDB")
    }
  })

  return (
    <div className='w-full p-[2rem] mx-auto background'>
      <h1 className='w-[100%] pl-[2rem] text-center pb-8 pt-[2rem] text-[#B5F1FA] font-semibold text-4xl '>{homeHeading}
      </h1>
      <p className='text-center text-[#B5F1FA] text-md'><sup className='font-extrabold text-[1rem]'>*</sup>{homeSubHeading}</p>
      <div className="container flex flex-row flex-wrap px-5  py-24 mx-auto ">
        {homeData && homeData.map((item) => {
          return (
            <div className="flex flex-wrap xl:w-[30%] md:w-[80%] lg:w-[40%] w-full mb-[3rem] justify-center mx-auto" key={item.id} onClick={() => {
              setSingleMovie([item]);
            }}>
              <div className="xl:w-[100%] w-full md:w-[100%]" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                backgroundSize: `cover`
              }}  >
                <div className="bg-[#001B41] cursor-pointer opacity-70 xl:opacity-0 p-4 transition-all ease-in-out duration-700 xl:hover:opacity-70 h-[15rem] rounded-lg" onClick={() => {
                  setMovieId(item.id);
                }}>
                  <div className=' opacity-100   xl:hover:opacity-100 xl:opacity-0 md-w-full z-30 transition w-full h-full'>
                    <p className="text-lg text-[#9BD0DC] font-medium text-center w-full title-font mb-4 pt-[2.5rem]" >{item.original_title}</p>
                    <p className="text-lg text-[#9BD0DC] font-medium text-center w-full title-font mb-4" >Release Date:  {item.release_date}</p>
                    <p className='text-lg text-[#9BD0DC] font-medium text-center w-full title-font mb-4'>Rating: {item.vote_average}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home