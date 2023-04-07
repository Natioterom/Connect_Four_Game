import { useState, useEffect } from "react"
import { Player } from "./Player"
export const Board = () => {
    
    const [board, setBorard]= useState(Array(42).fill(null))
    const [position, setPosition] = useState({ x: 0 })
    const [ isInside, setIsInside ] = useState(false)
 
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX } = event
      if(isInside){
      setPosition({ x: clientX })
      }
    }    
    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [isInside])
   
  const handleMouseEnter = () =>{
    setIsInside(true)
  }
  const handleMouseLeave = () => {
    setIsInside(false)
  }
    return(
        <>
        <div style={{
        position: 'absolute',
        borderRight: '25px solid transparent',
        borderTop: '25px solid rgb(239 91 122)',
        borderLeft: '25px solid transparent',
        borderBottom: '25px solid transparent',
        pointerEvents: 'none',
        left: -20,
        transform: `translate(${position.x}px)`,
        marginTop:'70px'
      }}
      ></div>
        <article className='flex items-center gap-4'>
        <Player 
        player={1}
        points={12}/>
        <div className="grid grid-rows-6 grid-flow-col gap-4  place-content-center 
         bg-white w-[550px] h-[500px] my-[30px] rounded-3xl p-[20px]
         border-2 border-black border-b-[10px]"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
        { board.map((element, i) => { return(
            <div key={i} className={`w-[60px] h-[60px] bg-[#7945ff] border-2
             border-black border-t-8 mt-[10px] rounded-full`}>
            </div>
        )})}
        </div>
        <Player
        player={2}
        points={23} />
        </article>
        </>
    )
}