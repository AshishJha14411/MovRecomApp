import { useContext } from 'react'
import { GenresContext } from '../context/GenreContext'
import { GenreContext } from '../context/types';
const GenreCard = () => {
  const { genres, setGenreId } = useContext(GenresContext) as GenreContext



  return (
    <div className='w-[80%] flex flex-row flex-wrap mx-auto'>
      {genres && genres.map((item) => {
        return (
          <div className='w-[20%]' key={item.id}>

            <button type="button" onClick={() => setGenreId(item.id)} className="px-[3rem] mx-[1rem] my-[1rem] py-[1.5rem] font-semibold rounded-full bg-gray-800 text-gray-100">{item.name}</button>
          </div>

        )
      })}
    </div>
  )
}

export default GenreCard