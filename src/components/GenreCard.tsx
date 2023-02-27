import { useContext } from 'react'
import { GenresContext } from '../context/GenreContext'
import { GenreContext } from '../context/types';
const GenreCard = () => {
  /* Importing the Genre Context */
  const { genres, setGenreId } = useContext(GenresContext) as GenreContext
  return (
    <div className='w-[80%] flex flex-row flex-wrap mx-auto'>
      <h1 className='w-[100%] pl-[2rem] pr-[40%] pb-8 text-[#8D021F] font-semibold text-4xl '>Unleash the thrill of cinema: Explore and Discover trailers from your favorite genres with Genre Finder.</h1>
      {genres && genres.map((item) => {
        return (
          <div className='w-[20%]' key={item.id}>
            <button type="button" onClick={() => setGenreId(item.id)} className="px-[3rem] mx-[1rem] text-[#EC3D37] my-[1rem] py-[1.5rem] font-semibold rounded-full bg-gray-800">{item.name}</button>
          </div>
        )
      })}
    </div>
  )
}

export default GenreCard