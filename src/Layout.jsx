export default function Layout(){
    return <div className="h-screen w-screen flex flex-col">
            <div className="hidden md:flex border h-[261px] w-full"><Header/></div>
            
            <div className="flex">
                <div className="flex flex-col border w-[30%] h-auto">

                </div>
                <div className="flex-1"></div>
            </div>

            <div>{/*footer*/}</div> 
           </div>
}