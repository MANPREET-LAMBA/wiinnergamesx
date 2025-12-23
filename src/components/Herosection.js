import heroimg from "./photo/heroimg.png"
import "../index.css"
import bgg from "../components/photo/new.jpg"
export default function Herosection() {
  return (
    <div className="w-full h-[80vh]  mt-16 lg:mt-0 lg:h-[100vh] xl:h-[100vh] md:h-screen relative">
      <div className=" absolute w-full bg-black ">
        <img className=" w-full h-[80vh] lg:h-[100vh] xl:h-[100vh] md:h-screen" src={bgg} />
      </div>
      <div className=" absolute w-full ">
        <section className=" h-screen overflow-hidden  lg:h-[80vh] bg-transparent  text-copporx py-8 lg:py-16 text-center flex flex-col items-center lg:flex-row  lg:justify-evenly lg:items-start  w-full lg:px-16">
          <div className="w-[100%] flex justify-center mt-10 lg:mt-20 ">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl  text-center  text-white lg:text-start p-3 font-playfair  rounded-xl font-extrabold ">
             Re-defining Winning Strategies 
          </h1>
          </div>

          {/* <h1 className="text-3xl lg:text-6xl  text-center lg:text-start p-3 font-playfair  rounded-xl font-extrabold lg:min-w-fit">
             Re-defining Winning <br/> Strategies 
          </h1> */}
          {/* <div className="mt-6 flex justify-center lg:justify-end lg:pr-[1%]">
            <img
              src={heroimg}
              alt="hero"
              className=" w-[90%] md:h-[40%] lg:w-6/12  rounded-xl shadow-2xl "

            />
          </div>  */}

        </section>
      </div>
    </div>
  )
}