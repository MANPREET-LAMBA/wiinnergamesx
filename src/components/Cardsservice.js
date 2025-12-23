import '../index.css'
import checkimg from "./photo/check.png"

export default function Cardservice({ service, title }) {
    return (
 <div className="bg-gradient-to-r  from-pink-700 via-purple-700 lg:w-3/12  to-sky-700 p-1 hover:scale-105 transition-all duration-500 ease-in-out rounded-xl ">
        <div className=" w-full   h-full py-5 px-3  lg:h-full rounded-xl overflow-hidden bg-white">

            <h1 className="text-3xl text-primary font-playfair  font-bold">{title} </h1>
            <ul className="list-none  list-outside mx-5 text-start text-xl pt-4 md:text-2xl  text-gray-700 space-y-2">
                {service.map((service, index) => (
                   <div className='flex items-center gap-2'>
                    <img className='w-5 h-5' src={checkimg}/>
                     <li key={index}>{service}</li>
                   </div>
                ))}
            </ul>

        </div>
        </div>

    )
}