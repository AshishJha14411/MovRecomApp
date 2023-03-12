import { useContext } from 'react'
import { MovieContext, MovieSearchContext, MovieList } from '../context/types';
import { MovieSearch } from '../context/MovieSearch';
import { MoviesContext } from '../context/MovieContext'
import { useState } from 'react';
const Home = () => {
  const [homeData, setHomeData] = useState<MovieList[]>([])
  const { searchData, search } = useContext(MovieSearch) as MovieSearchContext
  const [homeHeading, setHomeHeading] = useState<string>("")
  const [homeSubHeading, setHomeSubHeading] = useState<string>("")
  const { nowPlaying, setSingleMovie, setMovieId } = useContext(MoviesContext) as MovieContext
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
    <div className='w-full background'>
      <h1 className='w-[100%] pl-[2rem] text-center pb-8 pt-[2rem] text-[#0659AE] font-semibold text-4xl '>{homeHeading}
      </h1>
      <p className='text-center text-[#0659AE] text-md'><sup className='font-extrabold text-[1rem]'>*</sup>{homeSubHeading}</p>
      <div className="container flex flex-row flex-wrap px-5  py-24 mx-auto ">

        {homeData && homeData.map((item) => {
          return (
            <div className="flex flex-wrap xl:w-[30%] mb-[3rem] justify-center m-4" key={item.id} onClick={() => {
              setSingleMovie([item]);

            }}>
              <div className="xl:w-[100%]  md:w-1/2 " style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                  backgroundSize: `cover`
                }}  >
                <div className="bg-[#001B41] cursor-pointer opacity-0 p-4 transition-all ease-in-out duration-700 hover:opacity-70 h-[15rem] rounded-lg"  onClick={() => {
                  setMovieId(item.id);
                }}>
             <div  className=' opacity-0   hover:opacity-100 z-30 transition w-full h-full'>
                  <p className="text-lg text-[#9BD0DC] font-medium text-center w-[24rem] title-font mb-4 pt-[2.5rem]" >{item.original_title}</p>
                  <p className="text-lg text-[#9BD0DC] font-medium text-center w-[24rem] title-font mb-4" >Release Date:  {item.release_date}</p>
                  <p className='text-lg text-[#9BD0DC] font-medium text-center w-[24rem] title-font mb-4'>Rating: {item.vote_average}</p>
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