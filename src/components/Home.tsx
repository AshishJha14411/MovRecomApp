import  {useContext} from 'react'
import GenreCard from './GenreCard'
import MovieCard from './MovieCard'
import {VideosContext} from '../context/VideoContext'
import {GenresContext} from '../context/GenreContext'
import { GenreContext, VideoContext } from '../context/types';
const Home = () => {

  const {genreId, setGenreId} = useContext(GenresContext) as GenreContext
  
  const {setVideoId} = useContext(VideosContext) as VideoContext
  return (
    <div className='w-full'>
      <nav className='bg-[#000000] p-5 mb-[3rem] mx-[0] text-[#ffffff] cursor-pointer text-center text-[2rem]' onClick={() => {
        setGenreId(0)
        setVideoId("")
        }}>Home</nav>
      {genreId ? <MovieCard /> : <GenreCard />}
    </div>
  )
}

export default Home