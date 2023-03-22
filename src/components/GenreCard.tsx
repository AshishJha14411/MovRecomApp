import  { useContext } from 'react'
import { GenresContext } from '../context/GenreContext'
import { GenreContext } from '../context/types';
const GenreCard = () => {
  /* calling the genre list from context and setting genre id based on click */
  const { genres, setGenreId } = useContext(GenresContext) as GenreContext
  return (
    <div className='w-[90%] flex flex-row flex-wrap mx-auto'>
      {genres && genres.map((item) => {
        return (
          <div className='2xl:w-[20%] xs:w-[40%] mx-auto' key={item.id}>
            <button type="button" onClick={() => setGenreId(item.id)} className="px-[3rem] mx-[1rem] text-[#B5F1FA] my-[1rem] py-[1.5rem] font-semibold rounded-full bg-[#0e2a51] hover:bg-[#0254AF]  transition ease-in-out duration-700">{item.name}</button>
          </div>
        )
      })}
    </div>

  )
}

export default GenreCard