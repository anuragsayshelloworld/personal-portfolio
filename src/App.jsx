import Header from "./components/Header"
import MyInfo from "./components/MyInfo"
export default function App(){
  return <div className="flex flex-col h-screen w-screen">
           
           {/*Row I*/}
           <div className="w-full h-auto"> <Header/> </div>

           {/*Row II*/}
           <div className="flex">
            
            {/*Row II column I*/}
            <div className="relative"> <MyInfo/> </div>

            {/*Row II column column II*/}
            <div></div> 

           {/*Row III*/}
           <div></div> 
           </div>
         </div>
}