import  {useContext} from 'react'
import GenreCard from './GenreCard';
import MovieCard from './MovieCard';
import {GenresContext} from '../context/GenreContext'
import { GenreContext } from '../context/types';
const Home = () => {
  /* Importing the Genre Context */
  const {genreId, setGenreId} = useContext(GenresContext) as GenreContext

  return (
    <div className='w-full'>
      <nav className='bg-[#000000] p-5 mb-[3rem] mx-[0] text-[#ffffff] cursor-pointer text-center text-[2rem]' onClick={() => {
        setGenreId(0)
        }}>Home</nav>
        {/* Conditionally rendering GenreCard and MovieCard */}
      {genreId ? <MovieCard /> : <GenreCard />}
    </div>
  )
}

export default Home