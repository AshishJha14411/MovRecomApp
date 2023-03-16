import { useContext } from 'react'
import { MoviesContext } from '../context/MovieContext'
import { MovieContext, VideoContext } from '../context/types'
import { VideosContext } from '../context/VideoContext';

const MoviePage = () => {
    const { singleMovie } = useContext(MoviesContext) as MovieContext
    const {videoId} = useContext(VideosContext) as VideoContext
   
  return (
    <section className="text-gray-600 body-font" style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${singleMovie[0].backdrop_path})`,
    backgroundSize: `cover`,
    
    }}>
            <div className=" ml-[-1rem] backdrop-blur-sm overflow-hidden">
                {singleMovie && singleMovie.map((item) => {
                    return (
                        <div className="  bg-[#001B41] bg-opacity-50 xl:w-[100%] w-full m-4" key={item.id}>
                            <div className="lg:w-[100%]  z-20 md:w-full p-4">
                                <div className=" h-[100vh]  flex flex-col md:flex-row p-2 rounded-lg" >
                                    <img className=" rounded object-cover mb-6 h-[100%] mx-auto md:w-[50%] w-full" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="content" />
                                    <div className='p-4 ml-[3rem]'>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Movie title : <span className='text-xl pl-2 font-medium'>{item.title}</span></p>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Released Data : <span className='text-xl pl-2 font-medium'>{item.release_date}</span></p>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Movie Language : <span className='text-xl pl-2 font-medium'>{(item.original_language).toUpperCase()}</span></p>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Average Ratings: <span className='text-xl pl-2 font-medium'>{item.vote_average}/10</span></p>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Total Ratings: <span className='text-xl pl-2 font-medium'>{item.vote_count}</span></p>
                                        <p className='text-[#B5F1FA] font-semibold pb-7 text-3xl'>Description: <span className='text-xl pl-2 font-medium'>{item.overview}</span></p>
                                        <button className='px-[2.5rem] text-[#B5F1FA]  py-[1.5rem] font-semibold rounded-full bg-[#0e2a51]' onClick={() => {
                                        if(videoId){
                                            window.open(
                                                `https://www.youtube.com/watch?v=${videoId}`,
                                                "_blank"
                                                )
                                        }
                                }}>Watch Trailer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
  )
}

export default MoviePage