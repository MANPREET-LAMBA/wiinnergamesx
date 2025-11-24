import heroimg from "./photo/heroimg.png"
import "../index.css"
import bgg from "../components/photo/banner.webp"
export default function Herosection() {
  return (
    <div className="w-full h-[90vh] md:h-screen relative">
      <div className=" absolute w-full bg-black ">
        <img className=" w-full h-[90vh] md:h-screen" src={bgg} />
      </div>
      <div className=" absolute ">
        <section className=" h-screen overflow-hidden  lg:h-[80vh] bg-transparent  text-copporx py-16 text-center flex flex-col items-center lg:flex-row  lg:justify-evenly lg:items-start  w-full lg:px-16">


          <h1 className="text-3xl lg:text-6xl  text-center lg:text-start p-3 font-playfair  rounded-xl font-extrabold lg:min-w-fit">
             Re-defining Winning <br/> Strategies 
          </h1>
          <div className="mt-6 flex justify-center lg:justify-end lg:pr-[1%]">
            <img
              src={heroimg}
              alt="hero"
              className=" w-[90%] md:h-[40%] lg:w-6/12  rounded-xl shadow-2xl "

            />
          </div> 
 
        </section>
      </div>
    </div>
  )
}