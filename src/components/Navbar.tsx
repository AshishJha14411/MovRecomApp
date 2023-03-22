import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VideosContext } from '../context/VideoContext'
import { GenresContext } from '../context/GenreContext'
import { MovieSearch } from '../context/MovieSearch'
import { GenreContext, VideoContext, MovieSearchContext, MovieContext } from '../context/types';
import logo from '../assets/logo-no-background.png'
import { MoviesContext } from '../context/MovieContext'
const Navbar = () => {
  /* setting genre Id */
  const {setGenreId } = useContext(GenresContext) as GenreContext
  /* states need for searching the data */
  const { setSearch, setQuery, query, setSearchData } = useContext(MovieSearch) as MovieSearchContext
  /* reseting video id to prevent unnecessary redirects */
  const { setVideoId } = useContext(VideosContext) as VideoContext
  /* states for setting single movie or showing trending page */
  const { setShowTrend, setSingleMovie } = useContext(MoviesContext) as MovieContext
  /* setting up navigate hook to navigate to home page */
  const navigate = useNavigate()
  return (
    <nav className='bg-[#04070D] flex xl:flex-row xl:justify-start p-5 mx-[0] flex-col items-center  text-[#0659AE] text-center ' >
      <img src={logo} alt="nav-logo" className='xl:w-[10rem] w-[13rem] lg:ml-[2rem] xl:ml-[3rem] p-2' />
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
            <button className='cursor-pointer hover:text-[#B5F1FA] transition ease-in-out duration-500 pb-[1rem] font-semibold text-[1.2rem]' onClick={() => {
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
      <div className='w-[100%] xs:w-[50%] flex xl:flex-row   xl:justify-between flex-col items-center'>
        <input
          type='text'
          className='w-[80%] mx-auto z-10 p-3 h-[3.6rem] text-[#001B41] font-semibold text-[1rem]'
          placeholder='Enter the movie name you want to Search'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}

        />
        <button className=' rounded-lg py-2 px-[3rem] cursor-pointer hover:text-[#B5F1FA] transition ease-in-out duration-500 font-semibold text-[1.2rem]' onClick={() => {
          setSearch(true)
          setVideoId("")
          navigate("/")
          setSingleMovie([])
          setSearchData([])
        }}>Search</button>
      </div>
    </nav>
  )
}

export default Navbar