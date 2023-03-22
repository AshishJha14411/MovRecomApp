import  {useContext} from 'react'
import { MovieContext } from '../context/types';
import { MoviesContext } from '../context/MovieContext'
const MovieCard = () => {
  /* getting movielist data aset single movie to redirect to movie page and set movie id to get movie details for trailer */
  const {movieList,setSingleMovie, setMovieId} = useContext(MoviesContext) as MovieContext

  return ( 
    <section className="">
      <div className="flex w-full flex-row flex-wrap py-24 mx-auto ">
        {movieList && movieList.map((item) => {
        return (
        <div className="flex flex-wrap w-[100%] xl:w-[30%] md:w-[40%] justify-center mx-auto" key={item.id} onClick={() => {
          setSingleMovie([item])
        }}>
          <div className="xl:w-[100%] w-[100%] p-4">
            <div className=" cursor-pointer w-[100%] mx-auto p-2 h-[105%] rounded-lg" onClick={()=> {
              setMovieId(item.id);
              }} >
              <img className="h-[60%] rounded w-full object-contain object-center mb-6"  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="content"  />
              <p className="tracking-widest text-[#B5F1FA] text-lg pb-2 text-center font-medium title-font">{item.title}</p>
              <p className="tracking-widest text-[#B5F1FA] text-md pb-2 font-medium text-center title-font">Rating: {item.vote_average}</p>
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