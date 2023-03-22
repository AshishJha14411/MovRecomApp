import { useContext } from 'react'
import { MoviesContext } from '../context/MovieContext'
import { MovieContext } from '../context/types'

const TrendingPage = () => {
    /* trending movie data and setting single movie data onclick */
    const { trending, setSingleMovie } = useContext(MoviesContext) as MovieContext
    /* setting movie id onclick */
    const { setMovieId } = useContext(MoviesContext) as MovieContext

    return (
        <section className="text-gray-600  body-font " >
            <h1 className='w-[100%] pl-[2rem] text-center pb-8 pt-[2rem] text-[#9BD0DC] font-semibold text-4xl '>Trending Movies Now
            </h1>
            <p className='text-center text-[#9BD0DC] text-md'><sup className='font-extrabold text-[1rem]'>*</sup>This is the Treadning Movies List for the Day according to TMDB</p>
            <div className="container flex flex-row flex-wrap px-5 justify-around  py-24 mx-auto ">
                {trending && trending.map((item) => {
                    return (
                        <div className="flex flex-wrap md:w-[40%] xl:w-[25%] justify-center m-4" key={item.id} onClick={() => {
                            setSingleMovie([item])

                        }}>
                            <div className="xl:w-[100%] w-[25rem] md:w-[100%] p-4">
                                <div className="cursor-pointer w-full pt-7 h-[105%]  rounded-lg" onClick={() => {
                                    setMovieId(item.id);
                                }}>
                                    <img className="h-[27rem] bg  rounded w-full object-contain hover:scale-[1.10] transition ease-in-out duration-500 object-center mb-6" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="content" />
                                    <h3 className="tracking-widest text-[#B5F1FA] text-center text-xl font-medium title-font">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TrendingPage