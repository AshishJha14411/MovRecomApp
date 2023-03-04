import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VideosContext } from '../context/VideoContext'
import { GenresContext } from '../context/GenreContext'
import { MovieSearch } from '../context/MovieSearch'
import { GenreContext, VideoContext, MovieSearchContext, MovieContext } from '../context/types';
import logo from '../assets/logo-no-background.png'
import { MoviesContext } from '../context/MovieContext'
const Navbar = () => {
  const {setGenreId } = useContext(GenresContext) as GenreContext
  const { setSearch, setQuery, query, setSearchData } = useContext(MovieSearch) as MovieSearchContext
  const { setVideoId } = useContext(VideosContext) as VideoContext
  const { setShowTrend, setSingleMovie } = useContext(MoviesContext) as MovieContext
  return (
    <nav className='bg-[#04070D] flex flex-row flex-wrap justify-start p-5 mx-[0]  text-[#0659AE]  text-center ' >
      <img src={logo} alt="nav-logo" className='w-[10rem] ml-[3rem] p-2' />
      <ul className=' flex flex-row flex-wrap justify-around mt-[1rem] px-[3rem] w-[35%]'>
        <li>
          <Link to='/'>
            <button className='cursor-pointer font-semibold hover:text-[#B5F1FA] transition ease-in-out duration-500  text-[1.2rem]' onClick={() => {
              setGenreId(0)
              setSearch(false)
              setQuery("")
              setSingleMovie([])
              setSearchData([])
              setVideoId("")
            }}>Home</button>
          </Link>
        </li>
        <Link to='/trending'>
          <li>
            <button className='cursor-pointer font-semibold hover:text-[#B5F1FA] transition ease-in-out duration-500 text-[1.2rem]' onClick={() => { setShowTrend(true)
              setSingleMovie([])
              setSearch(false)
              setQuery("")
              setSearchData([])
              setVideoId("") }}>Trending</button>
          </li>
        </Link>
        <li>
          <Link to='/genrecard'>
            <button className='cursor-pointer hover:text-[#B5F1FA] transition ease-in-out duration-500 font-semibold text-[1.2rem]' onClick={() => {
              setGenreId(0);
              setSearch(false)
              setQuery("")
              setVideoId("")
              setSearchData([]);
              setSingleMovie([])
            }}>Genres</button>
          </Link>
        </li>
      </ul>
      <div className='w-[50%] flex flex-row flex-wrap justify-between'>
        <input
          type='text'
          className='w-[70%] z-10 p-3 h-[3.6rem] text-[#001B41] font-semibold text-[1rem]'
          placeholder='Enter the movie name you want to Search'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}

        />
        <button className=' rounded-lg py-2 px-[3rem] cursor-pointer hover:text-[#B5F1FA] transition ease-in-out duration-500 font-semibold text-[1.2rem]' onClick={() => {
          setSearch(true)
          setVideoId("")
          setSingleMovie([])
          setSearchData([])
        }}>Search</button>
      </div>
    </nav>
  )
}

export default Navbar