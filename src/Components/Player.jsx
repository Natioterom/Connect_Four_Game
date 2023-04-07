import { FaRegSmile } from 'react-icons/fa'
export const Player = ({player,points}) =>{
    const color = player === 1 ? 'bg-[#ff6585]' : 'bg-[#fbce64]'
    return(
        <div className='flex flex-col items-center bg-white w-[100px] h-[100px] 
        rounded-2xl border-2 border-black border-b-8 gap-1'>
            <span className={`text-3xl  border-black  ${color} rounded-full`}> <FaRegSmile /> </span>
            <h1 >Player {player}</h1>
             <p className="font-bold text-2xl">{points}</p>
        </div>
    )
}