
export const Header = () =>   {
    return (
    <div className="flex justify-between items-center mt-[20px] w-[500px]" >
        <button className="bg-[#5c2cd7] w-28 text-white rounded-xl p-1 font-bold">Menu</button>
        <div className="grid grid-cols-2 gap-1">
            <div className="bg-[#ff6585] w-[20px] h-[20px] border-[1px] border-black border-b-4 rounded-full"></div>
            <div className="bg-[#fbce64] w-[20px] h-[20px] border-[1px] border-black border-b-4 rounded-full"></div>           
            <div className="bg-[#fbce64] w-[20px] h-[20px] border-[1px] border-black border-b-4 rounded-full"></div>
            <div className="bg-[#ff6585] w-[20px] h-[20px] border-[1px] border-black border-b-4 rounded-full"></div>        
        </div>
        <button className="bg-[#5c2cd7] w-28 text-white rounded-xl p-1 font-bold">Restart</button>
    </div>
    )

}