import Img1 from '../assets/unsplash_b2jkMC95a_8.png'
import { MapPin } from 'phosphor-react'

interface CardProps {
  title:string
  description:string
}

export function Card({title, description} : CardProps) {
  return (
    <div className="w-80 rounded-tl-xl rounded-tr-xl border-2 border-[#EAEAEA] max-h-80">
      <img src={Img1} alt="" className='w-full h-36 rounded-tl-xl rounded-tr-xl object-cover'/>
      <div className='p-4 w-full'>
        <h3 className='font-bold text-xl my-4'>
          { title }
        </h3>
        <p className='font-normal text-base opacity-75 truncate'>
          { description }
        </p>
        <div className='flex items-center my-4'>
          <MapPin />
          Sorocaba - SP
        </div>
      </div>
    </div>
  )
}