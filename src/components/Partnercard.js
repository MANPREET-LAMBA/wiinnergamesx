import tradedge from "./photo/about.png";

export default function Partnercard() {
    return (
        <div className="bg-gradient-to-r  from-pink-700 via-purple-700 w-2/12  to-sky-700 p-1 hover:scale-105 transition-all duration-500 ease-in-out rounded-xl">

            <div className="bg-white w-[65%]  h-fit md:w-full shadow-md md:h-[35vh] rounded-xl flex items-center ">

                <img className="p-3 w-full h-3/4  " src={tradedge} />
            </div>
            </div>
            )
}