import tradedge from "./photo/about.png";

export default function Partnercard(){
    return ( 
        <div className="bg-secondary w-[65%]  h-fit md:w-[20%] shadow-md md:h-[35vh] rounded-2xl flex items-center ">
          
        <img className="p-3 w-full h-3/4  " src={tradedge}/>
        </div>
    )
}