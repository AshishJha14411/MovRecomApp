import  {useContext} from 'react'
import GenreCard from './GenreCard';
import MovieCard from './MovieCard';
import {GenresContext} from '../context/GenreContext'
import { GenreContext } from '../context/types';
import logo from '../logo.png'
const Home = () => {
  /* Importing the Genre Context */
  const {genreId, setGenreId} = useContext(GenresContext) as GenreContext

  return (
    <div className='w-full'>
      <nav className='bg-[#000000] flex flex-row justify-start p-2 mb-[3rem] mx-[0] text-[#ffffff] cursor-pointer text-center text-[2rem]' onClick={() => {
        setGenreId(0)
        }}>
          <img src={logo} alt="nav-logo"  className='w-[10rem] p-2'/>
          <button className='ml-[35%] text-[#EC3D37]'>Home</button></nav>
        {/* Conditionally rendering GenreCard and MovieCard */}
      {genreId ? <MovieCard /> : <GenreCard />}
    </div>
  )
}

export default Home